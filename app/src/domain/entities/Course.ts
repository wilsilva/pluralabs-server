import Material from './Material';
import Teacher from './Teacher';

export default interface Course {
  name: string;
  category: string;
  tags: string[];
  description: string;
  materials: string[]|Array<Material>;
  author: Teacher|string;
  createAt: string;
}
