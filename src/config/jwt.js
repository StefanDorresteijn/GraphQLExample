import { ExtractJwt } from 'passport-jwt'

export default {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'secretOrKey',
}
