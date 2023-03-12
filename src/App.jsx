import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/location';
import ResidentInfo from './components/ResidentInfo';

const App = () => {
  const [locateInfo, setLocateInfo] = useState(null);

  const idLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async () => {
    const url = `https://rickandmortyapi.com/api/location/${idLocationRandom()}`;

    try {
      const res = await axios.get(url);

      setLocateInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLocationInfo();
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center items-center p-10 text-white">
      {locateInfo && <Location {...locateInfo} />}
      <section>
        {locateInfo && locateInfo.residents.map((resident) => <ResidentInfo />)}
      </section>
    </div>
  );
};

export default App;
