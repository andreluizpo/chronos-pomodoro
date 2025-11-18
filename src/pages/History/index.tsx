import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { TrashIcon } from "lucide-react";

import styles from "./styles.module.css";

export function History() {
    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <Button
                            icon={<TrashIcon />}
                            color="red"
                            aria-label="Apagar todo o histórico"
                            title="Apagar histórico"
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 20 }).map((_, index) => {
                                return (
                                    <tr key={index}>
                                        <td>Estudar React</td>
                                        <td>25 minutos</td>
                                        <td>18/11/2025</td>
                                        <td>Completo</td>
                                        <td>Foco</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
