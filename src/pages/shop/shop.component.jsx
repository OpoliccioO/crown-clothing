import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionPreview }) => (
        <CollectionPreview key={id} {...collectionPreview} />
      ))}
    </div>
  );
};

export default ShopPage;
