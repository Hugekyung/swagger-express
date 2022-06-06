const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
    info: {
        title: "MY TEST API",
        description: "TEST API with Swagger-autogen",
    },
    host: "localhost:3030",
    schemes: ["http"],
    securityDefinitions: {
        // * JWT 토큰 설정을 위한 코드
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "JWT",
        },
    },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
