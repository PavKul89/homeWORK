import './Card.scss';

class Card extends HTMLElement {
    disconnectedCallback() {
        this.removeEventListener('click', this.onRemove);
    };

    onRemove = (evt) => {
        if(evt.target.closest('.card-btn')) {
            this.remove();   
        }
    };

    connectedCallback() {
       this.render();
       const btn = this.querySelector('.card-btn');
       this.addEventListener('click', this.onRemove);
    };

    render() {
        this.innerHTML = `
        <div class="card">
            <header class="card-header">
                <h1>
                    ${this.getAttribute('header-content')}
                </h1>
            </header>
            <div class="card-body">
                <p1>
                    ${this.getAttribute('body-content')}
                </p1>
            </div>
            <button class="card-btn"> Click </button>
        </div>
        `
    };
}

customElements.define('it-card', Card);