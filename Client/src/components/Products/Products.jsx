import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../utils/data";
import axios from "axios";
import Product from "./Product/Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTc5MmU5MWU2OWJiODdlMTNhZTA3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzEyOTI0NSwiZXhwIjoxNjMzMzg4NDQ1fQ.ZbCkGVmClBRiRDLCFrbdwB-suvlnJvSSln23Xbs6Vvs";
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products",
        );
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
