import { useLocalStorage } from "@uidotdev/usehooks";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludedTaskCount: tasks.filter((task) => task.concluded).length
    }
}