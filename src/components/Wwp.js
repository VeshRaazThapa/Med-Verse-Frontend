import LoadBtn from "./shared-components/LoadBtn";
import SectionTitle from "./shared-components/SectionTitle";
import "./Wwp.css";
import WwpItem from "./WwpItem";

const Wwp = () => {
  return (
    <div
      className="wwp-block
  "
    >
      <div className="side-image">
        <img src={require("./images/use-cases-block.png")} alt="aside" />
      </div>
      <div className="side-text">
        <SectionTitle text="What We Provide" />
        <div className="wwp-items">
          <WwpItem />
          <WwpItem />
          <WwpItem />
          <WwpItem />
        </div>
        <LoadBtn />
      </div>
    </div>
  );
};

export default Wwp;
