import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import TweetList from "./components/TweetList";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const override: CSSProperties = {
    position: "absolute",
    top: "40%",
    left: "50%",
  };

  const state = useSelector((state) => state);
  const tweets = Object.values(state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      {!state.authedUser ? (
        <HashLoader color="#1DA1F2" cssOverride={override} size={70} speedMultiplier={2.5}/>
      ) : (
        <TweetList tweetsArr={tweets} />
      )}
    </div>
  );
}

export default App;
