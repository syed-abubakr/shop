import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate, useNavigation } from "react-router-dom";

export default function Product({ data, setdetail }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/details")
    console.log("details:",data["id"], data["title"])
    setdetail(
      {
          id: data["id"],
          title: data["title"],
          price: data["price"],
          description: data["description"],
          images:data["images"]
        }
    )
  }
  return (
    <Card sx={{ maxWidth: 345 }}
      onClick = {handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data["images"]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data["title"]}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Rs. {data["price"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data["description"]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <center>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </center>
      </CardActions>
    </Card>
  );
}
