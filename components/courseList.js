const courseList = (data, slide) => {
  data.map(({ id, snippet }, i) => {
    if (i < 10) {
      let d = document.createElement("div");
      d.innerHTML = ` <div class="img-div"> <img
        src="${snippet.thumbnails.high.url}" alt=""></div>
    <h3>${snippet.title}</h3>
    <p>${snippet.channelTitle}</p>
    <h4>₹525 <span class="x3">₹3,499</span></h4>
    `;

      slide.append(d);
      d.addEventListener("click", () => {
        let obj = { name: id, data: snippet };
        localStorage.setItem("course", JSON.stringify(obj));
        location.href = "coursePage.html";
      });
    }
  });
};
export default courseList;
