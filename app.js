//express를 선언해 주고
import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// for core-js v3:
import "core-js";
//default로 export를 하지 않으면 괄호를 써야 함. 그녀석만..
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

//express 실행한 걸 변수 app에 담았음
const app = express();

//pug 세팅. pug는 express의 템플릿이다.
app.set('view engine', "pug");
//미들웨어를 추가함
//쿠키를 전달받아서 사용할수 있도록 만들어줌
app.use(cookieParser());
//사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어. body를 검사해서 파싱해 줌
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//정보 보안
app.use(helmet());
//모든 일들을 로깅함
app.use(morgan("dev"));

//누군가 user에 들어왔다면, 이 라우터 전체를 사용하겠다는 의미.
//메인을 다룰 글로벌 라우터도 필요함. 조인, 로그인, 서치, 어바웃페이지, 검색, 홈 등..
//이 방법이 유일하게 독점적으로 URL을 다루는 방식이다.
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
//누군가 내 파일을 불러올 때 app object를 주겠다는 의미임