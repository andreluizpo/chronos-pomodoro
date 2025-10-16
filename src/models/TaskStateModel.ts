import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycles: number; // 1 a 8
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};
