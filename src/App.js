import './styles/main.sass';
import Logo from './components/Logo/Logo';
import Hero from './components/Hero/Hero';

const App = new Reef('#app', {
    template: () => {
        return `
            <div class="wrapper">
                <nav data-component="logo"></nav>
                <main>
                    <my-hero data-component="hero"></my-hero>
                    <div class="innerWrapper">
                        <h2>other</h2>
                    </div>
                </main>
            </div>
        `
    }
});


App.attach([Logo, Hero]);
export default App;