import { Link } from "react-router-dom"

import "./home.scss"
import "animate.css"

export default function Home() {
    return (
        <div className="home">
            <div className="main__title">
                <div className="animate__animated animate__lightSpeedInRight" >Welcome</div>
                <div className="animate__animated animate__bounceIn" style={{animationDelay: "0.3s"}}>to</div>
                <div className="wrapper">
                    <div className="my__word animate__animated animate__lightSpeedInLeft" style={{animationDelay: "0.5s"}}>my</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "0.6s"}}>P</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "0.7s"}}>o</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "0.8s"}}>r</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "0.9s"}}>t</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "1s"}}>f</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "1.1s"}}>o</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "1.2s"}}>l</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "1.3s"}}>i</div>
                    <div className="animate__animated animate__bounceIn" style={{animationDelay: "1.4s"}}>o</div>
                </div>
            </div>
            <div className="link__wrapper">
                <Link className="link animate__animated animate__fadeIn" style={{animationDelay: "1.5s"}} to="about">A propos</Link>
                <Link className="link animate__animated animate__fadeIn" style={{animationDelay: "1.7s"}} to="projects">Mes projets</Link>
                <Link className="link animate__animated animate__fadeIn" style={{animationDelay: "1.8s"}} to="contact">Contactez moi</Link>
            </div>

        </div>
    )
}
