import './styles/main.sass';
import Logo from './components/Logo/Logo';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Subscription from './components/Subcription/Subcription';

const App = new Reef('#app', {
    template: () => {
        return `
            <div class="wrapper">
                <div class="innerWrapper">
                    <nav data-component="logo"></nav>
                </div>
                <main>
                    <section data-component="hero"></section>
                    <div class="innerWrapper">
                        <section data-component="features"></section>
                        <section data-component="pricing"></section>
                        <section data-component="subscription"></section>
                    </div>
                </main>
            </div>
        `
    }
});


App.attach([Logo, Hero, Features, Pricing, Subscription]);
export default App;