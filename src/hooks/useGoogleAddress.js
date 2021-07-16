import axios from 'axios';
import { useEffect, useState } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBNzvSUqCpYmSKepQqxF4qae__Q9mGO9Mc`;
  //   const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC-QHZQ26xXGxYEeuVjHVRQlwyUOA8GgnQ`;
  useEffect(async () => {
    const response = await axios(API);
    console.log(response.data.results[0].geometry.location);
    setMap(response?.data?.results[0]?.geometry?.location);
  }, []);
  return map;
};

export default useGoogleAddress;
