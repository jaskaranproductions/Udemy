const search = (q) => {
  let api = "AIzaSyAIKpVgXIrhmWyThxs3ZIcf4Q9NjLY-0Jg";

  const getData = async () => {
    let val = q + " course";
    console.log(val);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${val}&type=video&key=${api}&maxResults=20&part=snippet`
    );
    let data = await res.json();
    let array = data.items;
    localStorage.setItem("pData", JSON.stringify(array));
    location.href = "product.html";
  };
  getData();
};
export default search;
