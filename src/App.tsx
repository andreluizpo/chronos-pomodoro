import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaksContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/theme.css";
import "./styles/global.css";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-pomodoro" element={<AboutPomodoro />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </MessagesContainer>
        </TaskContextProvider>
    );
}
