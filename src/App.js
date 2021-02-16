import React from "react";
import "./App.css";
import Header from "./components/Header/index.js";
import EmployeesContainer from "./components/Container/EmployeesContainer.js";

function App() {
    return (
        <>
            <Header />
            <EmployeesContainer />
        </>
    );
};

export default App;
