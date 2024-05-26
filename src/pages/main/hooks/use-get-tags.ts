import { ALL_TAGS } from '../constants'
import { Course } from 'src/types'

export const useGetTags = (courses: Course[]) => {
  const allTags = courses.flatMap((course) => course.tags)
  const uniqueTags = Array.from(new Set(allTags))
  uniqueTags.unshift(ALL_TAGS)

  return {
    tags: uniqueTags,
  }
}
