import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";

export function Settings() {
    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: "center" }}>
                    Modifique as configurações para tempo de foco, descanso curto, descanso longo
                </p>
            </Container>

            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <Input id="workTime" labelText="Foco" />
                    </div>
                    <div className="formRow">
                        <Input id="shortBreakTime" labelText="Descanso curto" />
                    </div>
                    <div className="formRow">
                        <Input id="longBreakTime" labelText="Descanso longo" />
                    </div>
                    <div className="formRow">
                        <Button
                            icon={<SaveIcon />}
                            aria-label="Salvar configurações"
                            title="Salvar configurações"
                        />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}
