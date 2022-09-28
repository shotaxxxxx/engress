export default class Accordion {
  constructor() {
    this.DOM = {};
    this.DOM.faq = document.querySelectorAll(".js-faq");

    this._accordion();
  }

  _accordion() {
    for (let i = 0; i < this.DOM.faq.length; i++) {
      this.DOM.faq[i].addEventListener("click", () => {
        this.DOM.faq[i].children[0].classList.toggle("is-open");
        this.DOM.faq[i].children[1].classList.toggle("is-open");
      });
    }
  }
}
