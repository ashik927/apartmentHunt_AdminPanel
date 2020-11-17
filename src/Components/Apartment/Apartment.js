import React, { useState } from 'react';
import './Apartment.css'
import ApertmentData from '../../Data/ApertmentData';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Apartment = () => {
    const [data, setData] = useState(ApertmentData)


    return (
        <div>
            <div className="all-area">
                <div className="single-apertment-header">
                    <p>House Rent</p>
                    <h3>
                        Discover the latest Rent
                        <br/>
                        available today
                </h3>
                </div>
                <div className="row">
                    {
                        data.map(apar => <SingleApart apartment={apar}></SingleApart>)
                    }
                </div>
            </div>

        </div>
    );
};

const SingleApart = (props) => {
    const useStyles = makeStyles({
        root: {
            textAlign: "left"

        },
        button: {
            textAlign: "right"
        }
    });

    const classes = useStyles();

    const { name, img, price , location , bed , bath} = props.apartment;


    return (
        <div className="col-md-4">
            <div className="">
                <div className="card-style">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={img}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <i class="fas fa-map-marker-alt"></i> {location}
                                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <i class="fas fa-bed"></i> {bed}
                        <br/>
                        <i class="fas fa-bath"></i> {bath}
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <h3>$ {price} </h3>
                            <Button size="small" color="primary" >
                                <div className="butt">
                                    <button className="view">View Details</button>
                                </div>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Apartment;