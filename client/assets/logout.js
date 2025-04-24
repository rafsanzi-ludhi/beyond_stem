document.querySelector(".logout-btn").addEventListener("click", () => {
  console.log(123);
  localStorage.removeItem("token");
  window.location.assign("index.html");
});
