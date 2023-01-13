import LeftPanel from "./LeftPanel";
import TweetList from "./TweetList";
import RightPanel from "./RightPanel";

export const Dashboard = ({tweetsArr}) => {

  return (
    <div className="dashboard">
      <LeftPanel />
      <TweetList tweetsArr={tweetsArr} />
      <RightPanel />
    </div>
  );
};
