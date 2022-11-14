import React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";

import { client } from "../lib/client";

import { Navbar, Hero, Footer, Products, Card } from "../components/components";

const Home = ({ products }) => {
    return (
        <div>
            <Head>
                <title>Menjelang Hujan Web Store</title>
                <meta name="description" content="Menjelang Hujan Web Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <Products />
            <div className={style.container}>
                {products?.map((product) => (
                    <Card key={product._id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};

export default Home;
