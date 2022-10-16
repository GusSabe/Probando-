const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};

const list = document.querySelectorAll(".list");

function activarLink() {
  list.forEach((item) => item.classList.remove("active"));
  classList.add("active");
}
