/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLFloat
} from 'graphql'

const Coin = new GraphQLObjectType({
	name: 'coin',
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		symbol: {type: GraphQLString },
		rank: {
			type: GraphQLFloat,
			description: "Rank on latest top 40 in a small village in Argentina",
			resolve: (coin) => Number(coin['rank'])
		},
		price_usd: {
			type: GraphQLFloat,
			description: "The price in USD",
			resolve: (coin) => Number(coin['price_usd'])
		},
		price_btc: {
			type: GraphQLFloat,
			description: "The price in BTC",
			resolve: (coin) => Number(coin['price_btc'])
		},
		volume_usd_24: {
			type: GraphQLFloat,
			description: "The volume of the last 24 hours in USD",
			resolve: (coin) => Number(coin['24h_volume_usd']),
		},
		market_cap_usd: {
			type: GraphQLFloat,
			description: "The market cap in USD",
			resolve: (coin) => Number(coin['market_cap_usd'])
		},
		available_supply: {
			type: GraphQLFloat,
			description: "The available supply",
			resolve: (coin) => Number(coin['available_supply'])
		},
		total_supply: {
			type: GraphQLFloat,
			description: "The total supply",
			resolve: (coin) => Number(coin['total_supply'])
		},
		percent_change_1h: {
			type: GraphQLFloat,
			description: "Percentage of change in the last hour",
			resolve: (coin) => Number(coin['percent_change_1h'])
		},
		percent_change_24h: {
			type: GraphQLFloat,
			description: "Percentage of change in the last 24 hours",
			resolve: (coin) => Number(coin['percent_change_24h'])
		},
		percent_change_7d: {
			type: GraphQLFloat,
			description: "Percentage of change in the last 7 days",
			resolve: (coin) => Number(coin['percent_change_7d'])
		},
		last_updated: {
			type: GraphQLFloat,
			description: "When this data was last update",
			resolve: (coin) => Number(coin['last_updated'])
		}
	}
})

export default Coin;