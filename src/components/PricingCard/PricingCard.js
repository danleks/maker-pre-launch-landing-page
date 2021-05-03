import './PricingCard.styles.sass';

const PricingCard = (props, elem) => {
    const { icon, title, desc, price, benefits } = props.card;
    return `
        <div class="card card--${price === "free" ? 'blue' : 'teal'}">
            <img class="card__icon" src=${icon} alt="card icon"/>
            <div class="card__container">            
                <h3 class="card__title">${title}</h3>
                <p class="card__desc text">${desc}</p>
                <span class="card__price">${typeof price === 'number' ? `$${price.toFixed(2)}<span class="card__highlight"> / month</span>` : price}</span>
            </div>
            <ul class="card__benefits">
                ${benefits.map(benefit => {
                    return `
                        <li class="card__benefit">${benefit}</li>
                    `;
                }).join('')}
            </ul>
        </div>
    `;
};

export default PricingCard;