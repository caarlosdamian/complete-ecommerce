import SearchIcon from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useHistory, Link } from "react-router-dom";
import {
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
  Center,
} from "./navbar.css";
import Imag from "../../utils/TOT.png";

const Navbar = () => {
  const history = useHistory();
  const path = history.location.pathname;

  const onclick = () => {
    history.push("/login");
  };

  if (path === "/login" || path === "/register") {
    return <></>;
  } else {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <SearchIcon style={{ color: "gary ", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo src={Imag} alt="" />
            </Link>
          </Center>
          <Right>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link
              to="login"
              onClick={onclick}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>SIGN IN</MenuItem>
            </Link>

            <MenuItem>
              {" "}
              <Link to="/checkout">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  }
};

export default Navbar;
