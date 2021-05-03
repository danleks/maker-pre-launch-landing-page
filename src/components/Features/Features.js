import './Features.styles.sass';

import financialFreedomIcon from '../../assets/illustration-financial-freedom.svg';
import lifestyleIcon from '../../assets/illustration-lifestyle.svg';
import passionsIcon from '../../assets/illustration-passions.svg';
import workAnywhereIcon from '../../assets/illustration-work-anywhere.svg';

const Features = new Reef('[data-component="features"]', {
    data: {
        features: [
            {
                icon: passionsIcon,
                title: 'Indulge your passions',
                desc: 'Your passions shouldnt be just for the weekend. Earn a living doing what you love.'
            },
            {
                icon: financialFreedomIcon,
                title: 'Gain financial freedom',
                desc: 'Start making money work for you. There’s nothing quite like earning while you sleep.'
            },
            {
                icon: lifestyleIcon,
                title: 'Choose your lifestyle',
                desc: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.'
            },
            {
                icon: workAnywhereIcon,
                title: 'Work from anywhere',
                desc: 'Selling online means not being pinned down. Want to work AND travel? Go for it!'
            },
        ]
    },
    template: ({ features }) => {
        return`
            <ul class="features">
                ${features.map((feature, i) => {
                    return `
                        <li class="features__item">
                            <figure class="features__imgContainer">
                                <img class="features__img features__img--${i}" src="${feature.icon}" alt="${feature.title} icon" />
                            </figure>
                            <div class="features__content">
                                <h3 class="features__title">${feature.title}</h3>
                                <p class="features__desc text">${feature.desc}</p>
                            </div>                            
                        </li>
                    `;
                }).join('')}
            </ul>
        `;
    }
});

export default Features;