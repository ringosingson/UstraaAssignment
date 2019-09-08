import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";
import CollectionItem from "../components/CollectionItem";
const useStyles = makeStyles({
  root: {
    color: "white",
    background: "white"
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 130,
    margin: 4,
    borderRadius: 6
  }
});

function CollectionPreview({ category_list, product_list }, index) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div key={index}>
      <Tabs
        className={classes.root}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto example"
      >
        {category_list.map(({ category_id, category_name, category_image }) => (
          <Tab
            key={category_id}
            className={classes.image}
            label={category_name}
            style={{
              backgroundImage: `url(${category_image})`
            }}
          />
        ))}
      </Tabs>

      <div>
        {category_list
          .filter((n, i) => n.category_name === "Face & Body")
          .map(({ category_name, category_id }) => (
            <h4 key={category_id}>{category_name}</h4>
          ))}
        {product_list.products
          .filter((n, i) => n.type_id === "simple")
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
      <div>
        {category_list
          .filter((n, i) => n.category_name === "Featured Bundles")
          .map(({ category_name, category_id }) => (
            <h4 key={category_id}>{category_name}</h4>
          ))}
        {product_list.products
          .filter((n, i) => n.type_id === "bundle")
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;

/** .filter((type_id) => type_id=='simple')
 * 
 * import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";
import CollectionItem from "../components/CollectionItem";

const useStyles = makeStyles({
  root: {
    color: "white"
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 120,
    margin: 4,
    borderRadius: 6
  }
});

function CollectionPreview({ category_list, product_list }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.root}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto example"
      >
        {category_list.map(({ category_id, category_name, category_image }) => (
          <Tab
            key={category_id}
            className={classes.image}
            label={category_name}
            style={{
              backgroundImage: `url(${category_image})`
            }}
          />
        ))}
      </Tabs>

      {product_list.products.map(({ id, ...otherCollectionProps }) => (
        <CollectionItem key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionPreview;
  


 */
