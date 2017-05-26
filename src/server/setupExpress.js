/**
 * Created by stefandorresteijn on 26/05/2017.
 */
import passport from 'passport'
import bodyParser from 'body-parser'
import session from 'express-session'
import uuid from 'node-uuid'


export default function (app) {
    // passport's session piggy-backs on express-session
    app.use(session({
        genid() {
            return uuid.v4()
        },
        secret: 'Z3]GJW!?9uP”/Kpe',
    }))
    app.use(passport.initialize())
    app.use(passport.session())

    /**
     * GraphQL has some issues working when we use Bodyparser urlencoded
     * So we only use it for non-graphql routes
     */

    app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }))
    app.use(/\/((?!graphql).)*/, bodyParser.json())
}
