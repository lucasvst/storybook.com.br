import { Stories } from "@/domain/Stories"

export async function getStories () {
    const stories: Stories = await import(`./stories.json`)
    return stories
}

export async function getStory (slug: string) {
    const stories: Stories = await import(`./stories.json`)
    const story = stories.items.find(story => story.slug === slug)
    if (!story) { throw new Error() }
    return story
}