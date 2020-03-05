// for core-js v3:
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import "core-js";
//default로 export를 하지 않으면 괄호를 써야 함. 그녀석만..
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

//누군가 user에 들어왔다면, 이 라우터 전체를 사용하겠다는 의미.
//메인을 다룰 글로벌 라우터도 필요함. 조인, 로그인, 서치, 어바웃페이지, 검색, 홈 등..
//이 방법이 유일하게 독점적으로 URL을 다루는 방식이다.
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
//누군가 내 파일을 불러올 때 app object를 주겠다는 의미임