const swapiData = async (people) => {
  const URL = `https://swapi.dev/api/people/${people}?format=json`
  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error("Error en la llamada")
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default swapiData


