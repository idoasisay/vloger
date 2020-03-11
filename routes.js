// Golbal
const HOME = "/"; //메인
const JOIN = "/join"; //유저
const LOGIN = "/login"; //유저
const LOGOUT = "/logout"; //유저
const SEARCH = "/search"; //비디오
//유저랑 비디오에 관한 것만 있기 때문에 컨트롤러도 두 개만 만들 것임.
//프로젝트에 있는 각 모델마다 컨트롤러를 만든다.
//컨트롤러는 어떤 일이 어떻게 일어나는지에 관한 로직이다.

//Users
const USERS = "/users";
const USER_DETAIL = "/:id";
//이걸 혼합하면 //user/1 이렇게 쓸 수 있게 됨. 이렇게 하면 나에게 1번 user를 주는 거임.
//익스프레스는 똑똑해서 이 값은 변하는 값이라는 것을 알아챔 : <=여거
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

//Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  me: ME
};

export default routes;
