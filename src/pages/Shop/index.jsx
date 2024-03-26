import axios from "axios";
import Navbar from "../../components/navbar";
import {
  CatCard,
  CatDetail,
  CatTitle,
  CatsContainer,
  ImageCat,
  LinkButton,
  MainContainer,
  Title,
} from "./styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const cardCats = catArray.map((item, key) => {
    return (
      <CatCard>
        <ImageCat src={item.image} />

        <div>
          <CatTitle>Race: {item.race}</CatTitle>
          <CatTitle>Name: {item.name}</CatTitle>
          <CatDetail>${item.price}</CatDetail>
        </div>
        <LinkButton to={`/cat/${key}`} state={{ ...item }}>
          {" "}
          show.more
        </LinkButton>
      </CatCard>
    );
  });

  return (
    <>
      <MainContainer>
        <Title>Available Cats</Title>
        <CatsContainer>{cardCats}</CatsContainer>
      </MainContainer>
    </>
  );
};

export default Shop;
