import './LabelInput.scss';

class LabelInput extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            ${JSON.parse(this.getAttribute('list')).map((item) => {
                return `<label> ${item.label} <input type="${item.kind}" name="${item.name}"></label>`
            }).join(' ')}         
        `
            }
    };

customElements.define('it-label-input', LabelInput);