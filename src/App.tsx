/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-12 19:24:09
 * @LastEditTime : 2022-01-20 17:31:41
 * @LastEditors  : chilam
 * @FilePath     : \weather\src\App.tsx
 */
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Weather, { CityProps, WeatherProps } from "./components/Weather";
import Container from "./layout/Container";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [city, setCity] = useState<CityProps>({
    // code: 200,
    location: [
      {
        name: "北京",
        id: "101010100",
        lat: 39.90498,
        lon: 116.40528,
        adm2: "北京",
        adm1: "北京市",
        country: "中国",
        tz: "Asia/Shanghai",
        utcOffset: "+08:00",
        isDst: 0,
        type: "city",
        rank: 10,
        fxLink: "http://hfx.link/2ax1",
      },
    ],
    // refer: null,
  });
  const [data, setData] = useState<WeatherProps>({
    code: 200,
    updateTime: "2020-06-30T22:00+08:00",
    fxLink: "http://hfx.link/2ax1",
    now: {
      obsTime: "2020-06-30T21:40+08:00",
      temp: 24,
      feelsLike: 26,
      text: "多云",
      wind360: 123,
      windDir: "东南风",
      windScale: 1,
      windSpeed: 3,
      humidity: 72,
      precip: 0.0,
      pressure: 1003,
      vis: 16,
      cloud: 10,
      dew: 21,
    },
    refer: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        }
      );

      await axios
        .get(`${process.env.REACT_APP_API_GEOURL}v2/city/lookup`, {
          params: {
            key: process.env.REACT_APP_API_KEY,
            location: `${lat},${long}`,
          },
        })
        .then((res) => {
          setCity(res.data.location[0]);
        });

      await axios
        .get(`${process.env.REACT_APP_API_DEVURL}/v7/weather/now`, {
          params: {
            key: process.env.REACT_APP_API_KEY,
            location: `${lat},${long}`,
          },
        })
        .then((res) => {
          setData(res.data);
        });
    };

    fetchData();
    // console.log(city);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <Container>
        <Weather props={data}/>
      </Container>
    </div>
  );
}

export default App;
