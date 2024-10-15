import swapiData from '../api/Swapi.js'
import CardPersonaje from '../class/CardPersonaje.js'

const CardGenerador = () => {
  const onFulfilled = async ({
    data,
    color,
    CardGenerador,
    isLast,
    numberList
  }) => {
    const { name, height, mass } = data
    try {
      CardGenerador.parentElement.insertAdjacentHTML(
        "beforeend",
        new CardPersonaje({
          name,
          height,
          mass,
          color,
          numberList: numberList,
        }).html()
      )
    } catch (error) {
      console.log(error)
    } finally {
      CardGenerador.dataset.state = isLast ? "completed" : ""
    }
  }

  async function* getPersonaje(CardGenerador) {
    const { color, range } = CardGenerador.dataset
    const [start, end] = range.split(",").map(Number)

    for (let i = start; i <= end; i++) {
      CardGenerador.dataset.state = "loading"
      const data = await swapiData(i)

      yield onFulfilled({
        data,
        color,
        CardGenerador,
        isLast: i === end,
        numberList: i
      })
    }
  }

  document.querySelectorAll("[data-card-generator]").forEach((card) => {
    const generator = getPersonaje(card)
    const cardBody = card.querySelector(".card-body")

    const listener = () => {
      if (!card.dataset.state) {
        generator.next()
      }
    }
    cardBody.addEventListener("mouseenter", listener)
    cardBody.addEventListener("click", listener)
  });

}

export default CardGenerador
