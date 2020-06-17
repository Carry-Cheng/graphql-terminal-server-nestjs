
import { POST, GET } from './http'

const baseUrl = 'http://172.16.3.81:30018/terminweb-web'

const GET_SECRET_KEY = `${baseUrl}/manager/terminweb/basic/findById`
const GET_ALL_CONFIG = `${baseUrl}/termin/SouthBusinessConfig/queryList`

/**
 * 获取私钥
 */
export const getSecretKey = (): Promise<any> => {
    return GET(GET_SECRET_KEY, {})
}

/**
 * 获取所有配置信息
 */
export const getAllConfig = (): Promise<any> => {
    return POST(GET_ALL_CONFIG, {})
}
