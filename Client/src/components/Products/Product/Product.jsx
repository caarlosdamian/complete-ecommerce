import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <FavoriteBorderOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;
