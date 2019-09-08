import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    display: "flex",
    maxWidth: 400,
    alignItems: "center"
  },
  media: {
    //width: '50%'
    width: 130,
    //height: "auto",
    paddingTop: " 32%",
    margin: 40,
    marginLeft: 5,
    marginRight: 5
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  ratingSection: {
    display: " flex",
    alignItems: "center",
    padding: 5
  },
  title: {
    display: "flex"
  },
  button: {
    marginRight: 50,
    marginLeft: 0,
    fontSize: 9,
    padding: 10,
    justifyContent: "center",
    borderRadius: 1
  }
});

function CollectionItem({
  id,
  name,
  image_urls,
  weight_unit,
  weight,
  rating,
  final_price,
  price,
  is_in_stock
}) {
  const classes = useStyles();
  return (
    <div key={id}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image_urls.x300}
          title="background"
        />
        <div className={classes.content}>
          <Typography
            fontWeight="fontWeightBold"
            style={{ fontSize: 10, marginRight: 10, marginTop: -20 }}
          >
            <h4>{name}</h4>
          </Typography>

          <Typography style={{ fontSize: 8, marginTop: -10 }}>
            ({weight} {weight_unit})
          </Typography>
          <div className={classes.title}>
            <Typography style={{ fontSize: 12, marginTop: -10 }}>
              <h4>₹ {final_price} </h4>
            </Typography>
            <Typography
              style={{
                textDecoration: "line-through",
                marginLeft: 15,
                fontSize: 10,
                marginTop: 8
              }}
            >
              ₹ {price}
            </Typography>
          </div>

          {is_in_stock ? (
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: " #55c961" }}
              color="secondary"
              className={classes.button}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              disabled
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              OUT OF STOCK
            </Button>
          )}
        </div>

        {rating ? (
          <React.Fragment>
            <div className={classes.ratingSection}>
              <Typography style={{ fontSize: 10, marginBottom: 110 }}>
                {rating}
              </Typography>
              <IconButton aria-label="rating" color="inherit">
                <GradeIcon
                  style={{
                    fontSize: 15,
                    marginBottom: 112,
                    marginLeft: -8
                  }}
                />
              </IconButton>
            </div>
          </React.Fragment>
        ) : null}
      </Card>
    </div>
  );
}

export default CollectionItem;

/**
 * import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "100%" // 16:9,
  },
  rating: {
    marginBottom: -38
  },
  star: {
    marginLeft: 11
  },
  starRate: {
    marginLeft: 280,
    marginTop: -65
  }
});

function CollectionItem({
  id,
  name,
  image_urls,
  weight_unit,
  weight,
  rating,
  final_price,
  price
}) {
  const classes = useStyles();
  return (
    <div key={id}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image_urls.x300}
          title="background"
        />
        <CardHeader
          title={name}
          subheader={
            <>
              {weight} {weight_unit}
            </>
          }
        />
        <div className={classes.starRate}>
          <Typography className={classes.rating}>{rating}</Typography>

          <IconButton
            className={classes.star}
            aria-label="rating"
            color="inherit"
          >
            <GradeIcon />
          </IconButton>
        </div>
        <CardHeader
          title={final_price}
          subheader={
            <Typography style={{ textDecoration: "line-through" }}>
              {price}
            </Typography>
          }
        />
      </Card>
    </div>
  );
}

export default CollectionItem;
 */
