export default function setTheme(islight = true) {
  let link = document.querySelector('#theme-link')
  const href = `/theme_${islight ? 'light' : 'dark'}.css`

  if (!link) {
    const head = document.querySelector('head')
    link = document.createElement('link')
    link.id = '#theme-link'
    link.rel = 'stylesheet'
    link.href = href
    head.appendChild(link)
  } else {
    link.href = href
  }
}
