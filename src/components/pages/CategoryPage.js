import React from "react";
import CategoryPreview from "../CategoryPreview";
import CollectionItem from "../CollectionItem";
import SHOP_DATA from "../../../src/datas";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.category_list.map(
          ({ category_id, ...otherCollectionProps }) => (
            <CategoryPreview key={category_id} {...otherCollectionProps} />
          )
        )}
        {collections.product_list.products.map(
          ({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          )
        )}
      </div>
    );
  }
}

export default ShopPage;
