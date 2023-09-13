import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Content = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <main className={theme}>
            <div>
                <h1>Store Pelmec</h1>
                <p>Dark Mode Workshop</p>
            </div>
            <img src={theme==="dark"?dark:light} alt="Logo" />
        </main>
    );
}
export default Content;