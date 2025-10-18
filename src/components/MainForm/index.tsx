import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import type { HomePros } from "../../pages/Home";

export function MainForm({ state, setState }: HomePros) {
    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                config: {
                    ...prevState.config,
                    workTime: 34,
                },
                formattedSecondsRemaining: "23:34",
            };
        });
    }

    return (
        <form action="" className="form">
            <div>
                <button type="button" onClick={handleClick}>
                    Clicar
                </button>
            </div>
            <div className="formRow">
                <Input
                    labelText="task"
                    id="meuInput"
                    type="text"
                    placeholder="Digite algo"
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de {state.config.workTime}min</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <Button icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}
