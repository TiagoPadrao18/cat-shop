import axios from "axios";
import Navbar from "../../components/navbar";
import { CatCard, MainContainer, Title } from "./styled";
import { useEffect, useState } from "react";

export const Shop = () => {
  const url = "https://localhost:8080/cats";
  const [catList, setCatList] = useState([
    {
      race: "",
      name: "",
      color: "",
      weight: "",
      age: "",
      location: "",
      image: "",
      price: "",
    },
  ]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCatList(response.data);
    });
  }, []);

console.log(catList);

  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>Available Cats</Title>
        <CatCard></CatCard>
      </MainContainer>
    </>
  );
};

export default Shop;
