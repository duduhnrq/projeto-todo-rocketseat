import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { TASKS_KEY, type Task } from "../models/task";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  useEffect(() => {
    const load = async () => {
      await delay(2000);
      setIsLoadingTasks(false);
    };
    load();
  }, []);

  return {
    tasks: tasksData,
    tasksCount: tasksData.filter((task) => task.state === "created").length,
    concludedTaskCount: tasksData.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
