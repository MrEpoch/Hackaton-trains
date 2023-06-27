import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "flag.css";
import { useEffect, useState } from 'react';

export default function Header() {
    const [lang, setLang] = useState<string>('de')

    const [hiddenLang, setHiddenLang] = useState<boolean>(true);

    useEffect(() => {
        setLang(navigator.language);
    }, []);

    const flag_array: string[] = [
        "CZ",
        "DE",
        "EN",
        "SP",
        "FR",
    ]


    return (
        <header>
            <h1>Erlebnis & Reise</h1>
            <div className="header__links">
                <button className="header__link_lang">Lang</button>
                <button className="header__link_shop">Shop</button>
                <button className="header__link_cart"><ShoppingCartIcon /></button>
                <button className="header__link_user"><PersonIcon /></button>
                <button className="header__link_search"><SearchIcon /></button>
                <button className="header__link_menu">Menu <MenuIcon/></button>
            </div>
            {hiddenLang && 
                <div className="header__lang">
                    {flag_array.map((flag, index) => {
                        return (
                            <span className={`flag-icon flag-icon-${flag.toLowerCase()}`} key={index}></span>
                        )
                    }
                    )}
                </div>
            }
        </header>
    )
}
