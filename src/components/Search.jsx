import { Box, InputBase } from "@mui/material";
import { BsSearch } from "react-icons/bs"; 
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Search = (props) => {
  // eslint-disable-next-line react/prop-types
  const { usersData, onSearch, setLoading } = props;
  
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = (search) => {
    // eslint-disable-next-line react/prop-types
    const filteredData = search === "" ? [] : usersData?.filter((user) => {
      return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase());
    });
    onSearch(filteredData);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    handleSearch(debouncedSearchValue);
    setLoading(false);
  }, [debouncedSearchValue]);

  return (
    <Box sx={{ 
      position: "relative", 
      width: "100%",
      }}>
      <InputBase
        sx={{
          border: "1px solid #ddd",
          padding: "0 36px 0 15px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          borderRadius: "3px",
          width: "100%",
          transition: ".5s",
          "&.Mui-focused": {
            width: "100%",
            borderColor: "primary.main",
          },
        }}
        value={searchValue} 
        onChange={handleChange}
        placeholder="Search by name..."
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "7px",
          transform: "translate(0, -50%)",
          display: "flex",
          alignItem: "center",

          "& svg": {
            fontSize: "20px",
            color: "primary.main",
          },
        }}
      >
        <BsSearch />
      </Box>
    </Box>
  );
};

export default Search;
