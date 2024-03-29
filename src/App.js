import Header from "./components/Header/Header";
import s from "./app.module.css";
import Slider from "./components/Slider/Slider";
import Stylist from "./components/Stylist/Stylist";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import HeroNew from "./components/HeroNew/HeroNew";
import Form from "./components/Form/Form";
// import { useState } from "react";
// import comment from "./images/comment.png";
import MobApp from "./components/MobApp/MobApp";

function App() {
  // const [mail, setMail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(mail);
  //   setMail("");
  // };
  return (
    <>
      <div className={s.heroNew}>
        <Header />
        <HeroNew />
        <Form />
        {/* <div className={s.container}>
          <button className={s.button} type="button" onClick={handleSubmit}>
            BOOK NOW!
          </button>
          <div className={s.wrapper}>
            <img className={s.image} src={comment} alt="comment" />
          </div>
        </div> */}
      </div>
      <Slider />
      <Stylist />
      <Clients />
      <MobApp />
      <Footer />
    </>
  );
}

export default App;
