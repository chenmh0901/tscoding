async function fetchLimit(URLS: string[], limit: number) {
  const results = []
  const inFlight = []

  for (const url of URLS) {
    const promise = fetch(url).then((res) => {
      console.log('fetchLimit', url)
      return res
    })

    results.push(promise)
    inFlight.push(promise)

    if (inFlight.length >= limit) {
      await Promise.race(inFlight)
      inFlight.splice(inFlight.indexOf(promise), 1)
    }
  }

  await Promise.all(inFlight)
  return Promise.all(results)
}
