import React from 'react';
import Head from 'next/head';
import Layout from 'Layouts';
import { Card, CardBody } from '@paljs/ui/Card';
import { InputGroup } from '@paljs/ui/Input';
import styled from 'styled-components';
import { Button } from '@paljs/ui';

const Input = styled(InputGroup)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px;
`;

export default function Definicoes() {
    return (
        <Layout title="Definições">
            <Head>
                <title>Definições - Funnelever</title>
                <meta name="description" content="Definições" />
                <link rel="icon" href="/src/images/favicon.png" />
            </Head>
            <Card>
                <header style={{ fontSize: '25px' }}>Detalhes da sua conta</header>
                <CardBody>
                    <Input fullWidth size="Small">
                        <label htmlFor="primeiroNome" style={{ marginBottom: '10px' }}>
                            Primeiro nome
                        </label>
                        <input id="primeiroNome" type="text" placeholder="Primeiro nome" />
                    </Input>
                    <Input fullWidth>
                        <label htmlFor="sobrenome" style={{ marginBottom: '10px' }}>
                            Sobrenome
                        </label>
                        <input id="sobrenome" type="text" placeholder="Sobrenome" />
                    </Input>
                    <Input fullWidth size="Large">
                        <label htmlFor="email" style={{ marginBottom: '10px' }}>
                            Endereço de email
                        </label>
                        <input id="email" type="text" placeholder="Endereço de email" />
                    </Input>
                    <Button style={{ margin: '10px' }}>Salvar</Button>
                </CardBody>
            </Card>
            <Card>
                <header style={{ fontSize: '25px' }}>Redefinir sua senha</header>
                <CardBody>
                    <Input fullWidth size="Small">
                        <label htmlFor="senhaAtual" style={{ marginBottom: '10px' }}>
                            Senha atual
                        </label>
                        <input id="senhaAtual" type="text" placeholder="Senha atual" />
                    </Input>
                    <Input fullWidth>
                        <label htmlFor="novaSenha" style={{ marginBottom: '10px' }}>
                            Nova Senha
                        </label>
                        <input id="novaSenha" type="text" placeholder="Nova Senha" />
                    </Input>
                    <Input fullWidth size="Large">
                        <label htmlFor="confirmeSenha" style={{ marginBottom: '10px' }}>
                            Confirme a Senha
                        </label>
                        <input id="confirmeSenha" type="text" placeholder="Confirme a Senha" />
                    </Input>
                    <Button style={{ margin: '10px' }}>Digite uma senha válida</Button>
                </CardBody>
            </Card>
        </Layout>
    );
}
