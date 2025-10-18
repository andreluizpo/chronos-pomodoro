import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";

export type HomePros = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomePros) {
    return (
        <MainTemplate>
            <Container>
                <CountDown {...props} />
            </Container>

            <Container>
                <MainForm {...props} />
            </Container>
        </MainTemplate>
    );
}
