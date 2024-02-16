import Header from "./components/Header/Header";
import s from "./app.module.css";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Stylist from "./components/Stylist/Stylist";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={s.hero}>
        <div className={s.left}>
          <Header />
          <Hero />
        </div>
        <div className={s.right}>
          <VideoContainer />
        </div>
      </div>
      <Slider />
      <Stylist />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
