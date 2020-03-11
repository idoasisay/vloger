import multer from "multer";
import routes from "./routes";
//전역변수 선언이죠

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = "Vloger";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideoMiddleWare = multerVideo.single("videoFile");
export const uploadAvatarMiddleWare = multerAvatar.single("avatar");
