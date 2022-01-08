import jwt from 'jsonwebtoken';

function jwtTokens({user_id, username, user_email}) {
    const user = {user_id, username, user_email};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s'}); //At least 15 minutes tho. in real life
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m'}); // At least 14days in real life

    return ({accessToken, refreshToken})
}

export default jwtTokens;