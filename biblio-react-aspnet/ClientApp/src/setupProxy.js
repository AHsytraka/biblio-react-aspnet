const { createProxyMiddleware } = require('http-proxy-middleware');
// const { env } = require('process');


// const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
//   env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:3181';

// const context =  [
//   "/weatherforecast",
// ];

module.exports = function(app) {
  // const appProxy = createProxyMiddleware(context, {
  //   target: target,
  //   secure: false,
  //   headers: {
  //     Connection: 'Keep-Alive',
  //   }
  // });
  //  app.use(appProxy);

   app.use(
    createProxyMiddleware("/api/Authentification/AddAuth", {
        target: "https://localhost:7271",
        changeOrigin:true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
        'Content-Type':'application/json'
    })
   );

   const cors = require('cors');
   app.use(cors());
  };