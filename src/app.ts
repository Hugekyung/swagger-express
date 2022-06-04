import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json";
// import YAML from "yamljs";
import express, { Request, Response } from "express";
import { UserInfo } from "./dto/user.dto";
import path from "path";

const app = express();
// const swaggerSpec = YAML.load(path.join(__dirname, "../swagger/swagger.yaml"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// * api
app.get("/", (req: Request, res: Response) => {
    res.json({ status: 200, message: "Main Page!" });
});

const userInfos: UserInfo[] = [];
app.post("/auth", (req: Request, res: Response) => {
    const { username, password } = req.params;
    if (userInfos.find((elem) => elem.username === username)) {
        console.log("username is already in use!");
    }

    userInfos.push({ username, password });
    res.json({ status: 201, message: "Create User Successfully!" });
});

app.get("/userList", (req: Request, res: Response) => {
    res.json({ status: 200, userInfos });
});

app.listen(3030, () => {
    console.log("listening on port 3030");
});
