import style from "./Button.module.css";

const Button = ({ label }) => {
  return (
    <div className={style.ButtonConteiner}>
      <Button>{label}</Button>
    </div>
  );
};

export default Button;
