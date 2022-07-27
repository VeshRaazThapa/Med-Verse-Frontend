import "./Community.css";
import SectionTitle from "../shared-components/SectionTitle";
import CommunityItems from "./CommunityItems";

const Community = () => {
  return (
    <div className="community-block">
      <SectionTitle text="Our Community" />
      <CommunityItems />
    </div>
  );
};

export default Community;
