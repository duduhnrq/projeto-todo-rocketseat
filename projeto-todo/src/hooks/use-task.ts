import { useLocalStorage } from "@uidotdev/usehooks"
import { TASKS_KEY, type Task } from "../models/task"

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    function prepareTask() {
        setTasks([...tasks, { 
            id: Math.random().toString(36).substring(2, 9), 
            title: "", 
            state: "creating"
        }])
    }

    return {
        prepareTask
    }
}