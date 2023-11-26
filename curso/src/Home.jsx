import React from "react";
import { Link } from "react-router-dom";

//() => é a sintax de aron function
const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 01</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 02</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
