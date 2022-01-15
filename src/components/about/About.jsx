import { Link } from "react-router-dom"
import {Star} from "@mui/icons-material"

import "./about.scss"
import "animate.css"

export default function About() {
    return (
        <div className="about">
            <div className="top  animate__animated animate__fadeIn">
                <h1>Arnaud Delperier</h1>
                <h2>Développeur web full stack</h2>
            </div>
            <div className="middle">
                <div className="left">
                    <img className="animate__animated animate__fadeIn animate__zoomIn" style={{animationDelay: "0.2s"}} src={require("../../assets/photo.png")} alt="Arnaud Delperier" />
                </div>
                <div className="right">
                        <p className="animate__animated animate__slideInRight" style={{animationDelay: "0.2s"}}><Star className="star" /> Grand maître en <em>JavaScript</em> ceinture noir foncé 12ème dan</p>
                        <p className="animate__animated animate__slideInRight" style={{animationDelay: "0.4s"}}><Star className="star" /> Expert en <em>NodeJs</em>, je donne des cours sur la Lune tous les 36 de chaque mois</p>
                        <p className="animate__animated animate__slideInRight" style={{animationDelay: "0.6s"}}><Star className="star" /> Je maîtrise bien évidemment tous les frameworks du monde (mais quand même un peu plus <em>React</em>)</p>
                </div>
            </div>
            <div className="bottom">
                <Link className="link animate__animated animate__fadeIn" to={"projects"} style={{animationDelay: "0.4s"}}>
                    Voir mes projets
                </Link>
            </div>
        </div>
    )
}