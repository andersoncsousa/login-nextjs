import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';

const ErrorStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  h1 {
    margin-bottom: 1.5rem;
  }
  button {
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
    padding: 15px;
    margin: 18px;
    text-transform: uppercase;
    background-color: #00d7d7;
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #02abab;
  }
`;
export default function Error(): JSX.Element {
  const router = useRouter();
  return (
    <ErrorStyle>
      <Head>
        <title>404 - Funnelever</title>
        <meta name="description" content="404 Página não encontrada" />
        <link rel="icon" href="/src/images/favicon.png" />
      </Head>
      <h1>404 Página não encontrada</h1>
      <button onClick={() => router.push('/inicio')}>Volte para a Home</button>
    </ErrorStyle>
  );
}
