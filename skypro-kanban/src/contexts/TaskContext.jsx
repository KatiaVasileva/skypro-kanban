import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default TaskProvider;
