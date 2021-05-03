import './Pricing.styles.sass';
import PricingCard from '../PricingCard/PricingCard';
import iconFree from '../../assets/icon-free.svg';
import iconPaid from '../../assets/icon-paid.svg';

const pricingCardFree = new Reef('[data-component="pricing-card-free"]', {
    data: {
        card: {
            icon: iconFree, 
            title: 'Dip your toe',
            desc: 'Just getting started? No problem at all! Our free plan will take you a long way.',
            price: 'free',
            benefits: ['Unlimited products', 'Basic analytics', 'Limited marketplace exposure', '10% fee per transaction']

        }
    },
    template: PricingCard
});
const pricingCardPremium = new Reef('[data-component="pricing-card-premium"]', {
    data: {
        card: {
            icon: iconPaid, 
            title: 'Dive right in',
            desc: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
            price: 25,
            benefits: ['Custom domain', 'Advanced analytics and reports', 'High marketplace visibility', '5% fee per transaction']

        }
    },
    template: PricingCard
});

const Pricing = new Reef('[data-component="pricing"]', {
    template: () => {
        return `
            <div class="pricing">
                <div class="pricing__heading">
                    <h2 class="pricing__title sectionTitle">Our pricing plans</h2>
                    <p class="pricing__desc text">We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
                </div>
                <div class="pricing__content">
                    <my-pricing-card data-component="pricing-card-free"></my-pricing-card>
                    <my-pricing-card data-component="pricing-card-premium"></my-pricing-card>
                </div>
            </div>
        `;
    }
});

Pricing.attach([pricingCardFree, pricingCardPremium]);

export default Pricing;