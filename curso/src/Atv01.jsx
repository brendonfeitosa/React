import { Link } from "react-router-dom";
import Relogio from "./Components/Relogio/Relogio.jsx";
import Letreiro from "./Components/Letreiro/Letreiro.jsx";

export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            { }
            <Letreiro phrase={"Venha estudar na Fatec!"} />
            <Link to="/">Retornar para página Inicial</Link>
        </>
    );
}