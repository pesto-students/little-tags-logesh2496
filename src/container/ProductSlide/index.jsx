import React from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ProductImage from "../../components/ProductImage";
import "./product-slide.scss";

const ProductSlide = (props) => {
  const { description, id, image: imageUrl, price, title } = props.product;
  const history = useHistory();
  const params = useParams();

  const onProductSelect = () => {
    history.push(`${params.searchQuery}/${id}`);
  };
  return (
    <div className="product-slide" onClick={onProductSelect}>
      <div className="image">
        <ProductImage url={imageUrl} />
      </div>
      <div className="title">{title}</div>
      <div className="price">{price}</div>
    </div>
  );
};

export default ProductSlide;
