/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector(".main-video video");
const main_video_title = document.querySelector(".main-video .title");
const video_playlist = document.querySelector(".video-playlist .videos");

let data = [
  {
    id: "a1",
    title: "Tips",
    name: "vid1.mp4",
    duration: "6:32",
  },
  {
    id: "a2",
    title: "Vieny Hands",
    name: "vid2.mp4",
    duration: "5:01",
  },
  {
    id: "a3",
    title: "Shrink Stomach Fat",
    name: "vid3.mp4",
    duration: "10:35",
  },

  {
    id: "a4",
    title: "5 Mins morning workout",
    name: "vid4.mp4",
    duration: "5:26",
  },
  {
    id: "a5",
    title: "10 mins before bed workout",
    name: "vid5.mp4",
    duration: "10:55",
  },
  {
    id: "a6",
    title: "12 min beginner workout",
    name: "vid6.mp4",
    duration: "12:22",
  },
  {
    id: "a7",
    title: "Fitness",
    name: "vid7.mp4",
    duration: "27:26",
  },

  {
    id: "a8",
    title: "GYM",
    name: "vid8.mp4",
    duration: "10:30",
  },
  {
    id: "a9",
    title: "Muscels in 30 days",
    name: "vid9.mp4",
    duration: "4:56",
  },
  {
    id: "a10",
    title: "30 Mins live workout",
    name: "vid10.mp4",
    duration: "38:25",
  },
  {
    id: "a11",
    title: "Female workout",
    name: "vid11.mp4",
    duration: "8:29",
  },
  {
    id: "a12",
    title: "Excersise for women",
    name: "vid12.mp4",
    duration: "18:43",
  },
  {
    id: "a13",
    title: "Follow along Routine",
    name: "vid13.mp4",
    duration: "5:23",
  },
  {
    id: "a14",
    title: "5 Mins Full body",
    name: "vid14.mp4",
    duration: "17:29",
  },
  {
    id: "a15",
    title: "1 Week Workout",
    name: "vid15.mp4",
    duration: "8:24",
  },
  {
    id: "a16",
    title: "excersie for posture",
    name: "vid16.mp4",
    duration: "23:32",
  },
  {
    id: "a17",
    title: "Total body strength",
    name: "vid17.mp4",
    duration: "9:05",
  },
  {
    id: "a18",
    title: "Lose 5kgs in 1 week",
    name: "vid18.mp4",
    duration: "3:38",
  },
];

data.forEach((video, i) => {
  let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : "0" + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
  video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll(".video");
videos[0].classList.add("active");
videos[0].querySelector("img").src = "images/pause.svg";

videos.forEach((selected_video) => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove("active");
      all_videos.querySelector("img").src = "images/play.svg";
    }

    selected_video.classList.add("active");
    selected_video.querySelector("img").src = "images/pause.svg";

    let match_video = data.find(
      (video) => video.id == selected_video.dataset.id
    );
    main_video.src = "videos/" + match_video.name;
    main_video_title.innerHTML = match_video.title;
  };
});
