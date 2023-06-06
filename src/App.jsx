import { BsFillMoonFill } from 'react-icons/Bs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryInfo from './components/CountryInfo';
import Main from './components/Main';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Main />}
                />
                <Route
                    path=':countryName'
                    element={<CountryInfo />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

const Header = () => {
    return (
        <header>
            <h1>Where in the world?</h1>
            <div>
                <BsFillMoonFill />
                <h3>Dark Mode</h3>
            </div>
        </header>
    );
};
