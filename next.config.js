module.exports = {
    serverRuntimeConfig: {
        secret: 'SaokoMamiSaoko'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://wallet-khaki.vercel.app/api' // production api
    }
}
