const mapProducts = () => {
  let prod = document.querySelector(".right-products");
  let data = JSON.parse(localStorage.getItem("pData"));
  data.map(({ id, snippet }, i) => {
    if (i > 9) {
      let div = document.createElement("div");
      let leftDiv = document.createElement("div");
      leftDiv.classList.add("left-prod");
      let imgDiv = document.createElement("div");
      imgDiv.classList.add("prod-img-div");
      let img = document.createElement("img");
      img.src = snippet.thumbnails.high.url;
      imgDiv.append(img);
      let txtDiv = document.createElement("div");
      txtDiv.classList.add("prod-txt-div")
      let h3 = document.createElement("h3");
      h3.textContent = snippet.title.split("|")[0];
      let p = document.createElement("p");
      p.textContent = snippet.description;
      let span = document.createElement("span");
      span.classList.add("prod-ch-name")
      span.textContent = snippet.channelTitle;
      let span2 = document.createElement("span");
      span2.classList.add("vid-detail")
      let time = Math.floor(Math.random() * (90 - 10) + 10);
      let lec = Math.floor(Math.random() * (900 - 100) + 100);
      let level = ["All Levels", "Beginner", "Intermediate", "Expert"];
      let l = Math.floor(Math.random() * 2);
      span2.innerHTML = `${time} total hours <div></div> ${lec} lectures <div></div> ${level[l]}`;
      txtDiv.append(h3, p, span, span2);
      leftDiv.append(imgDiv, txtDiv);
      let rightDiv = document.createElement("div");
      let price = document.createElement("p");
      price.textContent = "₹525";
      let cutPrice = document.createElement("span");
      cutPrice.textContent = "₹3,499";
      rightDiv.append(price, cutPrice);
      rightDiv.classList.add("price-sec")
      div.append(leftDiv, rightDiv);
      prod.append(div);
    }
  });
};
mapProducts();
