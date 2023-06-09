class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Apply external styles to the shadow DOM
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./components/sidebar/sidebar.css");
    shadow.append(linkElem);

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'app-sidebar');

    shadow.appendChild(wrapper);
  }
}

customElements.define('app-sidebar', Sidebar);
