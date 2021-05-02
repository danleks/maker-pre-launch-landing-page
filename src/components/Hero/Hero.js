import './Hero.styles.sass';

const Hero = new Reef('[data-component="hero"]', {
    template: () => {
        return `
            <div class="hero">
                <div class="hero__bg"></div>
                <div class="hero__content innerWrapper">
                    <h1 class="hero__title">Get paid for the work you <span class="highlight">love</span> to do.</h1>
                    <h2 class="hero__subtitle text">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</h2>
                    <div class="hero__scroll"></div>
                </div>
            </div>
        `;
    }
});

export default Hero;