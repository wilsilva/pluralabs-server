import User from './user';
import Course from './Course';
import Material from './Material';

export default interface Student {
  _id: string;
  user: User|string;
  course_subscribe?: Course[];
  material_viewd?: Material[];
}
