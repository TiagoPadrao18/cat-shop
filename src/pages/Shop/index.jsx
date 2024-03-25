import axios from "axios";
import Navbar from "../../components/navbar";
import {
  CatCard,
  CatDetail,
  CatTitle,
  CatsContainer,
  ImageCat,
  MainContainer,
  Title,
} from "./styled";
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

  const catArray = Object.values(catList);

  const cardCats = catArray.map((item) => {
    return (
      <CatCard>
        <ImageCat src={item.image} />

        <div>
          <CatTitle>{item.race}</CatTitle>
          <CatTitle>{item.name}</CatTitle>
          <CatDetail>{item.color}</CatDetail>
          <CatDetail>{item.location}</CatDetail>
          <CatDetail>{item.price}</CatDetail>
          <CatDetail>{item.weight}</CatDetail>
        </div>
      </CatCard>
    );
  });

  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>Available Cats</Title>
        <CatsContainer>{cardCats}</CatsContainer>
      </MainContainer>
    </>
  );
};

export default Shop;
