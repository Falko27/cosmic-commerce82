class FaqAccordion extends HTMLElement {
  constructor() {
    super();

    this.initfaq()
  }

  initfaq() {

    const clear = this.clearOpenAccordions

    const blocks = document.querySelectorAll('.faq-container__block')

    blocks.forEach((block) => {

      const header = block.querySelector('.faq-container__block__header')
      const copy = block.querySelector('.faq-container__block__copy')

      header.addEventListener('click', () => {

        if (copy.classList.contains('show')) {
          copy.classList.remove('show') 
          header.classList.remove('show') 
        } else {
          clear()
          copy.classList.toggle('show')
          header.classList.toggle('show') 
        }
    
      })

    })
    
  }

  clearOpenAccordions() {

    const headers = document.querySelectorAll('.faq-container__block__header')
    headers.forEach((header) => {
      header.classList.remove('show')
    })

    const accordions = document.querySelectorAll('.faq-container__block__copy')
    accordions.forEach((accordion) => {
      accordion.classList.remove('show')
    })

  }
}

customElements.define('faq-accordion', FaqAccordion);