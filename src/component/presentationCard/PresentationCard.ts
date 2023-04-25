
export class PresentationCard extends HTMLElement {

    constructor() {
        super();
		this.attachShadow({ mode: "open" })
	}
	  
	get name(){
		return this.getAttribute('name')
	}

	get photo() {
		return this.getAttribute('photo')
	}

	get occupation() {
		return this.getAttribute('occupation')
	}

	get age() {
		return this.getAttribute('age')
	}

	get stack() {
		return this.getAttribute('stack')
	}

	get hobbies() {
		return this.getAttribute('hobbies')
	}

	get skills() {
		return this.getAttribute('skills')
	}
	
	getStyle() {
		const style = document.createElement('style');
		style.textContent = `.card { 
			width: calc(300px * 1.586);
			height: 300px;
			
			border-radius: 0.75rem;
			box-shadow:  1px 0px 1px 1px rgba(0,0,0,0.56), 0 0 0 0px rgba(0, 0, 0, 0.3);
			
			background: linear-gradient(90deg, rgba(153,246,228,1) 0%, rgba(15,118,110,1) 100%);
			z-index: initial;
			
			display: grid;
			grid-template-columns: 40% auto;
			color: black;
			
			align-items: center;
			transform: rotateX(60deg) rotateZ(-45deg);
			will-change: transform;
			transition: transform 0.65s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.45s cubic-bezier(0.4, 0.0, 0.2, 1);
		  }
		  
		  .card:hover {
			z-index:1000;
			transform: scale(1.1);
			box-shadow: 0 32px 80px 14px rgba(0,0,0,0.36), 0 0 0 1px rgba(0, 0, 0, 0.3);
		  }
		  
		  .pricipalContainer {
			display: grid;
			place-items: center;
		  }

		  
		  .pricipalContainer__img {
            width: 100px;
            height: 100px;
          }
		 	  
		  .card-about {
			display: grid;
			grid-auto-flow: column;
		  }
		   
		  .item {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;
		  }
		  
		  .item__value {
			font-size: 1rem;
		  }
		  
		  .item__label {
			font-size: 0.75rem;
			font-weight: 600;
			color: var(--primary);
		  }
		  
		  .skills {
			display: flex;
			flex-direction: column;
		  }
		  
		  .label {
			font-size: 1rem;
			font-weight: 600;
			color: var(--primary);
		  }
		  
		  .value {
			font-size: 0.75rem;
			line-height: 1.25rem;
		  }
		  
		  .card-details {
			padding: 1rem;
		  }
		  
		  .name {
			font-size: 1.25rem;
		  }
		  
		  .occupation {
			font-weight: 600;
			color: var(--primary);
		  }`
		  return style;
	}
	getTemplate() {
		const wrapper = document.createElement('div');
		wrapper.setAttribute('class', 'card');
		wrapper.innerHTML = `
			<div class="pricipalContainer">
				<img class="pricipalContainer__img" src="${this.photo ?? 'none'}" alt="profile" />
				<div class="occupation">${this.occupation ?? 'none'}</div>
				<div class="name">${this.name ?? 'none'}</div>
			</div>
			<div class="card-details"> 
				<div class="card-about">
					<div class="item">
						<div class="item__label">Edad</div>
						<div class="item__value">${this.age ?? 'none'}</div>
					</div>
					<div class="item">
						<div class="item__label">Stack</div>
						<div class="item__value">${this.stack ?? 'none'}</div>
					</div>
				</div>
				<div class="card-about">
					<div class="item">
						<div class="item__label">Hobbies</div>
						<div class="item__value">${this.hobbies ?? 'none'}</div>
					</div>
				</div>
				<div class="card-about">
					<div class="item">
						<div class="item__value">${this.skills ?? 'none'}</div>
					</div>
				</div>
			</div>
		`

		
		return wrapper;
	}

	render() {
		this.shadowRoot?.appendChild(this.getStyle());
		this.shadowRoot?.appendChild(this.getTemplate());
	}
	

    
	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		this.render()
	}


}
customElements.define('presentation-card', PresentationCard);

