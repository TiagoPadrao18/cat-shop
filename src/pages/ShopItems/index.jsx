import axios from "axios";
import {
  CatCard,
  CatDetail,
  CatTitle,
  CatsContainer,
  ImageCat,
  ImageContainer,
  LinkButton,
  MainContainer,
  StyledButtonPag,
  StyledCatInfo,
  StyledPagination,
  Title,
} from "./styled";
import { useEffect, useState } from "react";

export const ShopItems = () => {
  const url = "https://localhost:8080/items";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(5);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data[0].food);
      setCatList(response.data);
    });
  }, []);

  const catArray = Object.values(catList);
  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = catArray.slice(indexOfFirstCat, indexOfLastCat);

  const cardCats = currentCats.map((item, key) => {
    return (
      <CatCard>
        <StyledCatInfo>
          <ImageContainer>
            <ImageCat src={item.image} />
          </ImageContainer>
          <MainContainer>
            <CatTitle>Race: {item.race}</CatTitle>
            <CatTitle>Name: {item.name}</CatTitle>
            <CatDetail>${item.price}</CatDetail>
          </MainContainer>
        </StyledCatInfo>

        <LinkButton to={`/public/cat/${key}`} state={{ ...item }}>
          {" "}
          show.more
        </LinkButton>
      </CatCard>
    );
  });
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(catArray.length / catsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <MainContainer>
        <Title>Available Cats</Title>
        <CatsContainer>{cardCats}</CatsContainer>
        <StyledPagination>
          {pageNumbers.map((number) => (
            <StyledButtonPag onClick={() => paginate(number)}>
              {number}
            </StyledButtonPag>
          ))}
        </StyledPagination>
      </MainContainer>
    </>
  );
};

export default ShopItems;
