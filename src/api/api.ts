import request from "../utils/request";

const BASE_URL = "https://tcb-api.tencentcloudapi.com/"; // 测试

type IData = {
  [index: string]: string
}
type IParams = {
  data?: IData,
  method?: string
}
/**
 * @version 1.0.0
 * @description
 * 对于若干在多个模块使用的api，请根据api后的注释及path参数判断使用
 */
/**
 *
 * @param {obj} params - 请求参数，参考wx.request()
 * @param {string} path - api路径
 * @returns {obj} res
 */
const httpClient = async (params: IParams = {}, path, id?): Promise<any> => {
  let url = "";
  if (id) {
    path = path.replace(/:id/, id);
  } else {
    path = path.replace(/:id/, "");
  }
  url = `${BASE_URL}${path}`;
  const { data, method } = params;
  return request({
    url,
    method: method || "GET",
    data
  });
};

// login
export const LOGIN_URL = `${BASE_URL}v1/session`;
export const appLogin = params => httpClient(params, "v1/session"); // post登录 delete注销
export const updateBannerApi = (params, id) =>
  httpClient(params, "v1/banner/:id", id);

