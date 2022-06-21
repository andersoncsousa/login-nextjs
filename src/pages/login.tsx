import React from 'react';
import Head from 'next/head';
import '../styles/login';

export default function Login() {
  return (
    <div id="container">
      <Head>
        <title>Login - Funnelever</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/src/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem vindo de volta!</h2>
            <p className="description description-primary">Para se manter conectado conosco</p>
            <p className="description description-primary">por favor faça o login com suas informações pessoais</p>
            <button id="signin" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Crie sua conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">ou use seu email para se cadastrar:</p>
            <form className="form">
              <label className="label-input">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Nome" />
              </label>

              <label className="label-input">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Senha" />
              </label>

              <button className="btn btn-second">Entrar</button>
            </form>
          </div>
        </div>

        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Olá amigo!</h2>
            <p className="description description-primary"> Insira seus dados pessoais</p>
            <p className="description description-primary">e comece sua jornada conosco</p>
            <button id="signup" className="btn btn-primary">
              Cadastre-se
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Entre na sua conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">ou use sua conta de e-mail:</p>
            <form className="form">
              <label className="label-input">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Senha" />
              </label>

              <a className="password" href="#">
                Esqueceu sua senha ?
              </a>
              <button className="btn btn-second">Entrar</button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #ecf0f1;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          }
          .content {
            background-color: #fff;
            border-radius: 15px;
            width: 960px;
            height: 50%;
            justify-content: space-between;
            align-items: center;
            position: relative;
          }
          .content::before {
            content: '';
            position: absolute;
            background-color: #58af9b;
            width: 40%;
            height: 100%;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            left: 0;
          }
          .title {
            font-size: 28px;
            font-weight: bold;
            text-transform: capitalize;
            padding-bottom: 50px;
            margin: 0;
          }
          .title-primary {
            color: #fff;
          }
          .title-second {
            color: #58af9b;
          }
          .description {
            font-size: 14px;
            font-weight: 300;
            line-height: 30px;
          }
          .description-primary {
            color: #fff;
          }
          .description-second {
            margin: 0;
            color: #7f8c8d;
          }
          .btn {
            border-radius: 15px;
            text-transform: uppercase;
            color: #fff;
            font-size: 10px;
            padding: 10px 50px;
            cursor: pointer;
            font-weight: bold;
            width: 190px;
            align-self: center;
            border: none;
            margin-top: 1rem;
          }
          .btn-primary {
            background-color: transparent;
            border: 1px solid #fff;
            transition: background-color 0.5s;
          }
          .btn-primary:hover {
            background-color: #fff;
            color: #58af9b;
          }
          .btn-second {
            background-color: #58af9b;
            border: 1px solid #58af9b;
            transition: background-color 0.5s;
          }
          .btn-second:hover {
            background-color: #fff;
            border: 1px solid #58af9b;
            color: #58af9b;
          }
          .first-content {
            display: flex;
          }
          .first-content .second-column {
            z-index: 11;
          }
          .first-column {
            text-align: center;
            width: 40%;
            z-index: 10;
          }
          .second-column {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .social-media {
            margin: 0px;
          }
          .link-social-media:not(:first-child) {
            margin-left: 10px;
          }
          .link-social-media .item-social-media {
            transition: background-color 0.5s;
          }
          .link-social-media:hover .item-social-media {
            background-color: #58af9b;
            color: #fff;
            border-color: #58af9b;
          }
          .list-social-media {
            display: flex;
            list-style-type: none;
            padding: 0;
          }
          .item-social-media {
            border: 1px solid #bdc3c7;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            color: #95a5a6;
          }
          .form {
            display: flex;
            flex-direction: column;
            width: 55%;
          }
          .form input {
            height: 45px;
            width: 100%;
            border: none;
            background-color: #ecf0f1;
          }
          .label-input {
            background-color: #ecf0f1;
            display: flex;
            align-items: center;
            margin: 8px;
          }
          .icon-modify {
            color: #7f8c8d;
            padding: 0 5px;
          }

          /* second content*/

          .second-content {
            position: absolute;
            display: flex;
          }
          .second-content .first-column {
            order: 2;
            z-index: -1;
          }
          .second-content .second-column {
            order: 1;
            z-index: -1;
          }
          .password {
            color: #34495e;
            font-size: 14px;
            margin: 15px 0;
            text-align: center;
          }
          .password::first-letter {
            text-transform: capitalize;
          }

          .sign-in-js .first-content .first-column {
            z-index: -1;
          }

          .sign-in-js .second-content .second-column {
            z-index: 11;
          }
          .sign-in-js .second-content .first-column {
            z-index: 13;
          }

          .sign-in-js .content::before {
            left: 60%;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            animation: slidein 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/

            z-index: 12;
          }

          .sign-up-js .content::before {
            animation: slideout 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/

            z-index: 12;
          }

          .sign-up-js .second-content .first-column,
          .sign-up-js .second-content .second-column {
            z-index: -1;
          }

          .sign-up-js .first-content .second-column {
            z-index: 11;
          }

          .sign-up-js .first-content .first-column {
            z-index: 13;
          }

          /* DESLOCAMENTO CONTEÚDO ATRÁS DO CONTENT:BEFORE*/
          .sign-in-js .first-content .second-column {
            z-index: -1;
            position: relative;
            animation: deslocamentoEsq 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/
          }

          .sign-up-js .second-content .second-column {
            position: relative;
            z-index: -1;
            animation: deslocamentoDir 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/
          }

          /*ANIMAÇÃOO CSS PARA O CONTEÚDO*/

          @keyframes deslocamentoEsq {
            from {
              left: 0;
              opacity: 1;
              z-index: 12;
            }

            25% {
              left: -80px;
              opacity: 0.5;
              /* z-index: 12; NÃO HÁ NECESSIDADE */
            }

            50% {
              left: -100px;
              opacity: 0.2;
              /* z-index: 12; NÃO HÁ NECESSIDADE */
            }

            to {
              left: -110px;
              opacity: 0;
              z-index: -1;
            }
          }

          @keyframes deslocamentoDir {
            from {
              left: 0;
              z-index: 12;
            }

            25% {
              left: 80px;
              /* z-index: 12;  NÃO HÁ NECESSIDADE*/
            }

            50% {
              left: 100px;
              /* z-index: 12; NÃO HÁ NECESSIDADE*/
              /* background-color: yellow;  Exemplo que dei no vídeo*/
            }

            to {
              left: 110px;
              z-index: -1;
            }
          }

          /*ANIMAÇÃO CSS*/

          @keyframes slidein {
            from {
              left: 0;
              width: 40%;
            }

            25% {
              left: 5%;
              width: 50%;
            }

            50% {
              left: 25%;
              width: 60%;
            }

            75% {
              left: 45%;
              width: 50%;
            }

            to {
              left: 60%;
              width: 40%;
            }
          }

          @keyframes slideout {
            from {
              left: 60%;
              width: 40%;
            }

            25% {
              left: 45%;
              width: 50%;
            }

            50% {
              left: 25%;
              width: 60%;
            }

            75% {
              left: 5%;
              width: 50%;
            }

            to {
              left: 0;
              width: 40%;
            }
          }

          /*VERSÃO MOBILE*/
          @media screen and (max-width: 1040px) {
            .content {
              width: 100%;
              height: 100%;
            }

            .content::before {
              width: 100%;
              height: 40%;
              top: 0;
              border-radius: 0;
            }
            .first-content,
            .second-content {
              flex-direction: column;
              justify-content: space-around;
            }

            .first-column,
            .second-column {
              width: 100%;
            }

            .sign-in-js .content::before {
              top: 60%;
              left: 0;
              border-radius: 0;
            }

            .form {
              width: 90%;
            }

            /* ANIMAÇÃO MOBILE CSS*/

            @keyframes deslocamentoEsq {
              from {
                top: 0;
                opacity: 1;
                z-index: 12;
              }

              25% {
                top: -80px;
                opacity: 0.5;
                /* z-index: 12; NÃO HÁ NECESSIDADE */
              }

              50% {
                top: -100px;
                opacity: 0.2;
                /* z-index: 12; NÃO HÁ NECESSIDADE */
              }

              to {
                top: -110px;
                opacity: 0;
                z-index: -1;
              }
            }

            @keyframes deslocamentoDir {
              from {
                top: 0;
                z-index: 12;
              }

              25% {
                top: 80px;
                /* z-index: 12;  NÃO HÁ NECESSIDADE*/
              }

              50% {
                top: 100px;
                /* z-index: 12; NÃO HÁ NECESSIDADE*/
                /* background-color: yellow;  Exemplo que dei no vídeo*/
              }

              to {
                top: 110px;
                z-index: -1;
              }
            }

            @keyframes slidein {
              from {
                top: 0;
                height: 40%;
              }

              25% {
                top: 5%;
                height: 50%;
              }

              50% {
                top: 25%;
                height: 60%;
              }

              75% {
                top: 45%;
                height: 50%;
              }

              to {
                top: 60%;
                height: 40%;
              }
            }

            @keyframes slideout {
              from {
                top: 60%;
                height: 40%;
              }

              25% {
                top: 45%;
                height: 50%;
              }

              50% {
                top: 25%;
                height: 60%;
              }

              75% {
                top: 5%;
                height: 50%;
              }

              to {
                top: 0;
                height: 40%;
              }
            }
          }

          @media screen and (max-width: 740px) {
            .form {
              width: 50%;
            }
          }

          @media screen and (max-width: 425px) {
            .form {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
