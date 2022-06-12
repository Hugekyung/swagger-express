const swaggerAutogen = require("swagger-autogen")(
    { openapi: "3.0.0" },
    {
        language: "ko",
    },
);

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
    tags: [
        {
            name: "auth",
            description: "auth 경로 엔드포인트",
        },
        {
            name: "post",
            description: "post 경로 엔드포인트",
        },
    ],
    definitions: {
        Parents: {
            father: "Simon Doe",
            mother: "Marie Doe",
        },
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                $ref: "#/definitions/Parents",
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company",
                    },
                },
            ],
        },
        AddUser: {
            $username: "haechan",
            $password: "1234",
        },
    },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts", "./src/api/**/*.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
