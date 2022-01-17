/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-13 00:58:24
 * @LastEditTime : 2022-01-17 22:39:43
 * @LastEditors  : chilam
 * @FilePath     : \weather\src\components\Weather\index.tsx
 */
import React from "react";
import { Now, Refer } from "../../types/dataStructure";

export interface WeatherProps {
  code: number;
  updateTime: string;
  fxLink: string;
  now: Now;
  refer?: Refer | null;
}

const Weather = (props: WeatherProps) => {
  return (
    <div>
      <h1 className="text-7xl text-white">{props.now.temp}℃</h1>
      <span className="text-2xl text-white">
        体感温度:{props.now.feelsLike}℃
      </span>
      <div className="hidden">
        <ul>
          <li>数据观测时间: {props.now.obsTime}</li>
          <li>温度: {props.now.temp}℃</li>
          <li>体感温度: {props.now.feelsLike}℃</li>
          <li>天气状况: {props.now.text}</li>
          <li>风向角度: {props.now.wind360}</li>
          <li>风向: {props.now.windDir}</li>
          <li>风力等级: {props.now.windScale}</li>
          <li>风速: {props.now.windSpeed}km/h</li>
          <li>相对湿度: {props.now.humidity}</li>
          <li>当前小时累计降水量: {props.now.precip}</li>
          <li>大气压强: {props.now.pressure}hPa</li>
          <li>能见度: {props.now.vis}km</li>
        </ul>
      </div>
    </div>
  );
};
export default Weather;
