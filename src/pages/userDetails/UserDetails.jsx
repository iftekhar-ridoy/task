import { Avatar, Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      {loading ? (
        "loading..."
      ) : (
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
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            {user?.firstName} {user?.lastName}
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
      )}
    </Container>
  );
};

export default UserDetails;
