import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useTaskContext } from "../../contexts/TaksContext";

export function MainForm() {
    const { setState } = useTaskContext();

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                formattedSecondsRemaining: "21:00",
            };
        });
    }

    return (
        <form action="" className="form">
            <button type="button" onClick={handleClick}>
                Clicar
            </button>
            <div className="formRow">
                <Input
                    labelText="task"
                    id="meuInput"
                    type="text"
                    placeholder="Digite algo"
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
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
