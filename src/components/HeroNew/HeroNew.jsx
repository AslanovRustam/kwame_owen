import s from "./heroNew.module.css";

const HeroNew = () => {
  return (
    <div className={s.container} id="main">
      {/* <p className={s.text}>image/Video</p> */}
      <h1 className={s.title}>
        Barbers Delivered <br></br> To Your <span>Home</span>
      </h1>
    </div>
  );
};

export default HeroNew;
