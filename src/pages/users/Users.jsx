import { Container } from "@mui/material";
import Userlists from "./components/Userlists";

const Users = () => {
  return (
    <Container sx={{
        marginTop: "20px",
    }}>
      <Userlists/>
    </Container>
  );
};

export default Users;
