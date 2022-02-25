/*
 * @Description  : 定义数据接口
 * @Author       : ch1lam
 * @Date         : 2022-01-15 18:03:48
 * @LastEditTime : 2022-01-20 17:20:59
 * @LastEditors  : chilam
 * @FilePath     : \weather\src\types\dataStructure.ts
 */

/** 实时天气信息 */
export interface Now {
  obsTime: string;
  temp: number;
  feelsLike: number;
  text: string;
  wind360: number;
  windDir: string;
  windScale: number;
  windSpeed: number;
  humidity: number;
  precip: number;
  pressure: number;
  vis: number;
  cloud?: number | null;
  dew?: number | null;
}

export interface Refer {
  sources: string[];
  license: string[];
}

/** 城市信息 */
export interface Location {
  name: string;
  id: string;
  lat: number;
  lon: number;
  adm2: string;
  adm1: string;
  country: string;
  tz: string;
  utcOffset: string;
  isDst: number;
  type: string;
  rank: number;
  fxLink: string;
}
