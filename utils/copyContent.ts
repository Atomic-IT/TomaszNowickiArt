export default function copyContent(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard successfully!')
    })
    .catch((err) => {
      console.error('Failed to copy text to clipboard', err)
    })
}
