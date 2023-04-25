import { describe, test } from "vitest";

import './PresentationCard';
import { fixture, html } from "@open-wc/testing";

describe('PresentationCard', () => {
    test('should render', async ({expect}) => {
        const screen = await fixture(html`<presentation-card  name="Cristian Ionut Olteanu" photo="http://www.agbrands.com.ar/wp-content/uploads/2017/01/perfil.jpg" skills="Me gusta compartir lo que se y encontrar nuevas/mejores formas de hacer las cosas." hobbies="Programación, Anime, Videojuegos, Musica..." stack="React" age="24" occupation="Frontend Dev."></presentation-card>`);
        

        expect(screen.shadowRoot?.querySelector('img')?.src).toBe('http://www.agbrands.com.ar/wp-content/uploads/2017/01/perfil.jpg');


        expect(screen.shadowRoot?.querySelector('.occupation')?.textContent).toBe('Frontend Dev.');
        expect(screen.shadowRoot?.querySelector('.name')?.textContent).toBe('Cristian Ionut Olteanu');

        expect(screen.shadowRoot?.querySelector('.card-details')?.children[0]?.children[0]?.children[0]?.textContent).toBe('Edad');
        expect(screen.shadowRoot?.querySelector('.card-details')?.children[0].children[0].children[1].textContent).toBe('24');
        expect(screen.shadowRoot?.querySelector('.card-details')?.children[0].children[1].children[0].textContent).toBe('Stack');
        expect(screen.shadowRoot?.querySelector('.card-details')?.children[0].children[1].children[1].textContent).toBe('React');
        
        expect(screen.shadowRoot?.querySelector('.card-details')?.children[1].children[0].children[0].textContent).toBe('Hobbies');
        expect(screen.shadowRoot?.querySelector('.card-details')?.children[1].children[0].children[1].textContent).toBe('Programación, Anime, Videojuegos, Musica...');
    });
});