import "./App.css";
import "./components/responsive-components.css";
import Header from "./components/header";
import Landing from "./components/landing";
import Information from "./components/info";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import BuyTicket from "./components/buyTicket";
import Footer from "./components/footer";
import JumptingDot from "./components/jumpting_dot";

function App() {
  
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      setLoading(false);
  }, []);

  return (
    <>
      {loading 
        ? <div style={{ width: "100svw", height: "100svh", backgroundColor: "black", display: "flex", justifyContent:"center", alignItems:"center" }}> <CircularProgress style={{ color:"var(--main-color)", width: "100px", height: "100px" }} /> </div> : 
            <>
                <Header />
                <Landing />
                <JumptingDot />
                <Information />
                <BuyTicket />
                <Footer />
            </>
      }
    </>
  );
}

export default App;
