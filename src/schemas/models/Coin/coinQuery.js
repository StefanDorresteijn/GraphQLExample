/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import Coin from './coinSchema'
import rp from 'request-promise'
import {
	GraphQLList
} from 'graphql'


function getData() {
	const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20"
	return rp(url)
		.then(function(htmlString) {
			return new Promise(function(resolve, reject) {
				resolve(JSON.parse(htmlString))
			})
		})
}

export default {
	coins: {
		type: new GraphQLList(Coin),
		resolve() {
			return getData()
		}
	}
}