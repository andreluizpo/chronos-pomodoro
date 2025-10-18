import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

import "./styles/theme.css";
import "./styles/global.css";

// export type TaskStateModel = {
//     tasks: TaskModel[];
//     secondsRemaining: number;
//     formattedSecondsRemaining: string;
//     activeTask: TaskModel | null;
//     currentCycles: number; // 1 a 8
//     config: {
//         workTime: number;
//         shortBreakTime: number;
//         longBreakTime: number;
//     };
// };

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycles: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

export function App() {
    const [state, setState] = useState(initialState);

    return <Home state={state} setState={setState} />;
}
