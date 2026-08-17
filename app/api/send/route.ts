import { POST as contactHandler } from '../contact/route';

export async function POST(request: Request) {
  return contactHandler(request);
}
