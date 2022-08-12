import "./MoreBtn.css";

const MoreBtn = ({ text, addClass, padding }) => {
  const classList = Boolean(addClass) ? `btn ${addClass}` : "btn";
  console.log(padding);
  return (
    <div className="button">
      <button className={classList} style={{ padding }}>
        {text}
      </button>
    </div>
  );
};

export default MoreBtn;
