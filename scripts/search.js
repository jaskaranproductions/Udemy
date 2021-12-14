let search = [
  "2D Game Development",
  "3D Game Development",
  "Android Development",
  "Angular",
  "C Language",
  "C#",
  "C++",
  "CSS",
  "Dart Laguage",
  "Data Analysis",
  "Data Science",
  "Database Design & Development",
  "Deep Learning",
  "Development",
  "Django",
  "Game Development",
  "Game Devolopment Fundamentals",
  "Go Language",
  "Google Flutter",
  "HTML5",
  "Java",
  "JavaScript",
  "Kotlin",
  "Machine Learning",
  "Mobile Development",
  "Mobile Game Development",
  "Neural Networks",
  "Node.Js",
  "PHP",
  "Programming Laguage",
  "Python",
  "R laguage",
  "React",
  "React Native",
  "Spring Framework",
  "Statistics",
  "Swift",
  "SwiftUI",
  "Unity",
  "Unreal Engine Blueprints",
  "Web Development",
  "iOS Development",
  "Swift",
  "SwiftUI",
  "Unity",
  "Unreal Engine Blueprints",
  "Web Development",
  "iOS Development",
];
// search.sort();
console.log(search);

// function removeDuplicates(arr, n) {
//   if (n == 0 || n == 1) return n;
//   var temp = new Array(n);
//   var j = 0;
//   for (var i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp[j++] = arr[i];
//   temp[j++] = arr[n - 1];
//   for (var i = 0; i < j; i++) arr[i] = temp[i];
//   return j;
// }
// removeDuplicates(search, search.length);
// console.log(search);
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    document.querySelector(".autocomplete").innerHTML = "";
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        console.log(arr[i]);

        b = document.createElement("DIV");
        b.classList.add("suggestions");
        b.innerHTML = `<img class="icon res-icon" width="10px" src="assets/search.png" alt=""><strong>${arr[
          i
        ].substr(0, val.length)}</strong>`;
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += `<input type='hidden' value="${arr[i]}">`;
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        document.querySelector(".autocomplete").append(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
console.log(document.getElementById("search"));
autocomplete(document.getElementById("search"), search);
