import { getStories } from "@/api/stories"
import Link from "next/link"

export default async function Stories () {

  const stories = await getStories()

  return (
    <>
      <ul>
        {stories.items.map(story => (
          <li
            key={story.slug}
          >
            <Link
              href={`/stories/${story.slug}`}
              children={story.title}
            />
          </li>
        ))}
      </ul>
      <Link
        href="/"
        children="< Voltar"
      />
    </>
  )
}
