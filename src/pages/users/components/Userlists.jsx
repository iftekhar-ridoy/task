import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { MdSort } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import { Link } from "react-router-dom";
import Search from "../../../components/Search";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "5px",
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& li": {
      padding: "8px 15px",
      fontSize: "14px",
    },
    "& .MuiMenuItem-root": {
      "& svg": {
        fontSize: 18,
        marginRight: theme.spacing(1.2),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Userlists = () => {
  const [users, setUsers] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const [sortBy, setSortBy] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (filteredData) => {
    setSearchedData(filteredData);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSortOptionClick = (value) => {
    setAnchorEl(null);
    setSortBy(value);
  };

  const sortUsers = (users) => {
    if (sortBy === "name") {
      return users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    } else if (sortBy === "email") {
      return users.sort((a, b) => (a.email > b.email ? 1 : -1));
    } else if (sortBy === "company") {
      return users.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    }
    return users;
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Search
          usersData={users?.users}
          onSearch={handleSearch}
          setLoading={setLoading}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "row-reverse", md: "row" },
            mt: { xs: "10px", md: 0 },
            alignItems: "end",
            gap: "10px",
          }}
        >
          <Button
            variant="text"
            sx={{
              px: "12px",
              color: sortBy ? "primary.main" : "#777",
            }}
            endIcon={<MdSort />}
            onClick={handleOpenMenu}
          >
            Sort
          </Button>
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleSortOptionClick("name")}>
              Sort by Name
            </MenuItem>
            <MenuItem onClick={() => handleSortOptionClick("email")}>
              Sort by Email
            </MenuItem>
            <MenuItem onClick={() => handleSortOptionClick("company")}>
              Sort by Company
            </MenuItem>
          </StyledMenu>

          <Link to="/add">
            <Button
              variant="text"
              sx={{
                px: "12px",
                color: "#777",
              }}
              endIcon={<IoAdd />}
            >
              Add
            </Button>
          </Link>
        </Box>
      </Box>

      {loading ? (
        "loading..."
      ) : (
        <Box
          sx={{
            mt: "20px",
            height: "calc(100vh - 98px)",
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ddd",
              borderRadius: "24px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#ccc",
            },
          }}
        >
          {sortUsers(
            searchedData.length > 0 ? searchedData : users?.users
          )?.map((user, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  padding: "20px",
                  border: "1px solid #efefef",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  height: "100%",
                  maxHeight: "336px",
                }}
              >
                <Avatar
                  src={user?.image}
                  sx={{
                    width: "140px",
                    height: "140px",
                    margin: "0 auto",
                    borderRadius: "10px",
                    border: "1px solid #efefef",
                    cursor: "pointer",
                    padding: "15px",
                  }}
                  alt={user?.name}
                />

                <Typography
                  to={`/${user?.id}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "& a": {
                      color: "inherit",
                      textDecoration: "none",
                    },
                  }}
                >
                  <Link to={`/${user?.id}`}>
                    {user?.firstName} {user?.lastName}
                  </Link>
                </Typography>

                <Typography
                  onClick={() => {
                    window.location.href = `mailto:${user?.email}`;
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#8A9099",
                    cursor: "default",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <IoMdMail />
                  {user?.email}
                </Typography>

                <Typography
                  color={"#8A9099"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <HiLocationMarker />
                  {user?.address?.address}, {user?.address?.city} ,{" "}
                  {user?.address?.state}
                </Typography>

                <Typography
                  color={"#8A9099"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <MdOutlineWork />
                  {user?.company?.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Userlists;
