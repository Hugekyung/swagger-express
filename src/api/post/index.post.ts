import { Router } from "express";

export const postRouter = Router();

postRouter.get("/", (req, res) => {
    /* #swagger.tags = ["post"]
       #swagger.description = "포스트 메인페이지 엔드포인트" */
    res.json({ message: "포스트 메인 페이지입니다." });
});

postRouter.post("/register", (req, res) => {
    /* #swagger.tags = ["post"]
       #swagger.description = "포스트 등록용 엔드포인트" */
    res.json({ message: "포스트가 등록되었습니다." });
});
