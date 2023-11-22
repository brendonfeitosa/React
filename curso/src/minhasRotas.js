import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./index";
import Atv01 from "./Componentes/Relogio";
import Atv02 from "./Atv02";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="relogio" element={<Atv01 />}/>
                <Route path="atv02" element={<Atv02 />}/>
            </Routes>
        </BrowserRouter>
    );
}