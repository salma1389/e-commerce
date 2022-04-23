import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductsEdit from "./ProductsEdit";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct, productGet } from "../../redux/actions/actionProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import "./Products.css";
import { addToCart } from "../../redux/actions/actionCart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ prod }) {
  const { user } = useSelector((state) => state.userReducer);
  const [qty, setQty] = React.useState(1);

  // console.log(prod)
  // console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const addToCartHandler = () => {
  //   navigate(`/cart/${prod._id}`);

  // };

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {prod.nameproduct[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={prod.nameproduct}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={prod.avatar}
        alt={prod.nameproduct}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Link to={`/detailProduct/${prod._id}`}>
          <IconButton aria-label="share">
            <InfoTwoToneIcon />
          </IconButton>
        </Link>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>

      <button
        onClick={() => {
          dispatch(deleteproduct(prod._id));
          dispatch(productGet());
        }}
      >
        Delete
      </button>
      <div>
        {user && user.roles == "user" ? (
          <button onClick={() => dispatch(addToCart(prod._id, 1))}>
            Add To Cart
          </button>
        ) : (
          <Link to="/login">
            <button onClick={() => dispatch(addToCart(prod._id, 1))}>
              Add To Cart
            </button>
          </Link>
        )}
      </div>

      {/* <div>
        {user && user.roles == "admin" ? <ProductsEdit prod={prod} /> : null}
      </div> */}

      <div>
        <ProductsEdit prod={prod} />
      </div>
    </Card>
  );
}
