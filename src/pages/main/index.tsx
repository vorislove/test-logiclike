import { useGetCourses } from 'src/api'
import { ALL_TAGS } from './constants'
import { Card, Layout, Loader } from 'src/ui'
import { Sidebar } from 'src/ui/sidebar'
import { useGetTags } from './hooks'
import { useMemo, useState } from 'react'
import styles from './styles.module.scss'

export const MainPage = () => {
  const { data, isLoading } = useGetCourses()
  const { tags } = useGetTags(data ?? [])
  const [activeTag, setActiveTag] = useState(tags[0])

  const filteredCourse = useMemo(() => {
    if (!data) return []
    if (activeTag === ALL_TAGS) return data

    return data?.filter((course) => course.tags.includes(activeTag))
  }, [activeTag, data])

  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
  }

  if (isLoading && !data)
    return (
      <div className={styles.loader_container}>
        <Loader />
      </div>
    )

  return (
    <Layout>
      <>
        <Sidebar
          items={tags}
          activeItem={activeTag}
          onItemClick={handleTagClick}
        />
        <div className={styles.card_container}>
          {filteredCourse?.map((course) => {
            return <Card key={course.id} {...course} />
          })}
        </div>
      </>
    </Layout>
  )
}
