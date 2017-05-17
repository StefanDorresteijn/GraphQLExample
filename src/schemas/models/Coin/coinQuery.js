/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import {
    GraphQLList,
} from 'graphql'
import rp from 'request-promise'
import Coin from './coinSchema'


const getData = function _getData() {
    const options = {
        url: 'https://api.coinmarketcap.com/v1/ticker/?limit=20',
        json: true,
    }
    return rp(options)
}

export default {
    coins: {
        type: new GraphQLList(Coin),
        resolve() {
            return getData()
        },
    },
}
