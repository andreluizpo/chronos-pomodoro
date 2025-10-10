import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/theme.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <Input
                            labelText="task"
                            id="meuInput"
                            type="text"
                            placeholder="Digite algo"
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}
