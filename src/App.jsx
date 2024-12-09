import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
// import Count from "./components/exe/Count";
import "./index.css"

export default function App(){
    return(
        <>
            <HeaderSection />
            <MainSection />
            <FooterSection />
            {/* <Count /> */}
        </>
    )
}