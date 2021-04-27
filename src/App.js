import './styles/main.sass';
import Logo from './components/Logo/Logo';

const App = new Reef('#app', {
    template: () => {
        return `
            <div class="wrapper">
                <nav data-component="logo"></nav>
            </div>
        `
    }
});


App.attach([Logo]);
export default App;