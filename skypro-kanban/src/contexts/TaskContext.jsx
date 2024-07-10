import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../lib/helpers";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }), [tasks];

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;
