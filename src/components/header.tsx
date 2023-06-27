import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import "./flag.css";
import Spain from "../assets/spainSVG.svg";

export default function Header() {
    const [lang, setLang] = useState<string>('de')

    const [hiddenLang, setHiddenLang] = useState<boolean>(true);

    useEffect(() => {
        setLang(navigator.language);
    }, []);

    const flag_array = [
        {
            lang: "CZ",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2048" height="2048" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path style="fill:#d7141a" d="M255.999 1024h1536v461.501h-1536z"/><path style="fill:#11457e" d="M255.999 1485.5v-923l779.861 461.48z"/><path style="fill:#eee" d="M1035.83 1024H1792V562.5H255.999l779.861 461.48z"/><path style="fill:none" d="M0 0h2048v2048H0z"/></svg>`
        },
        {
            lang: "EN",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2048" height="2048" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><defs><style>.fil2{fill:#00247d}.fil1{fill:#cf142b}</style></defs><g id="Layer_x0020_1"><path style="fill:#eee" d="M255.999 562.5h1536v923h-1536z"/><path class="fil1" d="M1284.47 896.216 1792 603.524V562.5h-34.99l-578.69 333.716zM1260.51 1170.31l531.49 306.4v-61.22l-425.31-245.18zM255.999 632.764l454.652 263.452h106.23L255.999 571.484zM792.798 1170.31l-536.799 309.87v5.32h96.978l546.107-315.19z"/><path class="fil2" d="M1686.89 562.5H1149.1v310.28zM911.633 562.5H375.992l535.641 310.28zM1792 896.216V684.473l-364.84 211.743zM1792 1379.81v-209.5h-364.84zM406.392 1485.5h505.241v-291.68zM1149.1 1485.5h506.84l-506.84-291.68zM255.999 1170.31v218.93l377.524-218.93zM255.999 896.216h377.524L255.999 676.965z"/><path class="fil1" d="M959.143 562.5v388.548H255.999v164.562h703.144v369.89h142.447v-369.89H1792V951.048h-690.41V562.5z"/></g><path style="fill:none" d="M0 0h2048v2048H0z"/></svg>`
        },
        {
            lang: "SV",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2048" height="2048" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path style="fill:#de1018" d="M255.999 562.5h1536v923h-1536z"/><path style="fill:#fafafa" d="M1368.75 1122.12V909.875h-230.62V679.249H909.875v230.626H679.249v228.255h230.626v230.62h228.255v-230.62h230.62z"/><path style="fill:none" d="M0 0h2048v2048H0z"/></svg>`
        },
    ]


    return (
        <header>
            <h1>Erlebnis & Reise</h1>
            <div className="header__links">
                <button className="header__link_lang" onClick={() => {
                    setHiddenLang(!hiddenLang);
                }}>{lang && lang}</button>
                <button className="header__link_shop">Shop</button>
                <button className="header__link_cart"><ShoppingCartIcon /></button>
                <button className="header__link_user"><PersonIcon /></button>
                <button className="header__link_search"><SearchIcon /></button>
                <button className="header__link_menu">Menu <MenuIcon/></button>
            </div>
            {hiddenLang ? null : 
                <div className="header__lang">
                    {flag_array.map((flag, index) => {
                        return (
                          <>
                            <div key={index} className="header__lang_flag" dangerouslySetInnerHTML={{__html: flag.flag}}></div>
                          </>
                        )
                    }
                    )}
                </div>
            }
        </header>
    )
}
