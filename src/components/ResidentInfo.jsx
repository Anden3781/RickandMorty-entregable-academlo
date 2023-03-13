import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      // Peticion de la informacion del residente a travez de una prop
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    // renderizado condicional cada vez que residentInfo exista, renderiza.
    <>
      {residentInfo && (
        <article>
          <div>
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>
          <h3>{residentInfo.name}</h3>
          <ul>
            <li>
              <span>specie:</span>
              {residentInfo.species}
            </li>
            <li>
              <span>Status</span>
              {residentInfo.status}
            </li>
            <li>
              <span>Origen</span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>Appearances in episodes:</span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
