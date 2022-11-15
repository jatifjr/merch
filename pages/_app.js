import React from 'react'
import { Toaster } from 'react-hot-toast'

import Layout from '../components/Layout/Layout';
import "../styles/globals.css";
import { StateContext } from '../context/StateContext';

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
