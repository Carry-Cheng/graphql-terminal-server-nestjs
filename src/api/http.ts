/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http')
const qs = require('querystring')
import { RequestOptions, IncomingMessage } from 'http'
import { ParsedUrlQueryInput } from 'querystring'

const postOptions: RequestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}

const getOptions: RequestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}


export const POST = (url: string | URL, params: ParsedUrlQueryInput): Promise<any> => {
    return new Promise((resolve, reject) => {
        const HTTP = http.request(url, postOptions, (res: IncomingMessage) => {
            let data = ''
            res.setEncoding('utf8')
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                // console.info('POST BODY: ' + data)
                resolve(JSON.parse(data))
            })
        })
        
        HTTP.on('error', (error: Error) => {
            console.info('problem with request: ' + error.message)
            reject(error)
        })
        
        HTTP.write(qs.stringify(params))
        
        HTTP.end()
    })
}

export const GET = (url: string | URL, params: ParsedUrlQueryInput): Promise<any> => {
    return new Promise((resolve, reject) => {
        const _url = `${url}?${qs.stringify(params)}`
        const HTTP = http.request(_url, getOptions, (res: IncomingMessage) => {
            let data = ''
            res.setEncoding('utf8')
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                // console.info('GET BODY: ' + data)
                resolve(JSON.parse(data))
            })
        })
        
        HTTP.on('error', (error: Error) => {
            console.info('problem with request: ' + error.message)
            reject(error)
        })
        
        HTTP.end()
    })
}
