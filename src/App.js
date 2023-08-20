import BannerComponents from "./components/BannerComponents";
import BodyComponents from "./components/BodyComponents";
import FooterComponent from "./components/FooterComponent";
import HeaderComponents from "./components/HeaderComponents";
import ItemComponents from "./components/ItemComponents";

function App() {
    return (
        <div className="App">
            <div class="container">
            <HeaderComponents />
            <BannerComponents />
            <div class="pt-4" style={{display:"flex", justifyContent:"space-between"}}>
                <ItemComponents />
                <ItemComponents />
                <ItemComponents />
                <ItemComponents />
            </div>
            <FooterComponent />
            </div>
        </div>
    );
}

export default App;
