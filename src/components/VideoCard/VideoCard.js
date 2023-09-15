import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./VideoCard.css";

const VideoCard = ({ title, description, videoUrl, key, tags }) => {
  return (
    <Card key={key} className="video-card">
      <CardMedia className="media">
        <video className="video-container" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardMedia>
      <CardContent className="content">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          className="description"
          variant="body2"
          color="textSecondary"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {tags}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
