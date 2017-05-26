/**
 * Created by stefandorresteijn on 26/05/2017.
 */

import authentication from './authentication'
import graphql from './graphql'

export default function (app) {
    authentication(app)
    graphql(app)
}
