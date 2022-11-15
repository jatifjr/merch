import React, { useState } from "react";
import style from "./ProductDetails.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { addQty, rmvQty, Qty } = useStateContext();

    return (
        <div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <div className={style.imageLargeContainer}>
                        <img alt="slugImg" src={urlFor(image && image[index])} className={style.imageLarge} />
                    </div>
                    <div className={style.imageSmallContainer}>
                        {image?.map((item, i) => (
                            <img alt="slugImg" key={product._id} src={urlFor(item)} className={style.imageSmall} onMouseEnter={() => setIndex(i)} />
                        ))}
                    </div>
                </div>
                <div className={style.detailsContainer}>
                    <div className={style.desc}>
                        <h1 className={style.detailsName}>{name}</h1>
                        <p className={style.title}>Details :</p>
                        <p className={style.detailsDetails}>{details}</p>
                    </div>
                    <div className={style.quantity}>
                        <h2 className={style.detailsPrice}>Rp. {price}.000</h2>
                        <p className={style.title}>Quantity</p>
                        <p className={style.quantityDesc}>
                            <span className={style.qtyBtn} onClick={rmvQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className={style.qtyQty}>{Qty}</span>
                            <span className={style.qtyBtn} onClick={addQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                        <div className={style.buttons}>
                            <button type="button" onClick="" className={style.addBtn}>
                                Add To Cart
                            </button>
                            <button type="button" onClick="" className={style.buyNowBtn}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug{
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

export default ProductDetails;
