import React, { useRef } from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactH1,
  StyledContactForm,
  Column1,
  Column2,
  ItemStyles,
  PStyle,
  ContactH2,
} from "./ContactElement";
import { Home, Mail, PhoneCall, Clock } from "tabler-icons-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_qi3yqu9",
        "template_ryubrlr",
        form.current,
        "vZV6mts00ch6WHt_C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactH1>Slobodno nas kontaktirajte</ContactH1>
          <ContactRow>
            <Column1>
              <ContactH2>
                ATEST SHOP
                <br /> Obrt za tehničko savjetovanje <br /> Vl. Saša Pokos
              </ContactH2>
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
                  <PStyle>
                    <a href="mailto:atestshopcroatia@gmail.com">
                      atestshopcroatia@gmail.com
                    </a>
                  </PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <PhoneCall size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>
                    <a href="tel:+385 97 676 2048">+385 97 676 2048</a>
                  </PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <Clock size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>
                    <PStyle>
                      Radno vrijeme: <br /> Pon - Pet: 08-16 <br /> Rad sa
                      strankama: 09-15
                    </PStyle>
                  </PStyle>
                </div>
              </ItemStyles>
            </Column1>
            <Column2>
              <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Vaše ime</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Poruka</label>
                  <textarea name="message" />
                  <button type="submit">Pošalji</button>
                </form>
              </StyledContactForm>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
