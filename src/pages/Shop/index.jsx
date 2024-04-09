import axios from "axios";
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
import { useEffect, useState } from "react";

export const Shop = () => {
  const url = "https://localhost:8080/cats";

  const [catList, setCatList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(4);
  const [selectedRaces, setSelectedRaces] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCatList(response.data);
    });
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleRaceChange = (race) => {
    const index = selectedRaces.indexOf(race);
    if (index === -1) {
      setSelectedRaces([...selectedRaces, race]);
    } else {
      setSelectedRaces(selectedRaces.filter((r) => r !== race));
    }
  };

  const catArray = Object.values(catList);

  const filteredCats = catArray.filter((cat) =>
    selectedRaces.length === 0 ? true : selectedRaces.includes(cat.race)
  );

  console.log(filteredCats);
  
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

        <LinkButton to={`/public/cat/${key}`} state={{ ...item }}>
          show.more
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
          <Title>Available Cats</Title>
          <CatsContainer>{cardCats}</CatsContainer>
          <StyledPagination>
            <StyledButtonPag onClick={prevPage} disabled={currentPage === 1}>
              Previous Page
            </StyledButtonPag>
            <StyledButtonPag
              onClick={nextPage}
              disabled={indexOfLastCat >= catArray.length}
            >
              Next Page
            </StyledButtonPag>
          </StyledPagination>
        </MainSubContainer>
      </MainContainer>
    </>
  );
};

export default Shop;
