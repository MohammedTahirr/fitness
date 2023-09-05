import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./VideoCard.css"; // Import the CSS file for styling

const VideoCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="video-card">
      <CardMedia className="media" image={imageUrl} title={title} />
      <CardContent className="content">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
