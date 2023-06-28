import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useEffect, useState } from "react";
import "./header.css";
import { US, CZ, CH } from "country-flag-icons/react/3x2";
import { Menu, MenuItem, Fade, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { ResizeObserver } from "@juggle/resize-observer";



export default function Header() {
  const [lang, setLang] = useState<string>("EN");
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const [hiddenDrawer, setHiddenDrawer] = useState<boolean>(false);
  const [isReducedHeader, setIsReducedHeader] = useState<boolean>(false);

  const [reducedHeaderAnchor, setReducedHeaderAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(langAnchor);
  const open_reduced = Boolean(reducedHeaderAnchor);

  const checkHeaderSize = () => {
        if (document.body.clientWidth > 550) setIsReducedHeader(true)
        else setIsReducedHeader(false);
  }

    const ro = new ResizeObserver(() => {
        checkHeaderSize();
    });
    ro.observe(document.body);

  useEffect(() => {
    const valNavigator: string = navigator.language;
    if (valNavigator === "CZ") setLang("CZ");
    else if (valNavigator === "CH") setLang("CH");
    else setLang("EN");

  }, []);

  const flag_array = [
    {
      lang: "CZ",
      flag: <CZ onClick={() => setLang("CZ")} width={30} />,
    },
    {
      lang: "EN",
      flag: <US onClick={() => setLang("EN")} width={30} />,
    },
    {
      lang: "CH",
      flag: <CH onClick={() => setLang("CH")} width={30} />,
    },
  ];

  const menuIcons = [
        <CardTravelIcon />,
        <FmdGoodIcon />,
        <InfoIcon />,
        <ContactSupportIcon />,
        <LocalLibraryIcon />
  ]

  const buttonHeaderContent = [
     "shop",
     <ShoppingCartIcon />,
     <PersonIcon />,
     <SearchIcon />
  ];

  return (
    <header className="trains-header">
      <a href=".">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="410px"
        height="50px"
        viewBox="0 0 410 50"
        enableBackground="new 0 0 410 50"
        xmlSpace="preserve"
        className="trains-header__logo"
        style={{ cursor: "pointer" }}
      >
        <g>
          <path
            fill="#FFFFFF"
            d="M162.102,21.054c0-7.512-4.831-9.471-11.506-9.471h-7.442v9.295v0.22v18.946h7.701v-7.592
		c0-1.394-0.074-2.794-0.108-4.188l0.07-0.074l4.266,11.854h8.344l-5.737-11.854C160.743,26.984,162.102,24.189,162.102,21.054z
		 M151.351,24.755l-0.496-0.035v-2.587v-0.369v-4.067c2.115-0.112,3.627,0.944,3.627,3.438
		C154.481,22.98,153.387,24.755,151.351,24.755z"
          />
          <path
            fill="#FFFFFF"
            d="M178.491,19.697c-2.452,0-4.379,2.037-5.093,4.193l-0.079-0.078c0.04-1.02,0.154-2,0.154-3.021
		l0.038-10.831h-7.399v30.086h7.399v-9.592c0-1.854,0.075-3.401,1.544-3.401c1.284,0,1.361,1.213,1.361,2.908v10.085h7.397V26.907
		C183.814,23.318,182.756,19.697,178.491,19.697z"
          />
          <path
            fill="#FFFFFF"
            d="M200.495,11.279c-1.661,0-3.057,1.396-3.057,3.021c0,1.734,1.396,3.133,3.132,3.133
		c1.738,0,3.096-1.361,3.096-3.06C203.666,12.599,202.192,11.279,200.495,11.279z"
          />
          <path
            fill="#FFFFFF"
            d="M198.16,36.682l0.076,0.077l-0.344,3.282h7.403V29.58v-0.591v-8.878h-7.517l0.301,3.057l-0.072,0.078
		c-0.945-1.961-2.414-3.55-4.793-3.55c-5.098,0-6.268,6.266-6.268,10.19c0,3.325,0.726,8.667,4.136,10.159
		c0.581,0.254,1.231,0.407,1.979,0.407c0.706,0,1.347-0.155,1.935-0.407C196.418,39.432,197.488,38.177,198.16,36.682z
		 M194.799,32.984c-0.188-0.793-0.229-1.698-0.229-2.27c0-0.641,0-1.886,0.188-2.939c0.23-1.099,0.646-2.002,1.55-2.002
		c0.869,0,1.249,0.756,1.433,1.617c0.173,0.823,0.161,1.707,0.152,2.262v0.164c0,0.562,0,1.691-0.225,2.716
		c-0.188,0.979-0.642,1.809-1.589,1.809C195.367,34.341,194.988,33.741,194.799,32.984z"
          />
          <path
            fill="#FFFFFF"
            d="M192.266,11.279c-1.661,0-3.055,1.396-3.055,3.021c0,1.734,1.394,3.133,3.132,3.133
		c1.738,0,3.097-1.361,3.097-3.06C195.439,12.599,193.963,11.279,192.266,11.279z"
          />
          <polygon
            fill="#FFFFFF"
            points="220.838,26.037 220.838,20.111 218.389,20.111 218.389,14.262 210.984,14.262 210.984,20.111 
		208.872,20.111 208.872,26.037 210.984,26.037 210.984,40.046 218.389,40.046 218.389,26.037 	"
          />
          <path
            fill="#FFFFFF"
            d="M223.516,13.843c0,2.421,1.961,4.346,4.338,4.346c2.416,0,4.306-2.001,4.306-4.381
		c0-2.407-1.985-4.25-4.354-4.262c-0.007,0-0.013-0.002-0.021-0.002c-0.008,0-0.016,0.002-0.021,0.002
		C225.428,9.558,223.516,11.512,223.516,13.843z"
          />
          <rect
            x="224.118"
            y="20.11"
            fill="#FFFFFF"
            width="7.396"
            height="19.934"
          />
          <path
            fill="#FFFFFF"
            d="M249.773,33.475c0-3.244-2.151-4.686-4.832-5.699c-0.787-0.307-2.225-0.827-2.225-1.854
		c0-0.639,0.562-0.979,1.096-0.979c1.242,0,2.225,0.979,3.096,1.776l2.525-5.396c-1.736-0.983-4.076-1.626-6.074-1.626
		c-4.646,0-8,2.605-8,6.721c0,3.398,2.301,4.904,5.209,5.926c1.281,0.448,1.924,0.867,1.924,1.586c0,0.717-0.795,1.019-1.436,1.019
		c-1.356,0-2.832-1.132-3.699-2.074l-2.715,5.51c1.377,0.759,2.686,1.312,4.071,1.666c0.976,0.246,1.979,0.408,3.099,0.408
		c0.955,0,1.889-0.146,2.77-0.408C247.499,39.18,249.773,36.927,249.773,33.475z"
          />
          <path
            fill="#FFFFFF"
            d="M262.496,33.55c-1.887,0-2.835-2.11-2.835-3.7c0-2.113,1.136-3.509,3.323-3.619v-6.457
		c-0.525-0.039-1.021-0.075-1.545-0.075c-5.741,0-9.399,4.835-9.399,10.301c0,4.477,2.295,8.779,6.427,10.049
		c0.783,0.238,1.605,0.407,2.518,0.407c0.684,0,1.32-0.108,2.002-0.149v-0.258V33.55H262.496z"
          />
          <path
            fill="#FFFFFF"
            d="M279.104,19.697c-2.449,0-4.377,2.037-5.094,4.193l-0.074-0.078c0.037-1.02,0.148-2,0.148-3.021
		l0.042-10.831h-7.399v30.086h7.399v-9.592c0-1.854,0.069-3.401,1.545-3.401c1.282,0,1.358,1.213,1.358,2.908v10.085h7.395V26.907
		C284.424,23.318,283.369,19.697,279.104,19.697z"
          />
          <path
            fill="#FFFFFF"
            d="M305.562,33.284h-7.247c-0.148,0.795-0.788,1.396-1.622,1.396c-1.547,0-1.738-1.889-1.738-3.056h1.304
		h0.218h9.354c0-3.132-0.229-6.078-2.15-8.681c-1.437-1.964-3.668-3.247-6.717-3.247c-6.12,0-9.401,5.059-9.401,10.759
		c0,4.824,2.112,8.454,6.301,9.591c0.889,0.239,1.832,0.408,2.91,0.408c1.016,0,1.971-0.149,2.863-0.408
		C302.675,39.164,304.921,36.843,305.562,33.284z M296.617,25.093c1.324,0,1.734,1.437,1.772,2.531h-1.103h-0.293h-2.042
		C294.92,26.604,295.371,25.093,296.617,25.093z"
          />
          <path
            fill="#FFFFFF"
            d="M334.167,25.473v-0.078c3.249,0,5.322-2.489,5.322-5.698c0-6.155-5.285-8.114-9.815-8.114h-9.06v7.898
		v0.146v9.805v0.514v10.1h10.344c6.869,0,8.986-4.604,8.986-8.117C339.944,28.109,337.941,25.773,334.167,25.473z M328.316,19.702
		v-0.296v-1.674h0.754c1.585,0,2.754,0.718,2.754,2.417c0,1.85-1.475,2.495-3.053,2.495h-0.455V19.702z M328.96,33.891h-0.644
		l-0.037-1.156l0.037,0.014v-4.33h0.604c1.774,0,3.251,0.787,3.251,2.715C332.171,33.059,330.655,33.891,328.96,33.891z"
          />
          <path
            fill="#FFFFFF"
            d="M353.718,36.682l0.073,0.077l-0.34,3.282h7.396V30.46v-0.219v-10.13h-7.509l0.301,3.057l-0.072,0.078
		c-0.941-1.961-2.413-3.55-4.797-3.55c-5.094,0-6.264,6.266-6.264,10.19c0,3.325,0.729,8.667,4.135,10.159
		c0.582,0.254,1.231,0.407,1.979,0.407c0.708,0,1.35-0.155,1.936-0.407C351.977,39.432,353.048,38.177,353.718,36.682z
		 M350.356,32.984c-0.188-0.793-0.229-1.698-0.229-2.27c0-0.641,0-1.886,0.188-2.939c0.229-1.099,0.646-2.002,1.55-2.002
		c0.87,0,1.248,0.756,1.437,1.617c0.171,0.823,0.154,1.707,0.15,2.262v0.164c0,0.562,0,1.691-0.229,2.716
		c-0.188,0.979-0.64,1.809-1.583,1.809C350.918,34.341,350.545,33.741,350.356,32.984z"
          />
          <path
            fill="#FFFFFF"
            d="M377.225,19.697c-2.448,0-4.377,2.037-5.095,4.193l-0.071-0.078c0.033-1.02,0.148-2,0.148-3.021
		l0.039-10.831h-7.399v30.086h7.399v-9.592c0-1.854,0.071-3.401,1.546-3.401c1.281,0,1.361,1.213,1.361,2.908v10.085h7.396V26.907
		C382.551,23.318,381.494,19.697,377.225,19.697z"
          />
          <path
            fill="#FFFFFF"
            d="M398.931,19.697c-2.454,0-4.381,2.038-5.091,4.193l-0.083-0.076l0.188-3.702h-7.396v19.934h7.396v-9.59
		c0-2.037,0.119-3.399,1.554-3.399c1.242,0,1.354,1.213,1.354,2.907v10.082h7.396V26.907
		C404.25,23.318,403.198,19.697,398.931,19.697z"
          />
          <path
            fill="#FFFFFF"
            d="M65.944,24.937V20.79h-5.076v10.053h5.053v-3.847c-0.104-1.275,3.083-1.925,3.264-0.29v4.129h5.112v-4.908
		C74.227,22.182,66.768,23.258,65.944,24.937z"
          />
          <rect
            x="94.336"
            y="20.788"
            fill="#FFFFFF"
            width="31.84"
            height="10.062"
          />
          <path
            fill="#FFFFFF"
            d="M37.322,13.905l-9.468,9.729c-1.175,1.183-1.175,3.106,0,4.298l3.135,2.916h9.869l-5.15-5.199l7.699-7.741
		h82.782v-6.455h-83.84C40.362,11.452,38.511,12.465,37.322,13.905z"
          />
          <path
            fill="#FFFFFF"
            d="M105.71,33.71H5v6.336v0.164h91.472c0.491-0.005,0.986-0.062,1.473-0.164
		c1.354-0.282,2.641-0.948,3.562-2.091L105.71,33.71z"
          />
          <path
            fill="#FFFFFF"
            d="M55.369,26.688c3.806,0.006,4.246-5.896-0.223-5.917H44.858v10.071h4.909v-3.969l2.864,3.969h6.433
		l-3.828-4.169L55.369,26.688z M52.206,25.536H49.79v-2.443h1.907h0.526C53.705,23.093,53.795,25.536,52.206,25.536z"
          />
          <path
            fill="#FFFFFF"
            d="M87.976,25.577c3.748-0.411,3.211-4.795-0.818-4.795h-2.956h-0.223h-6.621v10.077h6.031h4.36
		C92.228,30.85,92.288,25.788,87.976,25.577z M82.267,22.604h1.712l0.004-0.029l0.885,0.029c1.236,0,1.236,1.958,0.01,1.958h-2.612
		L82.267,22.604L82.267,22.604z M84.899,28.751h-1.065h-0.516h-1.043v-2.144h2.6C86.111,26.607,86.122,28.751,84.899,28.751z"
          />
        </g>
      </svg>
      </a>
      <div className="header__links">
        <button
          className="header__link_lang"
          onClick={(event) => {
            setLangAnchor(event.currentTarget);
          }}
        >
          {lang && flag_array.filter((item) => item.lang === lang)[0].flag}
        </button>
        {isReducedHeader ? (
        <>
            {buttonHeaderContent.map((buttonContent, index) => (
                <button key={index} className="header__link__item">
                    {buttonContent}
                </button>
            ))}
        </>) : (
            <>
                <button onClick={(event) => { setReducedHeaderAnchor(event.currentTarget) }} className="header__link__mobile">
                   <MoreVertIcon /> 
                </button>
                <Menu 
                    MenuListProps={{ disablePadding: true }}
                    className="trains-mobile-header__reduced"
                    open={open_reduced}
                    onClose={() => setReducedHeaderAnchor(null)}
                    anchorEl={reducedHeaderAnchor}
                >
                    {
                        buttonHeaderContent.map((buttonHeaderContent, index) => (
                            <MenuItem className="header__reduced__button__item" key={index} onClick={() => setReducedHeaderAnchor(null)}>{buttonHeaderContent}</MenuItem>
                        ))
                    }
                </Menu>
            </>
        )}
        <button onClick={() => setHiddenDrawer(true)} className="header__link_menu">
          Menu <MenuIcon />
        </button>
      </div>
        <Menu
            MenuListProps={{ disablePadding: true }}
            open={open}
            onClose={() => setLangAnchor(null)}
            anchorEl={langAnchor}
            className="header__lang"
          >
          {flag_array.map((flag, index) => {
            return <MenuItem  className="header__lang_item" key={index} onClick={() => setLangAnchor(null)}>{flag.flag}</MenuItem>;
          })}
        </Menu>
        <Drawer className="trains-drawer" open={hiddenDrawer} onClose={() => setHiddenDrawer(false)} anchor="right">
            <List className="trains-drawer__list">
                {["Experiences", "Travel destinations", "About", "Contact", "Blog"].map((text, index) => (
                    <ListItem className="trains-drawer__list-item" key={index}>
                        <ListItemIcon style={{ color: "white" }}>
                            {menuIcons[index]} 
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </header>
  );
}
