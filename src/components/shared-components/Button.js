import "./Button.css";

const Button = ({ text, addClass, marginLeft }) => {
  const classList = Boolean(addClass) ? `btn ${addClass}` : "btn";

  return (
    <button className={classList} style={{ marginLeft }}>
      {text}
    </button>
  );
};

export default Button;
