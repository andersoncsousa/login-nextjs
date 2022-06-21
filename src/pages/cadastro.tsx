import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/login';

import styles from '../styles/default.module.css';

export default function Cadastro() {
  return (
    <div className="cadastro">
      <Head>
        <title>Cadastro - Funnelever</title>
        <meta name="description" content="Cadastro" />
        <link rel="icon" href="/src/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <div className="container">
        <div className={styles.formImage}></div>
        <div className="form">
          <form action="#">
            <div className="form-header">
              <div className="title">
                <h1>Cadastre-se</h1>
              </div>
              <div className="login-button">
                <Link href="/login">
                  <a>Entrar</a>
                </Link>
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label htmlFor="firstname">Primeiro Nome</label>
                <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required />
              </div>

              <div className="input-box">
                <label htmlFor="lastname">Sobrenome</label>
                <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
              </div>
              <div className="input-box">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
              </div>

              <div className="input-box">
                <label htmlFor="number">Celular</label>
                <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required />
              </div>

              <div className="input-box">
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
              </div>

              <div className="input-box">
                <label htmlFor="confirmPassword">Confirme sua Senha</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Digite sua senha novamente"
                  required
                />
              </div>
            </div>

            <div className="gender-inputs">
              <div className="gender-title">
                <h6>Gênero</h6>
              </div>

              <div className="gender-group">
                <div className="gender-input">
                  <input id="female" type="radio" name="gender" />
                  <label htmlFor="female">Feminino</label>
                </div>

                <div className="gender-input">
                  <input id="male" type="radio" name="gender" />
                  <label htmlFor="male">Masculino</label>
                </div>

                <div className="gender-input">
                  <input id="others" type="radio" name="gender" />
                  <label htmlFor="others">Outros</label>
                </div>

                <div className="gender-input">
                  <input id="none" type="radio" name="gender" />
                  <label htmlFor="none">Prefiro não dizer</label>
                </div>
              </div>
            </div>

            <div className="continue-button">
              <button>
                <a href="#">Continuar</a>{' '}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx global>
        {`
          .cadastro {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0c0ce94d;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          }

          .container {
            width: 80%;
            height: 80vh;
            display: flex;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
          }

          .form {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            padding: 3rem;
          }

          .form-header {
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
          }

          .login-button {
            display: flex;
            align-items: center;
          }

          .login-button a {
            border: none;
            background-color: #6c63ff;
            padding: 0.4rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-weight: 500;
            color: #fff;
          }

          .login-button a:hover {
            background-color: #6b63fff1;
          }

          .form-header h1::after {
            content: '';
            display: block;
            width: 5rem;
            height: 0.3rem;
            background-color: #6c63ff;
            margin: 0 auto;
            position: absolute;
            border-radius: 10px;
          }

          .input-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 1rem 0;
          }

          .input-box {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }

          .input-box input {
            margin: 0.6rem 0;
            padding: 0.8rem 1.2rem;
            border: none;
            border-radius: 10px;
            box-shadow: 1px 1px 6px #0000001c;
            font-size: 0.8rem;
          }

          .input-box input:hover {
            background-color: #eeeeee75;
          }

          .input-box input:focus-visible {
            outline: 1px solid #6c63ff;
          }

          .input-box label,
          .gender-title h6 {
            font-size: 0.75rem;
            font-weight: 600;
            color: #000000c0;
            margin: 0;
          }

          .input-box input::placeholder {
            color: #000000be;
          }

          .gender-group {
            display: flex;
            justify-content: space-between;
            margin-top: 0.6rem;
            padding: 0 0.5rem;
          }

          .gender-input {
            display: flex;
            align-items: center;
          }

          .gender-input input {
            margin-right: 0.35rem;
          }

          .gender-input label {
            font-size: 0.81rem;
            font-weight: 600;
            color: #000000c0;
          }

          .continue-button button {
            width: 100%;
            margin-top: 1rem;
            border: none;
            background-color: #6c63ff;
            padding: 0.62rem;
            border-radius: 5px;
            cursor: pointer;
          }

          .continue-button button:hover {
            background-color: #6b63fff1;
          }

          .continue-button button a {
            text-decoration: none;
            font-size: 0.93rem;
            font-weight: 500;
            color: #fff;
          }

          @media screen and (max-width: 1330px) {
            .container {
              width: 50%;
            }
            .form {
              width: 70%;
            }
          }

          @media screen and (max-width: 1064px) {
            .container {
              width: 90%;
              height: auto;
            }
            .input-group {
              flex-direction: column;
              z-index: 5;
              padding-right: 5rem;
              max-height: 10rem;
              overflow-y: scroll;
              flex-wrap: nowrap;
            }
            .gender-inputs {
              margin-top: 2rem;
            }
            .gender-group {
              flex-direction: column;
            }
            .gender-title h6 {
              margin: 0;
            }
            .gender-input {
              margin-top: 0.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
