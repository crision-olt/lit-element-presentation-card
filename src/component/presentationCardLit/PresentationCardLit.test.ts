import { describe, test } from "vitest";

import './PresentationCardLit.ts';

import { fixture, html} from "@open-wc/testing";


describe('PresentationCardLit', () => {
    test('should render', async ({expect}) => {
        const screen = await fixture(html`<presentation-card-lit  name="Cristian Ionut Olteanu" photo="http://www.agbrands.com.ar/wp-content/uploads/2017/01/perfil.jpg" skills="Me gusta compartir lo que se y encontrar nuevas/mejores formas de hacer las cosas." hobbies="Programación, Anime, Videojuegos, Musica..." stack="React" age="24" occupation="Frontend Dev."></presentation-card-lit>`);
        

        expect(screen.shadowRoot?.querySelector('img')?.src).toBe('http://www.agbrands.com.ar/wp-content/uploads/2017/01/perfil.jpg');


        expect(screen.shadowRoot?.querySelector('.card__pricipalContainer__occupation')?.textContent).toBe('Frontend Dev.');
        expect(screen.shadowRoot?.querySelector('.card__pricipalContainer__name')?.textContent).toBe('Cristian Ionut Olteanu');

        expect(screen.shadowRoot?.querySelector('#age')?.textContent).toBe('Edad');
        expect(screen.shadowRoot?.querySelector('#age_value')?.textContent).toBe('24');
        expect(screen.shadowRoot?.querySelector('#stack')?.textContent).toBe('Stack');
        expect(screen.shadowRoot?.querySelector('#stack_value')?.textContent).toBe('React');
        
        expect(screen.shadowRoot?.querySelector('#hobbies')?.textContent).toBe('Hobbies');
        expect(screen.shadowRoot?.querySelector('#hobbies_value')?.textContent).toBe('Programación, Anime, Videojuegos, Musica...');
    });
});