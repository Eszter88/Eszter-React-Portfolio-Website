import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        refForm.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Let's connect! But not through this contact form. Why? Because is
            not secure to keep any key in my React client, even if I am using
            gitignore and an .env file. Then why did I leave this here? So you
            can see that I could have set up a contact form. But do not let this
            stop you!
            <br />
            <br /> You can reach me through my email:
            <strong> eszter@webesti.com</strong>
            <br />
            <br />I would love to hear from you!
          </p>
          {/* <p>&nbsp;</p> */}
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.5925, 2.6453]} zoom={5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[39.5925, 2.6453]}>
              <Popup>Eszter works here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Contact;
