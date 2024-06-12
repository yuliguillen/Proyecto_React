import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formu from "./pages/Formulario";
import Maestro from "./pages/Maestro";

export default function App(){
    return(
        <BrowserRouter>

            <Routes>
                <Route exact path="/Formulario" element={<Formu/>}/>
                <Route exact path="/PaginaPrincipal" element={<Maestro/>}/>
            </Routes>
        </BrowserRouter>
    )
}