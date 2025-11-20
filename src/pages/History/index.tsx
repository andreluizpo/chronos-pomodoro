import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useState } from "react";
import { sortTasks, SortTasksOptions } from "../../utils/sortTask";

import styles from "./styles.module.css";

export function History() {
    const { state } = useTaskContext();
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: "startDate",
            direction: "desc",
        };
    });

    function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
        const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        });
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <Button
                            icon={<TrashIcon />}
                            color="red"
                            aria-label="Apagar todo o histórico"
                            title="Apagar histórico"
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th
                                    onClick={() => handleSortTasks({ field: "name" })}
                                    className={styles.thSort}
                                >
                                    Tarefa ↕
                                </th>
                                <th
                                    onClick={() => handleSortTasks({ field: "duration" })}
                                    className={styles.thSort}
                                >
                                    Duração ↕
                                </th>
                                <th
                                    onClick={() => handleSortTasks({ field: "startDate" })}
                                    className={styles.thSort}
                                >
                                    Data ↕
                                </th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortTasksOptions.tasks.map(task => {
                                const taskTypeMap = {
                                    workTime: "Foco",
                                    shortBreakTime: "Descanso curto",
                                    longBreakTime: "Descanso longo",
                                };

                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} minuto</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeMap[task.type]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
