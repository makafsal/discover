class AppBody extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'app-body');
    wrapper.append(...this.children);

    shadow.appendChild(wrapper);
  }
}

customElements.define('app-header', AppBody);