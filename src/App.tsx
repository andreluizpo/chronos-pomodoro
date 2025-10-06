import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    console.log("oi");

    return (
        <>
            <Heading attr={123} attr2='String'>Olá Mundo!1</Heading>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iure totam, aliquam ipsum pariatur, possimus laudantium dolores voluptates explicabo in nam voluptas labore eos fugit cupiditate tempora recusandae facere aut.</p>
        </>
    );
}