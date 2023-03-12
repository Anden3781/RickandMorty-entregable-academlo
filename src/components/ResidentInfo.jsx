import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get();
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  return <div>ResidentInfo</div>;
};

export default ResidentInfo;
