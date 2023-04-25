import {css} from 'lit';
export default css`
        .card { 
			width: 450px;
			height: 260px;
			
			border-radius: 0.75rem;
			box-shadow:  1px 0px 1px 1px rgba(0,0,0,0.56), 0 0 0 0px rgba(0, 0, 0, 0.3);
			
			background: linear-gradient(90deg, rgba(153,246,228,1) 0%, rgba(15,118,110,1) 100%);
            z-index: 1;
			position: relative;
			display: grid;
			grid-template-columns: 40% auto;
			color: black;
			align-items: center;
			transform: rotateX(60deg) rotateZ(-45deg);
			will-change: transform;
			transition: transform 0.65s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.45s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
		  
        .card:hover {
            z-index: 100;
			transform: scale(1.1);
			box-shadow: 0 32px 80px 14px rgba(0,0,0,0.36), 0 0 0 1px rgba(0, 0, 0, 0.3);
        }
		  
        .card__pricipalContainer {
			display: grid;
			place-items: center;
        }

        .card__pricipalContainer__img {
            width: 100px;
            height: 100px;
        }
		  
		  
        .card__details__about {
			display: grid;
			grid-auto-flow: column;
        }
		   
        .card__details__about__item {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;
        }
		  
        .card__details__about__item__value {
			font-size: 1rem;
        }
		  
        .card__details__about__item__label {
			font-size: 0.75rem;
			font-weight: 600;
			color: var(--primary);
        }
		  
        .card__details {
			padding: 1rem;
        }
		  
        .card__pricipalContainer__name {
			font-size: 1.25rem;
        }
		  
        .card__pricipalContainer__occupation {
			font-weight: 600;
			color: var(--primary);
        }
    `;