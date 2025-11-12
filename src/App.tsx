import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaksContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />
            </MessagesContainer>
        </TaskContextProvider>
    );
}
