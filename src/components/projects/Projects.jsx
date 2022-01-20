import { useState } from "react"

import "./projects.scss"

export default function Projects() {

    const [isFlipped, setIsFlipped] =  useState(false)

    return (
        <div className="projects">
            <div className="card">
                <div className={isFlipped ? "card__inner is-flipped" : "card__inner"}
                     onClick={() => setIsFlipped(!isFlipped)}>
                    <div className="card__face card__face-front">
                        <h2>Ceci est le recto</h2>
                    </div>
                    <div className="card__face card__face-back">
                        <div className="card__content">
                            <div className="card__header">
                                <div className="card__header-title">
                                ceci est le titre
                                </div>
                            </div>
                            <div className="card__body">
                                description du projet
                            </div>
                            <div className="card__footer">
                                <a href="http://localhost:3000/" target="blank"> lien vers le site</a>
                            </div>
                        </div>
                        Ceci est le verso
                    </div>
                </div>
            </div>
        </div>
    )
}