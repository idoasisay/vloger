import routes from "./routes";
//전역변수 선언이죠
export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = "Vloger";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
