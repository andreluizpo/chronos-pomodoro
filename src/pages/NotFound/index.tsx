import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";

export function NotFound() {
    return (
        <MainTemplate>
            <Container>
                <h1>Página não encotrada</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis a dicta, aspernatur, repudiandae iure non recusandae
                    officia molestiae odit at magnam rem, necessitatibus tempora
                    nisi rerum minus sequi maiores nihil.
                </p>
            </Container>
        </MainTemplate>
    );
}
