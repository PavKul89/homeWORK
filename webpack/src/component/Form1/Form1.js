import './Form1.scss';
import '../LabelInput/LabelInput';

class Form1 extends HTMLElement {
    constructor() {
        super();
        this.formDef1 = [
            {label:'Название сайта:',kind:'longtext',name:'sitename'},
            {label:'URL сайта:',kind:'longtext',name:'siteurl'},
            {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
            {label:'E-mail для связи:',kind:'shorttext',name:'email'},
            {label:'Рубрика каталога:',kind:'combo',name:'division',
              variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
            {label:'Размещение:',kind:'radio',name:'payment',
              variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
            {label:'Разрешить отзывы:',kind:'check',name:'votes'},
            {label:'Описание сайта:',kind:'memo',name:'description'},
            {label:'Опубликовать:',kind:'submit'},
          ];

          this.formDef2 = [
            {label:'Фамилия:',kind:'longtext',name:'lastname'},
            {label:'Имя:',kind:'longtext',name:'firstname'},
            {label:'Отчество:',kind:'longtext',name:'secondname'},
            {label:'Возраст:',kind:'number',name:'age'},
            {label:'Зарегистрироваться:',kind:'submit'},
          ];
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            <form class="form1">
                <it-label-input class="label-input" list='${JSON.stringify(this.formDef1)}'></it-label-input>    
            </form>
            <form class="form1">
                <it-label-input class="label-input" list='${JSON.stringify(this.formDef2)}'></it-label-input>    
            </form>
        `
    }

}

customElements.define('it-form', Form1)
