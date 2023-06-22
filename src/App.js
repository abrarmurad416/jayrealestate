import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <div>
            <Header />
            <Landing />
            {/* <Reviews /> */}
            <Contact />
            <Footer />
        </div>
    );
}
