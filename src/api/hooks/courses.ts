import { CoursesService } from 'src/api'
import { useQuery } from 'src/hooks'

export const useGetCourses = () => useQuery(() => CoursesService.getCourses())
