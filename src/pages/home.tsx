import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'Layouts';
import img from '../images/teste.jpeg';
import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import styles from '../styles/default.module.css';

export default function Home() {
  return (
    <Layout title="Home">
      <Head>
        <title>Home - Funnelever</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/src/images/favicon.png" />
      </Head>
      <div className={styles.contentCardHome}>
        <Card className={styles.cardHomePrincipal} status="Primary">
          <CardHeader
            style={{
              fontSize: '1.7rem',
              fontWeight: 'normal',
              padding: '20px',
              background: 'linear-gradient(90deg, #33B5FE 0%, #0788E5 100%)',
            }}
          >
            Bem-vindo
          </CardHeader>
          <CardBody className={styles.CardBodyPrincipal}>
            Um plataforma simples e visual para ajudar você a planejar, lançar e otimizar seus funis de marketing.
            Confira os vídeos abaixo para que possamos começar com os recursos certos para ajudá-lo a atingir suas metas
            atuais.
          </CardBody>
          <CardFooter
            style={{ border: 'none', background: 'linear-gradient(90deg, #33B5FE 0%, #0788E5 100%)' }}
          ></CardFooter>
        </Card>
        <div className={styles.contentCards}>
          <Card className={styles.cardsHome}>
            <Image src={img} alt="Image" width={200} height={200} />
            <CardHeader>Card 1</CardHeader>
            <CardBody>
              Um plataforma simples e visual para ajudar você a planejar, lançar e otimizar seus funis de marketing.
              Confira os vídeos abaixo para que possamos começar com os recursos certos para ajudá-lo a atingir suas
              metas atuais.
            </CardBody>
            <CardFooter>
              <Button fullWidth>Clique aqui</Button>
            </CardFooter>
          </Card>
          <Card className={styles.cardsHome}>
            <Image src={img} alt="Image" width={200} height={200} />
            <CardHeader>Card 2</CardHeader>
            <CardBody>
              Um plataforma simples e visual para ajudar você a planejar, lançar e otimizar seus funis de marketing.
              Confira os vídeos abaixo para que possamos começar com os recursos certos para ajudá-lo a atingir suas
              metas atuais.
            </CardBody>
            <CardFooter>
              <Button fullWidth>Clique aqui</Button>
            </CardFooter>
          </Card>
        </div>
        <div className={styles.contentCards}>
          <Card className={styles.cardsHome}>
            <Image src={img} alt="Image" width={200} height={200} />
            <CardHeader>Card 3</CardHeader>
            <CardBody>
              Um plataforma simples e visual para ajudar você a planejar, lançar e otimizar seus funis de marketing.
              Confira os vídeos abaixo para que possamos começar com os recursos certos para ajudá-lo a atingir suas
              metas atuais.
            </CardBody>
            <CardFooter>
              <Button fullWidth>Clique aqui</Button>
            </CardFooter>
          </Card>
          <Card className={styles.cardsHome}>
            <Image src={img} alt="Image" width={200} height={200} />
            <CardHeader>Card 4</CardHeader>
            <CardBody>
              Um plataforma simples e visual para ajudar você a planejar, lançar e otimizar seus funis de marketing.
              Confira os vídeos abaixo para que possamos começar com os recursos certos para ajudá-lo a atingir suas
              metas atuais.
            </CardBody>
            <CardFooter>
              <Button fullWidth>Clique aqui</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
