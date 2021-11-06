import * as React from 'react';
import "./Home.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CS from "../Images/CS.jpg";
import java from "../Images/java.jpg";
import react from "../Images/react.jpg";

import DisplayImage from "../Images/paper.jpg";

export default function MediaCard() {
  return (
      <div className="container" >

         {/* <div className="display">

                <img src={DisplayImage} alt="DisplayImage" height={500} width={1200} />
  </div>*/}

            <div className="word">
                
                <h1>Welcome to the future</h1>

            </div>

          <div className="home_page">
          <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image={CS}
                    alt="CS"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Computer Science
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Computer science is the study of algorithmic processes, 
                    computational machines and computation itself. As a discipline,

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image={java}
                    alt="CS"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Java Language
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Computer science is the study of algorithmic processes, 
                    computational machines and computation itself. As a discipline,

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image={react}
                    alt="CS"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    React Language
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Computer science is the study of algorithmic processes, 
                    computational machines and computation itself. As a discipline,

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
         </div>
            
      </div>
    
  );
}