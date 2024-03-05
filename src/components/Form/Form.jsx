import s from "./form.module.css";
import { useState } from "react";
import comment from "../../images/mode_comment.png";

const Form = () => {
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
    setMail("");
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <p className={s.text}>Enter your adress and book a haircut!</p>
          <input
            className={s.input}
            placeholder="Your adress"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
      </form>
      <div className={s.container}>
        <button className={s.button} type="button" onClick={handleSubmit}>
          BOOK NOW!
        </button>
        <div className={s.wrapper}>
          <img className={s.image} src={comment} alt="comment" />
        </div>
      </div>
    </>
  );
};

export default Form;
