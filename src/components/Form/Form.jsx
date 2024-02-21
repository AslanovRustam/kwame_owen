import s from "./form.module.css";

const Form = ({ mail, setMail, handleSubmit }) => {
  return (
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
  );
};

export default Form;
