import { Course } from 'src/types'

import { BaseService, Path } from 'src/api'

export class CoursesService extends BaseService {
  public static async getCourses() {
    return this.fetch<Course[]>({
      url: Path.docs,
    })
  }
}
