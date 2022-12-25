import React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";
import { client } from "../lib/client";
import { Card } from "../components/components";

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};

const Home = ({ products }) => {
    return (
        <div>
            <Head>
                <title>Menjelang Hujan Web Store</title>
                <meta name="description" content="Menjelang Hujan Web Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.container}>
                {products?.map((product) => (
                    <Card key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
