/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import {
    GraphQLList,
} from 'graphql'
import rp from 'request-promise'
import Coin from './coinSchema'


const getData = function _getData() {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'
    return rp(url)
        .then(htmlString => new Promise((resolve) => {
            resolve(JSON.parse(htmlString))
        }))
}

export default {
    coins: {
        type: new GraphQLList(Coin),
        resolve() {
            return getData()
        },
    },
}
