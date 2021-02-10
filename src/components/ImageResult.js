import React, { useState } from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
}));

const ImageResult = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImage(img);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  let imageListContent;

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
            <GridListTileBar
              title={img.tags}
              subtitle={<span>by: {img.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${img.title}`}
                  className={classes.icon}
                  onClick={() => handleOpen(img.largeImageURL)}
                >
                  <ZoomInIcon color="white" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }
  return (
    <div>
      {imageListContent}
      <Dialog modal={false} open={open} onBackdropClick={handleClose}>
        <img src={currentImage} alt="currentImage" style={{ width: "100%" }} />
      </Dialog>
    </div>
  );
};

ImageResult.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResult;
