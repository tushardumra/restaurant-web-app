const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "Restaurant API",
      version: "1.0.0",
      description: "API documentation for Restaurant App",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // read routes for docs
};

const specs = swaggerJsDoc(options);

module.exports = specs;