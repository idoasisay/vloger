import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { videos });
  } catch (error) {
    console.log(error);
    res.render("home", { videos: [] });
  }
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "영상 정보 | " });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "영상 수정하기 | " });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "영상 삭제하기 | " });
