import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const FilterOptions = styled.div`
  margin-bottom: 20px;
`;

const FilterCheckbox = styled.label`
  margin-right: 10px;
`;

const PlaceCard = styled.div`
  display: inline-block;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PlaceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PlaceDetails = styled.div`
  padding: 10px;
  background-color: white;
  color: black;
`;

function Search() {
  const [query, setQuery] = useState('');
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);
  const [hearingAssistance, setHearingAssistance] = useState(false);
  
  const places = [
    { id: 1, name: 'Accessible Hotel', image: '/assets/hotel.jpg', wheelchair: true, hearing: false },
    { id: 2, name: 'Wheelchair-Friendly Restaurant', image: '/assets/restaurant.jpg', wheelchair: true, hearing: true },
    { id: 3, name: 'Accessible Park', image: '/assets/park.jpg', wheelchair: false, hearing: true },
  ];
  
  const filteredPlaces = places.filter(place => 
    place.name.toLowerCase().includes(query.toLowerCase()) && 
    (!wheelchairAccessible || place.wheelchair) && 
    (!hearingAssistance || place.hearing)
  );

  return (
    <SearchContainer>
      <h2>Search for Accessible Places</h2>
      <SearchInput 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      
      <FilterOptions>
        <FilterCheckbox>
          <input 
            type="checkbox" 
            checked={wheelchairAccessible}
            onChange={() => setWheelchairAccessible(!wheelchairAccessible)}
          /> Wheelchair Accessible
        </FilterCheckbox>
        <FilterCheckbox>
          <input 
            type="checkbox" 
            checked={hearingAssistance}
            onChange={() => setHearingAssistance(!hearingAssistance)}
          /> Hearing Assistance
        </FilterCheckbox>
      </FilterOptions>
      
      <div>
        {filteredPlaces.map(place => (
          <PlaceCard key={place.id}>
            <PlaceImage src={place.image} alt={place.name} />
            <PlaceDetails>
              <h3>{place.name}</h3>
              <Link to={`/details/${place.id}`}>View Details</Link>
            </PlaceDetails>
          </PlaceCard>
        ))}
      </div>
    </SearchContainer>
  );
}

export default Search;
