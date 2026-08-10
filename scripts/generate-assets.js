const fs = require('fs');
const path = require('path');

// Ensure public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1x1 base dark cyan PNG pixel expander to build og-image.png (1200x630 minimal valid PNG)
// Standard 1x1 black/cyan PNG buffer header
function createValidPngBuffer() {
  // Valid 1200x630 PNG header structure or RGBA raw PNG buffer
  const width = 1200;
  const height = 630;
  const zlib = require('zlib');

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type (RGB)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Raw image data: height rows, each starting with filter byte 0, followed by width * 3 bytes (RGB: #07090D)
  const rawRow = Buffer.alloc(1 + width * 3);
  rawRow[0] = 0; // Filter type 0
  for (let x = 0; x < width; x++) {
    const offset = 1 + x * 3;
    // Dark background #07090D
    rawRow[offset] = 0x07;
    rawRow[offset + 1] = 0x09;
    rawRow[offset + 2] = 0x0D;
  }

  const rawData = Buffer.concat(Array(height).fill(rawRow));
  const compressedData = zlib.deflateSync(rawData);

  function createChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(4 + 4 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4);
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  function crc32(buf) {
    let c = -1;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ -1) >>> 0;
  }

  const crcTable = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = createChunk('IHDR', ihdr);
  const idatChunk = createChunk('IDAT', compressedData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const pngBuffer = createValidPngBuffer();
fs.writeFileSync(path.join(publicDir, 'og-image.png'), pngBuffer);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), pngBuffer);

console.log('Successfully generated public/og-image.png and public/favicon.ico');
