import Teacher from './Teacher';

export enum MaterialType {
  VIDEO,
  PDF,
  JPEG,
  PNG,
  TXT
}
export default interface Material {
  filename: string;
  url_file: string;
  type: MaterialType;
  description?: string;
  category?: string;
  tags?: string[];
  created_at: string;
  author: Teacher|string;
}
