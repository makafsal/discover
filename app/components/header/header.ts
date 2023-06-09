class Header extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Apply external styles to the shadow DOM
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./components/header/header.css");

    // Attach the created element to the shadow DOM
    shadow.appendChild(linkElem);


    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'app-header');

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Click me';
    button.setAttribute('id', 'header-btn');

    button.addEventListener('click', () => {
      console.log('through component')
      window['electronAPI'].openFile()
    })

    const title = this.getAttribute('title');
    wrapper.textContent = title;

    wrapper.appendChild(button);
    shadow.appendChild(wrapper);
  }
}

customElements.define('app-header', Header);