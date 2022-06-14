import React from 'react';
import Head from 'next/head';
import Layout from 'Layouts';

export default function Lonas() {
    return (
        <Layout title="Lonas">
            <Head>
                <title>Lonas - Funnelever</title>
                <meta name="description" content="Lonas" />
                <link rel="icon" href="/src/images/favicon.png" />
            </Head>
            <h1>Lonas</h1>
        </Layout>
    );
}
