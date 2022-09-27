let btn = document.getElementsByTagName("button")[0];
btn.onclick = () => {
  let Node = document.getElementsByTagName("p")[0];
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinute();
  let second = today.getSecond();

  Node.innerText = `${year}-${month}-${date}-${hour}-${minute}-${second}`;
};
