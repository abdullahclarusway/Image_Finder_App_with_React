import React from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ImageResult = ({ images }) => {
  let imageListContent;

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                <ZoomInIcon color="white" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  const actions = [<Button label="Close" primary={true} />];
  return <div>{imageListContent}</div>;
};

ImageResult.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResult;
