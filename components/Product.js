import Link from "next/link";
import { urlFor } from "../lib/client";

function Product({ product: { image, name, slug, price } }) {
  return (
    <>
      <Link href={`/product/${slug.current}`} passHref={true}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt={`${name}-${price}`}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </>
  );
}

export default Product;
