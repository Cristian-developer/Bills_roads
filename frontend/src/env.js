
export const ACCESS_TOKEN_LIFETIME = process.env.ACCESS_TOKEN_LIFETIME || 4
export const BACK_INTERNAL_PORT = process.env.BACK_INTERNAL_PORT || 8000
export const BACK_HOST = process.env.BACK_HOST || '10.5.0.6'
export const API_BASE_URL = `https://${PRE_API_BASE_URL}:${BACK_INTERNAL_PORT}/`
console.log(process.env.API_BASE_URL || 'not working-----', process.env, 'aurl')
console.log(process.env.BACKEND_SERVER || 'empty damn u')