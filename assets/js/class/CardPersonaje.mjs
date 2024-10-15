import Personaje from './Personaje.mjs'

export default class CardPersonaje extends Personaje {
  #color
  numberList

  constructor({ name, height, mass, color, numberList }) {
    if (!name || !height || !mass || !color) {
      throw new Error(
        "Error en el constructor de CardPersonaje : faltan parametros"
      )
    }
    super({ name, height, mass })
    this.#color
    this.numberList = numberList
    console.log(color)
  }

  html() {
    if (
      this.numberList === 3 ||
      this.numberList === 8 ||
      this.numberList === 13
    ) {
      return `
                <div class="col-12 col-md-6 col-lg-4 ">
                  <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                    <div class="timeline-icon ${this.#color}"><i class="fa fa-desktop" aria-hidden="true"></i></div>
                    <div class="timeline-text">
                      <h6>${this.name} </h6>
                      <p>Altura : ${this.height} cm.<p>
                      <p>Peso : ${this.mass === "unknown" ? "desconcido" : this.mass + " Kg"} <p>
                    </div>
                  </div>
                </div>
      `
    } else {
      return `
                <div class="col-12 col-md-6 col-lg-4 ">
                  <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                    <div class="timeline-icon ${this.#color}"><i class="fa fa-desktop" aria-hidden="true"></i></div>
                    <div class="timeline-text">
                      <h6>${this.name} </h6>
                      <p>Altura : ${this.height} cm.<p>
                      <p>Peso : ${this.mass === "unknown" ? "desconcido" : this.mass + " Kg"} <p>
                    </div>
                  </div>
                </div>
      `
    }
  }

}