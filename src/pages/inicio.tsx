import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/default.module.css';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions } from '@paljs/ui/Actions';
import styled from 'styled-components';
import { breakpointDown } from '@paljs/ui/breakpoints';
import img from '../images/logo.png';
import img2 from '../images/feature-01.png';



const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 0.9rem;
    white-space: nowrap;
    text-decoration: none;
    font-weight: 500;
  }
  .left {
    display: flex;
    align-items: center;
    .github {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

export default function inicio() {
    return (
        <body className={styles.inicio}>
            <Head>
                <title>Início</title>
                <meta name="description" content="Início" />
                <link rel="icon" href="/favicon.png" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossOrigin="anonymous"></script>
            </Head>
            <LayoutHeader>
                <HeaderStyle>
                    <Actions className={styles.logoInicio}
                        size="Medium"
                        actions={[
                            {
                                content: (
                                    <Link href="/home">
                                        <a title='Funnelever - Funil on time'>
                                            <Image src={img} alt="Image" width={200} height={50} />
                                        </a>
                                    </Link>
                                ),
                            },
                            {
                                content: (
                                    <div className={styles.boxBtnLogin} style={{ width: '100%' }}>
                                        <button className={styles.BtnLogin}>LOGIN</button>
                                        <button className={styles.BtnDemo}>SOLICITE A DEMO</button>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </HeaderStyle>
            </LayoutHeader>
            
            <div className={styles.inicioContent}>
                <div className={styles.inicioBox}>
                    <h2>COMEÇE JÁ!</h2>
                </div>
                <div className={styles.inicioBox}>
                    <input type="text" placeholder='Escolha o seu funil...' />
                    <button>Iniciar</button>
                </div>
                <div className={styles.inicioBoxRedes}>
                    <Link href="#">
                        <a target="_blank">
                            Instagram
                        </a>
                    </Link>
                    <Link href="#">
                        <a target="_blank">
                            Facebook
                        </a>
                    </Link>
                    <Link href="#">
                        <a target="_blank">
                            Telegram
                        </a>
                    </Link>
                    <Link href="#">
                        <a target="_blank">
                            Whatsapp
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.inicioSessao2}>
                <h2>
                    UM POUCO DOS NOSSOS CLIENTES.
                </h2>
                <div className={styles.inicioSessaoBoxParceiros}>
                    <Image src={img} alt="Image" width={200} height={50} />
                    <Image src={img} alt="Image" width={200} height={50} />
                    <Image src={img} alt="Image" width={200} height={50} />
                    <Image src={img} alt="Image" width={200} height={50} />
                </div>
            </div>

            <div className={styles.inicioSessao3}>
                <h2 style={{fontSize: '1.8rem', marginBottom: '0', paddingBottom: '0',}}>
                    Conheça Nossos Planos
                </h2>
                <h3>
                    Temos o plano perfeito para você iniciar hoje mesmo.
                </h3>
                <div className={styles.inicioSessao3Box}>
                    <div className={styles.inicioSessaoBoxPlanos}>
                        <div className={styles.boxPlanos}>
                            <h2>STARTER</h2>
                            <div className={styles.boxPlanosTitulos}>
                                <h3>
                                    <span>
                                        R$ 199,00 mês <br/>
                                    </span>
                                    PARA 1 USUÁRIO
                                </h3>
                                <h4>
                                    Mapeie suas estratégias dentro de seu funil preferido e coloque em ação.
                                </h4>
                            </div>
                            <div className={styles.boxPlanosDescricao}>
                                <ul>
                                    <li>1 usuário</li>
                                    <li> Até 10.000 visualizações de página</li>
                                    <li> Até 3 Funis</li>
                                    <li> +75 ícones de Integração</li>
                                    <li> 6 Modelos de Funis</li>
                                    <li> Exportar Funis em PNG</li>
                                    <li> Suporte via Ticket</li>
                                    <li> Compartilhar Funis entre Usuários</li>
                                </ul>
                            </div>
                            <div className={styles.boxPlanosBtn}>
                                <button>EXPERIMENTAR</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inicioSessaoBoxPlanos}>
                        <div className={styles.boxPlanos}>
                            <h2>GROWTH</h2>
                            <div className={styles.boxPlanosTitulos}>
                                <h3 style={{background: 'linear-gradient(145deg, rgba(114,2,187,1) 0%, rgba(50,100,245,1) 100%)', }}>
                                    <span>
                                        R$ 549,00 mês<br/>
                                    </span>
                                    ATÉ 3 USUÁRIOS
                                </h3>
                                <h4>
                                    Colaboração para ter mais performance e previsibilidade em suas campanhas digitais.
                                </h4>
                            </div>
                            <div className={styles.boxPlanosDescricao}>
                                <ul>
                                    <li> Todos os itens Starter e mais</li>
                                    <li> Acesso para até 3 usuários</li>
                                    <li> Até 50.000 visualizações de páginal</li>
                                    <li> Até 15 Funis</li>
                                    <li> Indicadores de Conversão On Time</li>
                                    <li> Integração com Sites</li>
                                    <li> Suporte Preferencial</li>
                                </ul>
                            </div>
                            <div className={styles.boxPlanosBtn}>
                                <button style={{
                                    background: 'linear-gradient(145deg, rgba(114,2,187,1) 0%, rgba(50,100,245,1) 100%)',
                                }}>EXPERIMENTAR</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inicioSessaoBoxPlanos}>
                        <div className={styles.boxPlanos}>
                            <h2>ENTERPRISE</h2>
                            <div className={styles.boxPlanosTitulos}>
                                <h3>
                                    <span>
                                        Sob demanda<br/>
                                    </span>
                                    PARA AGÊNCIAS E LANÇADORES
                                </h3>
                                <h4>
                                    Interação e resultados com otimização de campanhas para você ou seus clientes.
                                </h4>
                            </div>
                            <div className={styles.boxPlanosDescricao}>
                                <ul>
                                    <li> Todos os itens Growth e mais</li>
                                    <li> Acesso para até 50 usuários</li>
                                    <li> Inicie com mínimo de 50.000 visualizações de página</li>
                                    <li> Funis Ilimitados</li>
                                    <li> Mentoria Mensal</li>
                                    <li> Suporte Prioritário</li>
                                </ul>
                            </div>
                            <div className={styles.boxPlanosBtn}>
                                <button>EXPERIMENTAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.inicioSessao4}> 
                <h5 style={{margin:'8px',paddingTop: '20px',color: '#00bcd4', fontSize: '13px'}}>
                    Como a Funnelever ajuda sua empresa.
                </h5>
                <h5 style={{paddingBottom: '20px',}}>
                    Visualmente intuitivo. Conecte sua estratégia e dados em uma tela simples.
                </h5>
                <div className={styles.inicioSessaoBoxEmpresas}>
                    <div className={styles.cardEmpresasRow}>
                        <div className={styles.cardEmpresas}>
                            <Image src={img2} alt="Image" width={75} height={56} />
                            <div className={styles.cardEmpresasBody}>
                                <h3>
                                    Insights sem cientistas de dados
                                </h3>
                                <p>
                                    Tome decisões informadas em tempo real exibindo e filtrando facilmente seus dados.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardEmpresas}>
                            <Image className={styles.cardEmpresasImage} src={img2} alt="Image" width={75} height={56} />
                            <div className={styles.cardEmpresasBody}>
                                <h3>
                                    Colete e conecte
                                </h3>
                                <p>
                                    A Funnelever é independente de plataforma e permite extrair os dados de marketing de que você precisa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inicioSessaoBoxEmpresas}>
                    <div className={styles.cardEmpresasRow}>
                        <div className={styles.cardEmpresas}>
                            <Image src={img2} alt="Image" width={75} height={56} />
                            <div className={styles.cardEmpresasBody}>
                                <h3>
                                    Tome Decisões Mais Inteligentes.
                                </h3>
                                <p>
                                    Crie segmentos, compare os resultados da campanha e o desempenho do canal.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardEmpresas}>
                            <Image src={img2} alt="Image" width={75} height={56} />
                            <div className={styles.cardEmpresasBody}>
                                <h3>
                                    Entenda seus clientes.
                                </h3>
                                <p>
                                    À medida que as pessoas interagem com todos os seus ativos de marketing, o Funnelever rastreia pessoas individuais com base em um método seguro e compatível.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={styles.inicioSessao5}> 
                <div className={styles.inicioBoxDepoimento}> 
                    <h5 style={{margin:'8px',paddingTop: '20px',color: '#00bcd4', fontSize: '13px'}}>
                        Depoimentos
                    </h5>
                    <h5 style={{paddingBottom: '20px',}}>
                        O que estão falando da Funnelever?
                    </h5>
                    <div id="carouselDepoimento" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button style={{background: 'rgb(0, 188, 212)', borderRadius: '50px',borderTop: 'none', width: '13px', height: '3px'}} type="button" data-bs-target="#carouselDepoimento" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button style={{background: 'rgb(0, 188, 212)', borderRadius: '50px',borderTop: 'none', width: '13px', height: '3px'}} type="button" data-bs-target="#carouselDepoimento" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button style={{background: 'rgb(0, 188, 212)', borderRadius: '50px',borderTop: 'none', width: '13px', height: '3px'}} type="button" data-bs-target="#carouselDepoimento" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner" >
                            <div className="carousel-item active" data-bs-interval="1900">
                                <div className={styles.inicioDepoimentoSlide} style={{paddingBottom:'60px'}}>
                                    <Image src={img2} alt="Image" width={75} height={56} />
                                    <p>
                                        "Ut elementum a elit sed tristique. Pellentesque sed semper erat.
                                        Orci varius natoque penatibus et magnis dis parturient montes, 
                                        nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
                                    </p>
                                    <h4>William Smith</h4>
                                    <span>New Co-Founder</span>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1900">
                                <div className={styles.inicioDepoimentoSlide} style={{paddingBottom:'60px'}}>
                                    <Image src={img2} alt="Image" width={75} height={56} />
                                    <p>
                                        "Quisque lacinia sed velit et maximus. Quisque dictum, lacus a 
                                        malesuada finibus, arcu magna luctus risus, eu accumsan risus elit 
                                        vitae lacus."
                                    </p>
                                    <h4>Vinny Smart</h4>
                                    <span>Digital Marketer</span>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1900">
                                <div className={styles.inicioDepoimentoSlide} style={{paddingBottom:'60px'}}>
                                    <Image src={img2} alt="Image" width={75} height={56} />
                                    <p>
                                        "Vestibulum mauris ipsum, tempor tincidunt justo sit amet, 
                                        bibendum tincidunt dui. Aenean molestie, odio quis viverra 
                                        ultricies, leo tellus lacinia neque, sit amet maximus tortor 
                                        nunc aliquet felis."
                                    </p>
                                    <h4>Trevor Liam</h4>
                                    <span>Technology Chef</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerBox}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentSobre}>
                        <h4>
                            Sobre
                        </h4>
                        <p>
                        A Funnelever é uma startup focada no desenvolvimento 
                        e controle de funis de comunicação, marketing e vendas 
                        digitais, ajudando empresas, lançadores, produtores 
                        e agências a melhorarem suas performances em campanhas 
                        de vendas através de Inteligência Artificial.
                        </p>
                    </div>
                    <div className={styles.footerContentPlanos}>
                        <h4>
                            Nossos Planos
                        </h4>
                        <Link href="#">
                            <a target="_blank">
                                Starter
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Growth
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Enterprise
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerContentApoio}>
                        <h4>
                            Apoio e Suporte
                        </h4>
                        <Link href="#">
                            <a target="_blank">
                                Nosso Sistema
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Financeiro
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Reclamações
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Suporte ao cliente
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Últimas notícias
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerContentJuridico}>
                        <h4>
                            Jurídico
                        </h4>
                        <Link href="#">
                            <a target="_blank">
                                Politica de Privacidade
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                Termos de uso
                            </a>
                        </Link>
                        <Link href="#">
                            <a target="_blank">
                                GDPR - LGPD
                            </a>
                        </Link>
                    </div>
                </div>
                <h5>
                    FunneLever © 2022 Todos os direitos reservados
                </h5>
            </div>
        </body>
    );
}
