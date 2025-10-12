import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";
import { Button } from "./components/Button";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {
    // Que todos os componentes que usam "numero" saibam das mudanças em ser valor.

    // Sempre que usar useState, não vou usar atribuição diretamente
    // const [numero, setNumero] = useState(() => {
    //     console.log("lazy initialization");
    //     return 0;
    // });
    const [numero, setNumero] = useState(0);

    function handleClick() {
        // setNumero(prevState => prevState + 1);
        setNumero(1);
    }

    return (
        <>
            <Heading>Número: {numero}</Heading>
            <button onClick={handleClick}>Aumenta</button>

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
                            labelText={numero.toString()}
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
                        <Button icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
