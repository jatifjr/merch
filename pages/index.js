import React from "react";
import Head from "next/head";

import style from "../styles/Home.module.css";

import { client } from "../lib/client";

import { Navbar, Hero, Products, Card, Footer } from "../components/components";

const Home = ({ products }) => {
    return (
        <div>
            <Hero />
            <Products />
            <div className={style.container}>
                {products?.map((product) => (
                    <Card key={product._id} product={product} />
                    ))}
            </div>
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
