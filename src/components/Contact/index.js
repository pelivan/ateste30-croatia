import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactH1,
  FormStyle,
  Column1,
  Column2,
  ItemStyles,
  PStyle,
} from "./ContactElement";
import { useState } from "react";
import { Home, Mail, PhoneCall } from "tabler-icons-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactH1>Slobodno nas kontaktirajte</ContactH1>
          <ContactRow>
            <Column1>
              <ItemStyles>
                <div className="icon">
                  <Home size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>Indije 72 - Banjole, 52100 Pula</PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <Mail size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>atest.e30shop@gmail.com</PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <PhoneCall size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>+385 xx xxx xxx</PStyle>
                </div>
              </ItemStyles>
            </Column1>
            <Column2>
              <FormStyle>
                <div className="form-group">
                  <label htmlFor="name">
                    Vaše ime
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    E-mail
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Poruka
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
                <button type="submit">Pošalji</button>
              </FormStyle>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
