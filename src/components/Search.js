import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import axios from "axios";
import ImageResult from "./ImageResult";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [amount, setAmount] = useState(15);
  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "20182889-5b3d68cb1fa621497e271db7b";

  const handleChange = (e) => {
    setSearchText(e.target.value);
    findImage();
  };

  const findImage = () => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      )
      .then((res) => setImages(res.data.hits))
      .catch((err) => console.log(err));
  };

  console.log(images);
  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={handleChange}
        label="Search For Images"
        fullWidth={true}
      />
      <InputLabel id="amount">Amount</InputLabel>
      <Select
        name="amount"
        labelId="amount"
        id="amount"
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
      {images.length > 0 ? <ImageResult images={images} /> : null}
    </div>
  );
};

export default Search;
