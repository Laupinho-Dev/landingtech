/*import React from "react";
import "./info-sidebar.css";

const InfoSidebar = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-left">
          <h2>🚀 Torne-se um Especialista em Tecnologia da Informação!</h2>
          <p>
            A tecnologia está em constante evolução, e as oportunidades na área
            de T.I. nunca foram tão promissoras!
          </p>
          <p>
            Se você deseja se destacar no mercado, aprender as habilidades mais
            valorizadas pelas empresas e conquistar uma carreira de sucesso,
            você está no lugar certo.
          </p>
        </div>
      </div>

      <div className="info-right">
        <h2>📌 O que você encontrará aqui?</h2>
        <ul>
          <li>
            ✅ <span className="highlight">Conteúdos atualizados</span> sobre
            programação, segurança da informação, redes, desenvolvimento web e
            muito mais!
          </li>
          <li>
            ✅ <span className="highlight">Materiais gratuitos</span> para
            impulsionar seus estudos e sua carreira.
          </li>
          <li>
            ✅ <span className="highlight">Cursos e mentorias</span> com
            profissionais experientes do mercado.{" "}
          </li>
          <li>
            ✅ <span className="highlight">Comunidade de aprendizado</span> para
            tirar dúvidas e trocar experiências.
          </li>
          <li>
            💡 <span className="highlight">Não fique para trás!</span>O setor de
            T.I. está em crescimento acelerado, e quem domina as ferramentas
            certas tem as melhores oportunidades.
          </li>
        </ul>
        <div className="cta">
          📩 Cadastre seu e-mail para receber novidades, conteúdos exclusivos e
          oportunidades incríveis!
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
*/

import React from "react";
import "./info-sidebar.css";

const InfoSidebar = () => {
  return (
    <>
      <div className="info-title">
        <h2>Torne-se um Especialista em Tecnologia da Informação! 🚀</h2>
        <div className="info-one">
          A tecnologia está em constante evolução, e as oportunidades na área de
          T.I. nunca foram tão promissoras!Se você deseja se destacar no
          mercado, aprender as habilidades mais valorizadas pelas empresas e
          conquistar uma carreira de sucesso, você está no lugar certo.
        </div>
      </div>
      <div className="info-title-two">
        <h2>📌 O que você encontrará aqui?</h2>

        <div className="item-container">
          <div className="item-one">
            ✅ Conteúdos atualizados sobre programação, segurança da informação,
            redes, desenvolvimento web e muito mais!
          </div>
          <div className="item-two">
            ✅ Materiais gratuitos para impulsionar seus estudos e sua carreira.
          </div>
          <div className="item-three">
            ✅ Cursos e mentorias com profissionais experientes do mercado.
          </div>
          <div className="item-four">
            ✅ Comunidade de aprendizado para tirar dúvidas e trocar
            experiências.
          </div>
        </div>
      </div>
      <div className="call-to-action">
        <h2>
          💡 Não fique para trás! O setor de T.I. está em crescimento acelerado,
          e quem domina as ferramentas certas tem as melhores oportunidades.
        </h2>
        <div className="email-signup">
          📩 Cadastre seu e-mail para receber novidades, conteúdos exclusivos e
          oportunidades incríveis!
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
