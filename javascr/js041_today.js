let btn = document.querySelector("#btn");
btn.onclick = () => {
  let date = new Date();
  let Node = document.getElementsByTagName("p")[0];
  Node.innerHTML = date;
  document.date.submit();
};
