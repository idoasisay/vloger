import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입 | " });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, repassword }
  } = req;
  if (password !== repassword) {
    res.status(400);
    res.render("join", { pageTitle: "회원가입 | " });
  } else {
    // To Do: 사용자 등록
    // To Do: 사용자 로그인
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "로그인 | " });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //프로세스 로그아웃
  res.redirect(routes.home);
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "프로필 수정 | " });
export const usersDetail = (req, res) =>
  res.render("usersDetail", { pageTitle: "유저 정보 | " });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "비밀번호 변경 | " });
