import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading>
                Olá Mundo!1
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iure totam, aliquam ipsum pariatur, possimus laudantium dolores voluptates explicabo in nam voluptas labore eos fugit cupiditate tempora recusandae facere aut.</p>
        </>
    );
}