/*
 * @Description  : 请求接口封装
 * @Author       : ch1lam
 * @Date         : 2022-01-20 15:28:47
 * @LastEditTime : 2022-01-20 17:31:27
 * @LastEditors  : chilam
 * @FilePath     : \weather\src\common\Request.ts
 */
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface Repository {
  label: string;
  value: string;
}

/** 创建axios实例 */
const api = axios.create({});

type JsonData = {
  code: number;
  data: Repository[];
};

export type GetRequest = AxiosRequestConfig;

/** 定义返回类型 */
export interface Return<JsonData, Error>
  extends Pick<
    SWRResponse<AxiosResponse<JsonData>, AxiosError<Error>>,
    "isValidating" | "mutate" | "error"
  > {
  data: JsonData | undefined;
  response: AxiosResponse<JsonData> | undefined;
  requestKey: string;
}

export interface Config<JsonData = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<JsonData>, AxiosError<Error>>,
    "initialData"
  > {
  initialData?: JsonData;
}

/** useRequest 封装swr的请求hooks函数 */
export default function useRequest<Error = unknown>(
  request: GetRequest,
  { initialData, ...config }: Config<JsonData, Error> = {}
): Return<JsonData, Error> {
  //如果是开发模式，这里做环境判断，url后面加上".mock"就会走mock数据
  if (process.env.NODE_ENV === "development") {
    request.url += ".mock";
  }

  const requestKey = request && JSON.stringify(request);

  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<JsonData>, AxiosError<Error>>(
    requestKey,
    () => api(request),
    { ...config,12312312313 }
  );

  return {
    data: response?.data,
    requestKey,
    response,
    error,
    isValidating,
    mutate,
  };
}
