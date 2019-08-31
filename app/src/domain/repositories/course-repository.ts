import RepositoryApplication from './repository-application';
import Course from '../entities/Course';
import Teacher from '../entities/Teacher';
import TeacherRepository from './teacher-respository';

export default class CourseRepository extends RepositoryApplication<Course> {
  private teacherRepository: TeacherRepository;

  constructor() {
    super('courses');
    this.teacherRepository = new TeacherRepository();
  }

  async getCoursesByTeacher(teacher: Teacher): Promise<Course[]> {
    await this.dao.connect();

    const courses = await this.dao.collection
      .aggregate<Course>([{
        $match: { _id: teacher._id },
      },
      {
        $lookup: {
          from: this.collectionName,
          localField: 'author',
          foreignField: '_id',
          as: this.teacherRepository.collectionName,
        },
      }])
      .sort({ createdAt: -1 });

    await this.dao.disconect();
    return courses.toArray();
  }
}
