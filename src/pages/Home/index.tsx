import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";

type HomePros = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomePros) {
    const { state, setState } = props;

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                currentCycles: 5,
            };
        });
    }

    return (
        <MainTemplate>
            <Container>
                <button onClick={handleClick}>clicar</button>
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}
