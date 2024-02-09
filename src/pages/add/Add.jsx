import {
  Box,
  Container,
  IconButton,
  Typography,
  TextField,
  Stack,
  Button
} from "@mui/material";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const Add = () => {
  const [blobs, setBlobs] = useState({ image: "" });

  const handleAddImage = (e, name) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlobs({ ...blobs, [name]: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <Typography variant="h2">Add New User</Typography>

      <Box
        sx={{
            mt: "20px",
            position: "relative",
            height: "173px",
            width: "173px",
        }}
      >
        <Box
          sx={{
              margin: "0 auto",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            border: "1px solid #ddd",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f5f5f5",
          }}
        >
          {blobs?.image ? (
            <img
              src={blobs?.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                padding: "2px",
                borderRadius: "4px",
            }}
            />
          ) : (
              <IoPerson style={{ fontSize: "80px", color: "#afafaf" }} />
          )}
        </Box>
        <IconButton
          component="label"
          sx={{
              position: "absolute",
              bottom: "6px",
            right: "6px",
            zIndex: "100",
            color: (theme) => theme.palette.primary.main,
            bgcolor: "#fff",
            boxShadow: "0 0 3px #ddd",
            "&:hover": {
                bgcolor: "#fff",
            },
        }}
        >
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            hidden
            onChange={(e) => handleAddImage(e, "image")}
          />
          <MdEdit />
        </IconButton>
      </Box>

      <Typography mt={"20px"} mb={"10px"} color={"primary.main"}>Personal Details</Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"/>
        <TextField id="outlined-basic" label="Middle Name" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="City" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="State" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Postal Code" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Street" variant="outlined" size="small" multiline rows={2} sx={{
            gridColumn: "1/-1"
        }}/>
      </Stack>

      <Typography mt={"20px"} mb={"10px"} color={"primary.main"}>Comapny Details</Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <TextField id="outlined-basic" label="Company Name" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Designation" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Department" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="City" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="State" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Postal Code" variant="outlined" size="small" />
        <TextField id="outlined-basic" label="Street" variant="outlined" size="small" multiline rows={2} sx={{
            gridColumn: "1/-1"
        }}/>
      </Stack>

      <Button variant="contained" sx={{
        marginTop: "20px",
      }}>Add User</Button>
    </Container>
  );
};

export default Add;
