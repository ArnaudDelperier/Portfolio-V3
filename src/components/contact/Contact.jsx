import { useState } from "react"

import "./contact.scss"

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById("not-mail");
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = "none";
            return true;
        } else {
            mail.style.display = "block";
            mail.style.animation = "dongle 1s";
            setTimeout(() => {
                mail.style.animation = "none";
            }, 1000)
            return false;
        }
    }

    const failMessage = (message) => {
        let formMessage = document.querySelector(".form-message");

        formMessage.textContent = message;
        formMessage.style.opacity = "1";
        formMessage.style.background = "rgb(253,87,87)";

        document.getElementById('name').classList.add("error");
        document.getElementById('email').classList.add("error");
        document.getElementById('message').classList.add("error");
    }

    const successMessage = () => {
        let formMessage = document.querySelector(".form-message");

        formMessage.textContent = "Message envoyé !";
        formMessage.style.background = "#00c1ec";
        formMessage.style.opacity = "1";

        document.getElementById('name').classList.remove("error");
        document.getElementById('email').classList.remove("error");
        document.getElementById('message').classList.remove("error");

        setTimeout(() => {
            formMessage.style.opacity = "0";
        }, 5000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && isEmail() && message) {
            sendFeedback("template_tdgahcu", {
                name,
                phone,
                email,
                message
            });
        } else {
            failMessage("Merci de remplir correctement les champs demandés");
        };
    }

    const sendFeedback = (templateId, variables) => {

        window.emailjs
          .send("gmail", templateId, variables)
          .then((res) => {
            successMessage();
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
          })
          .catch(
            (err) => {
                failMessage("Une erreur s'est produite, veuillez réessayer ultérieurement.")
            })
      };

    return (
        <div className="contact" id="contact">            
            <h2 className="title">Contact</h2>
            <form className="contact-form">
                <div className="form-content">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nom *"
                    value={name}
                    autoComplete="off"
                    />
                    <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="téléphone"
                    value={phone}
                    />
                    <div className="email-content">
                    <label id="not-mail">Email non valide</label>
                    <input
                        type="mail"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email *"
                        value={email}
                        autoComplete="off"
                    />
                    </div>
                    <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message *"
                    value={message}
                    />
                </div>
                <input
                    className="button"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="form-message"></div>
            </form>
            <a href="#home" className="arrow-down"> </a>
        </div>
    )
}
