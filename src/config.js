export const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://amateurs-api.herokuapp.com'
    : 'http://localhost:8001'