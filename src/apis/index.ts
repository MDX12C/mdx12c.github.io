// export const server = 'http://localhost:8000';
export const server = 'https://mdx12c-server-production.up.railway.app';

export interface StdResponse<T> {
  error_code: number;
  http_status_code: number;
  data: T;
}
