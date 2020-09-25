import request from '../untils/request'

/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
/* eslint-enable */

export async function getHomeData(){
    return request.get(`${host}/xhr/index/index.json`);
}