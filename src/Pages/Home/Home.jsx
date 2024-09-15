import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Banner from "./Banner";
import Slides from "./Slides/Slides";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Slides/>
            <Footer/>
        </div>
    );
};

export default Home;