import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/location';
import ResidentList from './components/ResidentList';

const App = () => {
  const [locateInfo, setLocateInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');

  // location random
  const idLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocationRandom()}`;

    try {
      const res = await axios.get(url);

      setLocateInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Input numerico controlado
  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(idLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(idLocationRandom());
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center items-center p-10 text-white">
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="search"
          name="id-location"
          value={idLocationValue}
          onChange={idLocationHandleChange}
          placeholder="1-126"
        />
        <input type="submit" value="Search" />
      </form>

      {locateInfo && <Location {...locateInfo} />}
      {locateInfo && <ResidentList residents={locateInfo.residents} />}
    </div>
  );
};

export default App;
