import { Router } from "express";
import { UserInfo } from "../../dto/user.dto";

export const authRouter = Router();

authRouter.get("/", (req, res) => {
    /* #swagger.tags = ["auth"]
       #swagger.description = "유저 메인페이지 엔드포인트" */
    res.json({ message: "유저의 메인페이지입니다." });
});

const userInfos: UserInfo[] = [];
authRouter.post("/sign-in", (req, res) => {
    /*  #swagger.tags = ["auth"]
        #swagger.description = "유저 회원가입 엔드포인트" 
        #swagger.parameters['obj'] = {
            in: 'body',
            description: '유저 정보',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
        }    
        #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/User" },
        description: "회원가입에 성공했습니다!" } */
    const { username, password } = req.body;
    if (userInfos.find((elem) => elem.username === username)) {
        console.log("username is already in use!");
    }

    userInfos.push({ username, password });
    res.json({ status: 201, message: "Create User Successfully!" });
});

authRouter.get("/userList", (req, res) => {
    /* #swagger.tags = ["auth"]
       #swagger.description = "유저 리스트 조회 엔드포인트" */
    res.json({ status: 200, userInfos });
});
