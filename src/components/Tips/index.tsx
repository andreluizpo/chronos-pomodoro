import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type TipsProps = {
    nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime";
};

export function Tips({ nextCycleType }: TipsProps) {
    const { state } = useTaskContext();

    // Tips
    const tipsForWhenActiveTask = {
        workTime: (
            <span>
                Foque por <b>{state.config.workTime} minutos</b>.
            </span>
        ),
        shortBreakTime: (
            <span>
                Descanse por <b>{state.config.shortBreakTime} minutos</b>.
            </span>
        ),
        longBreakTime: (
            <span>
                Descanso longo de <b>{state.config.longBreakTime} minutos</b>.
            </span>
        ),
    };

    const tipsForNoActiveTask = {
        workTime: (
            <span>
                Próximo ciclo é de <b>{state.config.workTime} minutos</b>.
            </span>
        ),
        shortBreakTime: (
            <span>
                Próximo descanso é de <b>{state.config.shortBreakTime} minutos</b>.
            </span>
        ),
        longBreakTime: (
            <span>
                Próximo descanso longo é de <b>{state.config.longBreakTime} minutos</b>.
            </span>
        ),
    };
    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    );
}
