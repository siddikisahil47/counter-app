import React from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter"
import './Home.css'

function Home(props) {
    return (
        <div className="container">

            <Counter />

        </div>
    );
}

export default Home;