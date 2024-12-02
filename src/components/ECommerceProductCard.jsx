import style from './ECommerceProductCard.module.css';
import data from '../../data.json';
import { useState } from 'react';

const ECommerceProductCard = () => {
  const [currentIndexNumber, setCurrentIndexNumber] = useState(0);
  const images = data.ECommerceProductImages;

  const availableSize = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className={style.productCardContainer}>
      <div className={style.container}>
        <div className={style.imagesContainer}>
          <div className={style.imagesCarousal}>
            {images.map((image) => (
              <div className={style.carousalImageContainer} key={image.id}>
                <img src={image.url} className={style.carousalImage} />
              </div>
            ))}
          </div>
          <div className={style.mainImageContainer}>
            <img
              src={images[currentIndexNumber].url}
              className={style.mainImage}
            />
          </div>
        </div>
        <div className={style.productDetailsContainer}>
          <h3 className={style.brandName}>POLO RALPH </h3>
          <h1 className={style.productName}>
            Custom Fit Polo Bear Oxford Shirt
          </h1>
          <h4 className={style.productSummary}>
            Blue polo with a classic cut. Made of smooth and soft cotton.
          </h4>
          <div className={style.priceAndDiscountContainer}>
            <h2 className={style.priceAmount}>$99.00</h2>
            <h3 className={style.discountValue}>-0.25%</h3>
          </div>
          <h4 className={style.originalPrice}>$132.00</h4>
          <h5 className={style.chooseSizeLabel}>Choose size</h5>
          <div className={style.sizeOptionsContainer}>
            {availableSize.map((size) => (
              <p key={size} className={style.availableSize}>
                {size}
              </p>
            ))}
          </div>
          <button className={style.addToBagBtn}>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceProductCard;
