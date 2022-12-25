import React, { useState } from "react";
import style from "./ProductDetails.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import { CurrencyFormat } from "../../utilities/FormatCurrency";

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
        current
        }
    }`;

    const product = await client.fetch(query);

    const paths = product.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);

    return {
        props: { product },
    };
};

const ProductDetails = ({ product }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { addQty, rmvQty, quantity, onAdd, setShowCart } = useStateContext();
    const handleBuyNow = () => {
        onAdd(product, quantity);

        setShowCart(true);
    };

    return (
        <div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <div className={style.imageLargeContainer}>
                        <img alt="slugImg" src={urlFor(image && image[index])} className={style.imageLarge} />
                    </div>
                    <div className={style.imageSmallContainer}>
                        {image?.map((item, i) => (
                            <img alt="slugImg" key={i} src={urlFor(item)} className={style.imageSmall} onMouseEnter={() => setIndex(i)} />
                        ))}
                    </div>
                </div>
                <div className={style.detailsContainer}>
                    <div className={style.desc}>
                        <h1 className={style.detailsName}>{name}</h1>
                        <p className={style.title}>Detail produk :</p>
                        <p className={style.detailsDetails}>{details}</p>
                    </div>
                    <div className={style.quantity}>
                        <h2 className={style.detailsPrice}>{CurrencyFormat(price)}</h2>
                        <div className={style.buttons}>
                            <p className={style.title}>Jumlah :</p>
                            <p className={style.quantityDesc}>
                                <span className={style.qtyBtn} onClick={rmvQty}>
                                    <AiOutlineMinus />
                                </span>
                                <span className={style.qtyQty}>{quantity}</span>
                                <span className={style.qtyBtn} onClick={addQty}>
                                    <AiOutlinePlus />
                                </span>
                            </p>
                            <button type="button" onClick={() => onAdd(product, quantity)} className={style.addBtn}>
                                + Keranjang +
                            </button>
                            <button type="button" onClick={handleBuyNow} className={style.buyNowBtn}>
                                Beli Langsung
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
