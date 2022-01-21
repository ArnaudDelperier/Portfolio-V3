import { useState } from "react"
import { Link } from "react-router-dom"

import projects from "../../data.js"

import "./projects.scss"
import "animate.css"

export default function Projects() {

    const [cards, setCards] = useState(projects.map((elem) => {
        return {...elem, active: false}
    }))

    let cardDelay = 0;

    function handleClick(e) {
        if (!(e.target.tagName === "A")) {
            const id = e.currentTarget.id

            setCards((prevState) => {
                const newState = prevState.map((card) => {
                    if (id === card.name) {
                        return {...card, active: !card.active}
                    }
                    return card
                })
    
                return newState
            })
        } 
    }


    return (
        <div className="projects">

            <div className="cards__container">
                {cards.map((card) => {
                    cardDelay += 0.2
                    return(
                    <div className="card animate__animated animate__bounceIn" style={{animationDelay: `${cardDelay}s`}} key={card.name}>
                        <div id={card.name} className={card.active ? "card__inner is-flipped" : "card__inner"}
                            onClick={handleClick}>
                            <div className="card__face card__face-front">
                                <h2 className="animate__animated animate__pulse animate__slower animate__infinite">{card.name}</h2>
                            </div>
                            <div className="card__face card__face-back">
                                <div className="card__content">
                                    <div className="card__header">
                                        <img src={card.image} alt="" className="card__header-img"/>
                                        <div className="card__header-title">
                                        {card.name}
                                        </div>
                                    </div>
                                    <div className="card__body">
                                        {card.description}
                                    </div>
                                    <div className="card__footer">
                                        {card.link!=="none"
                                            ?<a href={card.link} target="blank"> lien vers le site</a>
                                            :null}                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
            <div className="bottom">
                <Link className="link animate__animated animate__fadeIn" to={"../contact"} style={{animationDelay: "0.4s"}}>
                    Me contacter
                </Link>
            </div>
        </div>
    )
}