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
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Categorys.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";





export default function RecipeReviewCard({ categ }) {


  // console.log(categ)
  const [expanded, setExpanded] = React.useState(false);
  const [like,setLike]=React.useState(false)


  const handelLike= ()=>{
    setLike(!like)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {categ.categName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={categ.categName}
        subheader="September 14, 2016"
      />
      <CardMedia
        className="image"
        component="img"
        height="300"
        image={categ.img}
        alt={categ.categName}
      />
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon className={like? "on":"off"} onClick={handelLike} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/${categ.categName}`}>
          <Button style={{"width":"6vw","marginLeft":"4vw","height":"5vh","paddingBottom":"20px"}}> <h6>see choice</h6> </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
  
}
