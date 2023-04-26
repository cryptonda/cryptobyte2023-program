export function shortenText(txt: string, maxWords = 20) {
  const words = txt.split(' ')
  const shortenedText = words.slice(0, 20).join(' ')

  if (words.length > maxWords)
    return `${shortenedText} ... (více)`
  else
    return txt
}
