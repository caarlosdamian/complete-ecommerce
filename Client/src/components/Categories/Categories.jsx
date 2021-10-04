import styled from "styled-components";
import { mobile } from "../../responsive";
import { categories } from "../../utils/data";
import CategoyItem from "./CategoryItem/CategoyItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding:"0px",flexDirection:"column" })}

`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoyItem  key={item.id}item={item} />
      ))}
    </Container>
  );
};

export default Categories;
