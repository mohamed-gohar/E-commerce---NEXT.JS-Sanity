import styles from "../styles/Home.module.css";

import { Product, FooterBanner, HeroBanner } from "../components";

import { client } from "../lib/client";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner bannerData={bannerData && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations</p>
      </div>
      <div className="products-container">
        {/* {console.log(products)} */}
        {products?.map((pro) => (
          <Product key={pro._id} product={pro} />
        ))}
      </div>

      <FooterBanner bannerData={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};
