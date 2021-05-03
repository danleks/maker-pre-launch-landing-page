import './Button.styles.sass';

const Button = (props, elem) => {
  return `
    <button class="button" type="${elem.getAttribute('data-button-type')}">${elem.textContent}</button>
  `;  
};

export default Button;