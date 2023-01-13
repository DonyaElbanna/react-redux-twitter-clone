import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import { Dashboard } from "./components/Dashboard";
import HashLoader from "react-spinners/HashLoader";
import TweetPage from "./components/TweetPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const state = useSelector((state) => state);
  const tweets = Object.values(state.tweets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const override: CSSProperties = {
    position: "absolute",
    top: "40%",
    left: "50%",
  };

  return (
    <Router>
      <div>
        {!state.authedUser ? (
          <HashLoader
            color="#1DA1F2"
            cssOverride={override}
            size={70}
            speedMultiplier={2.5}
          />
        ) : (
          <Routes>
            <Route path="/" exact element={<Dashboard tweetsArr={tweets} />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
