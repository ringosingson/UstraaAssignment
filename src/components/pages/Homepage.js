import React from "react";
//import { useFetch } from "../Hooks";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import CategoryPreview from "../CategoryPreview";

import SHOP_DATA from "../../../src/datas";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <>
        {collections.map(({ category_list, product_list, index }) => (
          <CategoryPreview
            key={index}
            product_list={product_list}
            category_list={category_list}
          />
        ))}
      </>
    );
  }
}

export default Homepage;

/** 
  import React from "react";
//import { useFetch } from "../Hooks";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import CategoryPreview from "../CategoryPreview";

import SHOP_DATA from "../../../src/datas";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <>
        {collections.map(({ category_list, product_list }) => (
          <CategoryPreview
            product_list={product_list}
            category_list={category_list}
          />
        ))}
      </>
    );
  }
}

export default Homepage;

https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob

 * 
 * 
 */
