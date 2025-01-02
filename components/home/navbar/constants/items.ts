import type { NavbarItemInterface } from '~/components'

const items: string[][] = [
  ['STRONA GŁÓWNA', '/'],
  ['O MNIE', '/'],
  ['GALERIA', '/'],
  ['KONTAKT', '/'],
]

export const navbarItems: NavbarItemInterface[] = items.map(
  ([label, href]): NavbarItemInterface => ({
    label,
    href,
  })
)
