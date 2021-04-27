import './Logo.styles.sass';
import LogoIcon from '../../assets/logo.svg';

const Logo = new Reef('[data-component="logo"]', {
    template: () => {
        return `
            <div class="logo">
                <img class="logo__icon" src=${LogoIcon} alt="Logo" />
            </div>
            
        `;
    }
});

export default Logo;