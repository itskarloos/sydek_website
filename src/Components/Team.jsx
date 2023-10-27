import "./Team.css";
import Teams from "./Teams";
import Founders from "./Founders"

const Team = () => {
  return (
    <div className="bg-primary w-100% overflow-hidden">
      <Founders />
      <Teams />
    </div>
  );
};

export default Team;
