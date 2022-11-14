import Head from "next/head";
import { Navbar, Hero, Footer, Products } from "../components/components";

export default function Home({ children }) {
    return (
        <div>
            <Head>
                <title>Menjelang Hujan Web Store</title>
                <meta name="description" content="Menjelang Hujan Web Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <main>
                <Products />
                { children }
            </main>
            <Footer />
        </div>
    );
}
