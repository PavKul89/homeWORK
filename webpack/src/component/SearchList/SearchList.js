import './SearchList.scss';

class SearchList extends HTMLElement {
    connectedCallback(){
        this.render();
    };

    render() {
        this.innerHTML = `
            <ul class="list-group position-absolute">
               ${JSON.parse(this.getAttribute('list')).map((item) => {
                return `<li class="list-group-item">${item}</li>`;
               })
            .join(' ')} 
            </ul>`;
    };
}

customElements.define('it-search-list', SearchList);