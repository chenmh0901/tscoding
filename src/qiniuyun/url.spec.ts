function UrlParse(url: string): string {
  // const urlObj = new URL(url)
  // return urlObj.pathname
  // 使用数组解析
  const arr = url.split('/')
  const [key, value] = arr[arr.length - 1].split('=')
  return arr[arr.length - 1]
}
