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
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [like,setLike]=React.useState(false)

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

  const handelLike= ()=>{
    setLike(!like)
  }

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
        height="300"
        image={prod.avatar}
        alt={prod.nameproduct}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={like? "on":"off"} onClick={handelLike} />
        </IconButton>

        <Link to={`/detailProduct/${prod._id}`}>
          <IconButton aria-label="share" style={{"color":"blue"}}>
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
     


      
     

      <div>
        {user && user.roles == "admin" ? <div>
        <ProductsEdit prod={prod} /> 
        <IconButton aria-label="delete"
      style={{"color":'red',"marginTop":"-7vh"}}
        onClick={() => {
          dispatch(deleteproduct(prod._id));
          dispatch(productGet());
        }}
        >
        <DeleteIcon/>
      </IconButton>
      </div>
        : null}
      </div>

      {/* <div>
        <ProductsEdit prod={prod} />
      </div> */}
    </Card>
  );
}
