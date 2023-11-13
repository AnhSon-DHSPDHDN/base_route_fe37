import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actDecrement,
  actIncrement,
} from "./redux/features/counter/counterSlice";
import HeaderComponent from "./components/HeaderComponent";
import { actFetchAllTask } from "./redux/features/tasks/tasksSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const { allTask, isLoading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(actIncrement(5));
  };

  const handleDecrement = () => {
    dispatch(actDecrement(7));
  };

  useEffect(() => {
    dispatch(actFetchAllTask());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <button onClick={handleIncrement}>Increment</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <h1>List Task</h1>
      {isLoading && <div>LOADING...</div>}
      {allTask.map((task) => {
        return <div>{task.taskName}</div>;
      })}
    </div>
  );
}

export default App;
