import './Subcription.styles.sass';
import Input from '../Input/Input';
import Button from '../Button/Button';

const subscriptionInput = new Reef('[data-component="input"]', {template: Input})
const subscriptionButton = new Reef('[data-component="button"]', {template: Button})


const Subscription = new Reef('[data-component="subscription"]', {
    template: () => {
        return`
            <div class="subscription">
                <h3 class="sectionTitle">Get notified when we launch</h3>
                <form class="subscription__form">
                    <my-input class="subscription__input" data-input-id="subscription" data-input-type="email" data-component="input"></my-input>
                    <my-button class="subscription__button" data-button-type="submit" data-component="button">Get notified</my-button>
                </form>
            </div>
        `;
    }
});

Subscription.attach([subscriptionInput, subscriptionButton]);

export default Subscription;