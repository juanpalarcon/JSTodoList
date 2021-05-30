document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const btn = document.getElementById("add");

  btn.onclick = function () {
    console.log("title", title.value);
    console.log("description", description.value);
  };
});
