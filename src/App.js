import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <h1>App</h1>;
}

export default App;
