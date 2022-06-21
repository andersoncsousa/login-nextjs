import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'Layouts';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import styles from '../styles/plataforma.module.css';
import img from '../images/teste.jpeg';

export default function Cofre() {
  function Example() {
    console.log('alooo');
  }
  return (
    <Layout title="Cofre">
      <Head>
        <title>Cofre - Funnelever</title>
        <meta name="description" content="Cofre" />
        <link rel="icon" href="/src/images/favicon.png" />
      </Head>
      <div className={styles.cofreHome}>
        <div
          style={{
            maxWidth: '450px',
            margin: '0',
          }}
        >
          <header style={{ marginTop: '15px', marginBottom: '15px', fontSize: '18px', fontWeight: 'bolder' }}>
            Valor
          </header>
          <Radio
            name="radio"
            onChange={Example}
            options={[
              {
                value: 'Tudo - Valor',
                label: 'Tudo',
              },
              {
                value: 'Livre - Valor',
                label: 'Livre',
              },
              {
                value: 'Prêmio - Valor',
                label: 'Prêmio',
              },
            ]}
          />
          <header style={{ marginTop: '15px', marginBottom: '15px', fontSize: '18px', fontWeight: 'bolder' }}>
            Tipo de oferta
          </header>
          <Radio
            name="radio"
            onChange={Example}
            options={[
              {
                value: 'Tudo - Tipo de oferta',
                label: 'Tudo',
              },
              {
                value: 'Produtos digitais - Tipo de oferta',
                label: 'Produtos digitais',
              },
              {
                value: 'Filiação - Tipo de oferta',
                label: 'Filiação',
              },
              {
                value: 'Serviços - Tipo de oferta',
                label: 'Serviços',
              },
              {
                value: 'Coaching/Consultoria - Tipo de oferta',
                label: 'Coaching/Consultoria',
              },
              {
                value: 'Software como serviço - Tipo de oferta',
                label: 'Software como serviço',
              },
              {
                value: 'Produtos Físicos - Tipo de oferta',
                label: 'Produtos Físicos',
              },
              {
                value: 'Grátis + Frete - Tipo de oferta',
                label: 'Grátis + Frete',
              },
              {
                value: 'Outro - Tipo de oferta',
                label: 'Outro',
              },
              {
                value: 'Geração de Leads - Tipo de oferta',
                label: 'Geração de Leads',
              },
              {
                value: 'Inscrição - Tipo de oferta',
                label: 'Inscrição',
              },
              {
                value: 'Local na rede Internet - Tipo de oferta',
                label: 'Local na rede Internet',
              },
              {
                value: 'Webinar automático - Tipo de oferta',
                label: 'Webinar automático',
              },
              {
                value: 'Evento - Tipo de oferta',
                label: 'Evento',
              },
            ]}
          />
          <header style={{ marginTop: '15px', marginBottom: '15px', fontSize: '18px', fontWeight: 'bolder' }}>
            Indústria
          </header>
          <Radio
            name="radio"
            onChange={Example}
            options={[
              {
                value: 'Tudo - Indústria',
                label: 'Tudo',
              },
              {
                value: 'Marketing - Indústria',
                label: 'Marketing',
              },
              {
                value: 'Nutrição/Fitness - Indústria',
                label: 'Nutrição/Fitness',
              },
              {
                value: 'Auto-ajuda - Indústria',
                label: 'Auto-ajuda',
              },
              {
                value: 'comércio eletrônico - Indústria',
                label: 'comércio eletrônico',
              },
              {
                value: 'Negócio local - Indústria',
                label: 'Negócio local',
              },
              {
                value: 'Imobiliária - Indústria',
                label: 'Imobiliária',
              },
              {
                value: 'Viagem - Indústria',
                label: 'Viagem',
              },
              {
                value: 'O negócio - Indústria',
                label: 'O negócio',
              },
              {
                value: 'Vendas - Indústria',
                label: 'Vendas',
              },
              {
                value: 'Evento - Indústria',
                label: 'Evento',
              },
              {
                value: 'Liderança - Indústria',
                label: 'Liderança',
              },
              {
                value: 'Outro - Indústria',
                label: 'Outro',
              },
              {
                value: 'Consultando - Indústria',
                label: 'Consultando',
              },
              {
                value: 'Franquia - Indústria',
                label: 'Franquia',
              },
              {
                value: 'Marketing afiliado - Indústria',
                label: 'Marketing afiliado',
              },
            ]}
          />
        </div>
        <div className={styles.cofreCardsContent}>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 1</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 2</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 3</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 4</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 5</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 6</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 7</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 8</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 9</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 10</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 11</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 12</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 13</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 14</CardHeader>
            </Card>
          </div>
          <div className={styles.boxCards}>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 15</CardHeader>
            </Card>
            <Card className={styles.cardsCofre}>
              <Image src={img} alt="Image" width={200} height={200} />
              <CardHeader>Card 16</CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
