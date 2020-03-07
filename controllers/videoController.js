import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { videos });
};

export const search = (req, res) => {
  // 구시대 방식 const searchingBy = req.query.term;
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "찾기 | ", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "업로드하기 | " });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //업로드하고 비디오 저장
  res.redirect(routes.videoDetail(332234342));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "영상 정보 | " });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "영상 수정하기 | " });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "영상 삭제하기 | " });
