import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaksContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    // Ciclos
    const nextCycle = getNextCycle(state.currentCycles);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert("Digite o nome da tarefa");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycles: nextCycle,
                secondsRemaining, // Conferir
                formattedSecondsRemaining:
                    formatSecondsToMinutes(secondsRemaining), // Conferir
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: "00:00",
            };
        });
    }

    return (
        <form onSubmit={handleCreateNewTask} action="" className="form">
            <div className="formRow">
                <Input
                    labelText="task"
                    id="meuInput"
                    type="text"
                    placeholder="Digite algo"
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
            </div>

            {state.currentCycles > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                    <Button
                        aria-label="Iniciar uma nova tarefa"
                        title="Iniciar uma nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        key="botao_submit"
                    />
                )}

                {!!state.activeTask && (
                    <Button
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        color="red"
                        onClick={handleInterruptTask}
                        icon={<StopCircleIcon />}
                        key="botao_button"
                    />
                )}
            </div>
        </form>
    );
}
