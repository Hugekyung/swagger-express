import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json";
// import YAML from "yamljs";
import express, { Request, Response } from "express";
import { authRouter } from "./api/auth/index.auth";
import { postRouter } from "./api/post/index.post";
// import path from "path";

const app = express();
// const swaggerSpec = YAML.load(path.join(__dirname, "../swagger/swagger.yaml"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// * api
app.get("/", (req: Request, res: Response) => {
    res.json({ status: 200, message: "Main Page!" });
});

app.listen(3030, () => {
    console.log("listening on port 3030");
});
