import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export function useTaskContext() {
    const tasks = useContext(TaskContext);

    return tasks;
}