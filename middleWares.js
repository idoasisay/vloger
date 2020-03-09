import multer from "multer";
import routes from "./routes";
//전역변수 선언이죠

const multerVideo = multer({ dest: "uploads/videos" });

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = "Vloger";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideoMiddleWare = multerVideo.single("videoFile");
