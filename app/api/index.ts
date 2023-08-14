export async function getTerms() {
  const res = await fetch('https://dev.gurufin.io/terms?lang=KO')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
