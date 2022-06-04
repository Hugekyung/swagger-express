import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * api
app.get("/", (req: Request, res: Response) => {
    res.json({ status: 200, message: "Main Page!" });
});

const userInfos = [];
app.post("/auth", (req: Request, res: Response) => {
    const userInfo = req.params;
    if (userInfos.find((elem) => elem.name === userInfo.username)) {
        console.log("username is already in use!");
    }

    userInfos.push(userInfo);
    res.json({ status: 201, message: "Create User Successfully!" });
});

app.get("/userList", (req: Request, res: Response) => {
    res.json({ status: 200, userInfos });
});

app.listen(3030, () => {
    console.log("listening on port 3030");
});
