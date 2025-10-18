import type { HomePros } from "../../pages/Home";
import styles from "./styles.module.css";

export function CountDown({ state }: HomePros) {
    return (
        <div className={styles.container}>
            {state.formattedSecondsRemaining}
        </div>
    );
}
