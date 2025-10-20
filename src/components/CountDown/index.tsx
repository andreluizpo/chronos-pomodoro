import { useContext } from "react";
import styles from "./styles.module.css";
import { TaskContext } from "../../contexts/TaksContext";

export function CountDown() {
    const taskContext = useContext(TaskContext);
    console.log(taskContext);

    return <div className={styles.container}>00:00</div>;
}
