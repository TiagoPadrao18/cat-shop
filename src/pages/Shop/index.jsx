import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CatCard,
  CatDetail,
  CatTitle,
  CatsContainer,
  ImageCat,
  ImageContainer,
  LeftFilterContainer,
  LinkButton,
  MainContainer,
  StyledButtonPag,
  StyledCatInfo,
  StyledPagination,
  Title,
  MainSubContainer,
  FilterTitle,
  FilterList,
  InputCheckbox,
  StyledLabel,
  FilterSubtitle,
} from "./styled";
import MockData from "./cats.json"
import { Navigate } from "react-router-dom";

export const Shop = () => {
  const url = "https://localhost:8080/cats";
  const navigate = useNavigate();

  const [catList, setCatList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(4);
  const [selectedRaces, setSelectedRaces] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from url:", error);
        console.log("Trying alternate url...");
        setCatList(MockData);
      });
  }, []);
  const catArray = Object.values(catList);

  const filteredCats = catArray.filter((cat) =>
    selectedRaces.length === 0 ? true : selectedRaces.includes(cat.race)
  );

  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = filteredCats.slice(indexOfFirstCat, indexOfLastCat);

  const cardCats = currentCats.map((item, key) => {
    return (
      <CatCard key={key}>
        <StyledCatInfo>
          <ImageContainer>
            <ImageCat src={item.image} />
          </ImageContainer>
          <div>
            <CatTitle>Race: {item.race}</CatTitle>
            <CatTitle>Name: {item.name}</CatTitle>
            <CatDetail>${item.price}</CatDetail>
          </div>
        </StyledCatInfo>

        <LinkButton to={`/public/cat/${item.name}`} state={{ ...item }}>
          show more
        </LinkButton>
      </CatCard>
    );
  });

  const uniqueRaces = [...new Set(catArray.map((cat) => cat.race))];
  const renderFilterInput = uniqueRaces.map((item, index) => {
    return (
      <StyledLabel key={index}>
        <InputCheckbox
          type="checkbox"
          onChange={() => handleRaceChange(item)}
          checked={selectedRaces.includes(item)}
        />
        {item}
      </StyledLabel>
    );
  });

  const totalPages = Math.ceil(filteredCats.length / catsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const isLastPage = indexOfLastCat >= filteredCats.length;

  const handleRaceChange = (race) => {
    const index = selectedRaces.indexOf(race);
    if (index === -1) {
      setSelectedRaces([...selectedRaces, race]);
    } else {
      setSelectedRaces(selectedRaces.filter((r) => r !== race));
    }
  };

  return (
    <>
      <MainContainer>
        <LeftFilterContainer>
          <FilterTitle>Activate Filters</FilterTitle>
          <FilterList>
            <FilterSubtitle>Race</FilterSubtitle>
            {renderFilterInput}
          </FilterList>
        </LeftFilterContainer>
        <MainSubContainer>
          <Title>Available Pictures of Cats</Title>
          <CatsContainer>{cardCats}</CatsContainer>
          <StyledPagination>
            <StyledButtonPag onClick={prevPage} disabled={currentPage === 1}>
              Previous Page
            </StyledButtonPag>
            <StyledButtonPag onClick={nextPage} disabled={isLastPage}>
              Next Page
            </StyledButtonPag>
          </StyledPagination>
        </MainSubContainer>
      </MainContainer>
    </>
  );
};

export default Shop;
