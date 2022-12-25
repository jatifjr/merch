import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Toaster
                    toastOptions={{
                        style: {
                            background: "#000",
                            color: "#fff",
                            border: "1px solid #90ffe1",
                        },
                    }}
                />
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}

export default MyApp;
