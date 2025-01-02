import type { SocialLinkInterface } from '~/components'

const links: string[][] = [
  [
    'pi pi-youtube',
    'https://www.youtube.com/@wejrzeniawsiebie8813',
    'Link to YouTube',
  ],
  [
    'pi pi-instagram',
    'https://www.instagram.com/tomasz_nowy_nowicki_art',
    'Link to Instagram',
  ],
  [
    'pi pi-facebook',
    'https://www.facebook.com/profile.php?id=100087463981706',
    'Link to Facebook',
  ],
]

export const socialLinks: SocialLinkInterface[] = links.map(
  ([icon, url, label]): SocialLinkInterface => ({
    icon,
    url,
    label,
  })
)
