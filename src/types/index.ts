export type SurfaceCategory = 'WEB' | 'API' | 'CLOUD' | 'IDENTITY' | 'NETWORK' | 'THIRD-PARTY';

export interface SurfaceItem {
  id: SurfaceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  vectors: string[];
}

export type MatrixSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface MatrixCell {
  category: string;
  phase: 'DISCOVER' | 'TEST' | 'VALIDATE' | 'IMPACT';
  vulnerability: string;
  severity: MatrixSeverity;
  status: 'VALIDATED' | 'TESTING' | 'DISCOVERED';
  detail: string;
}

export interface ServiceModule {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface SampleFinding {
  title: string;
  severity: MatrixSeverity;
  status: string;
  impact: string;
  evidence: {
    step1: string;
    step2: string;
    step3: string;
  };
  remediation: string;
}

export interface SampleReport {
  executiveSummary: string;
  surfaceCount: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  findingTitle: string;
  businessImpact: string;
  recommendation: string;
  retestStatus: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface ResearchArticle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  status: 'COMING SOON' | 'PUBLISHED';
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  target: string;
  service: string;
  message: string;
  hp_field_x7q: string; // Spam protection honeypot
  authorized: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
