import {LitElement, html} from 'lit';
import style from './PresentationCardLit.style';
export class PresentationCardLit extends LitElement {
    static get styles() {
        return style;
    }
    
    static get properties() {
        return {
            name: {type: Object, },
            photo: {type: String},
            skills: {type: String},
            hobbies: {type: String},
            stack: {type: String},
            age: {type: String},
            occupation: {type: String},
        };
    }
    
    render() {
        return html`
        <div class="card">
            <div class="card__pricipalContainer">
                <img class="card__pricipalContainer__img" src="${this.photo ?? 'none'}" alt="profile" />
                <div class="card__pricipalContainer__occupation">${this.occupation ?? 'none'}</div>
                <div class="card__pricipalContainer__name">${this.name ?? 'none'}</div>
            </div>
            <div class="card__details"> 
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__label" id="age">Edad</div>
                        <div class="card__details__about__item__value" id="age_value">${this.age ?? 'none'}</div>
                    </div>
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__label" id="stack">Stack</div>
                        <div class="card__details__about__item__value" id="stack_value">${this.stack ?? 'none'}</div>
                    </div>
                </div>
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__label" id="hobbies">Hobbies</div>
                        <div class="card__details__about__item__value" id="hobbies_value">${this.hobbies ?? 'none'}</div>
                    </div>
                </div>
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__value" id="skills_value">${this.skills ?? 'none'}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('presentation-card-lit', PresentationCardLit);