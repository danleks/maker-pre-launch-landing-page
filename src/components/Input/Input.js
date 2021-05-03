import './Input.styles.sass';

const Input = (props, elem) => {
    return `
        <label for="${elem.getAttribute('data-input-id')}">
            <input class="input" id="${elem.getAttribute('data-input-id')}" type="${elem.getAttribute('data-input-type')}" placeholder="Email address" required />
            <span class="error">Oops! That doesn’t look like an email address</span>
        </label>
        
    `;
};

export default Input;