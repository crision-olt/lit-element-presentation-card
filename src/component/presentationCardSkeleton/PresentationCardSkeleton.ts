import {LitElement, html} from 'lit';
import style from './PresentationCardSkeleton.style';
class PresentationCardSkeleton extends LitElement {
    static get styles() {
        return style;
      }


    
    render() {
        return html`
        <div class="card">
            <div class="card__pricipalContainer">
                <div class="card__pricipalContainer__occupation"></div>
                <div class="card__pricipalContainer__name"></div>
            </div>
            <div class="card__details"> 
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__value"></div>
                    </div>
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__value"></div>
                    </div>
                </div>
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__value"></div>
                    </div>
                </div>
                <div class="card__details__about">
                    <div class="card__details__about__item">
                        <div class="card__details__about__item__value"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('presentation-card-skeleton', PresentationCardSkeleton);