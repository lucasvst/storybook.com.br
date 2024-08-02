import { getStories, getStory } from "@/api/stories"
import Link from "next/link"

export async function generateStaticParams() {
  const stories = await getStories()
  return stories.items.map(story => ({
    slug: story.slug
  }))
}

export default async function Story (props: any) {

  const story = await getStory(props.params.slug)

  return (
    <>
      <h2>{story.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: story.content }} />
      <Link
        href="/stories"
        children="< Voltar"
      />
    </>
  )
}
