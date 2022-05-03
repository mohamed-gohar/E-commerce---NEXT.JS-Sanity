import Link from "next/link";
import { urlFor } from "../lib/client";

function FooterBanner({
  bannerData: {
    discount,
    largeText1,
    largeText2,
    midText,
    image,
    smallText,
    saleTime,
    buttonText,
    product,
    desc,
  },
}) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <img
            src={urlFor(image)}
            alt={product}
            className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
