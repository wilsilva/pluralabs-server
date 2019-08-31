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
  urlFile: string;
  type: MaterialType;
  description?: string;
  category?: string;
  tags?: string[];
  createdAt: string;
  author: Teacher|string;
}
