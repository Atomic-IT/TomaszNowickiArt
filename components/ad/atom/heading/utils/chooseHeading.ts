import type { HeadingType } from '../'

export function chooseHeading(tag: number): string {
  const headings: HeadingType[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  return headings[tag - 1]
}
