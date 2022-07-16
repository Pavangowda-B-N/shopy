import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
function Stock(props){
    return (
      <Card sx={{ maxWidth: 500 }} className={props.className}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={props.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title} - {props.cost} Rs
        </Typography>
 
        <Typography variant="h6" color="text.primary">
            {props.Description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="mediam" variant='contained' color='success'>Book</Button>
        <Button size="mediam" variant='contained' color='warning' >Add to cart</Button>
      </CardActions>
      <Rating
        readOnly
        name="simple-controlled"
        value={Number(props.rating)}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </Card>
    )
}
export default Stock;