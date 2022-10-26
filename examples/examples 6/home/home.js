// console.log(1)
$.get("../ifame/head.html", function (data, status) {
  // console.log(2)
  // alert("Data: " + data + "\nStatus: " + status);
  document.querySelector("header").innerHTML = data;
  // console.log(3)
});

if (typeof document === "undefined") {
  // during server evaluation
  console.log("Server loadding...!!!!");
} else {
  // ajax
  $.get("../ifame/head.html", function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    document.querySelector("header").innerHTML = data;
    checkPath()
  });
}

function checkPath() {
  const PATH_NAME = window.location.href;
  console.log('HREF', PATH_NAME);

  let js = document.querySelectorAll('a')
  let listItemNav = $('a') 
  for (let index = 0; index < listItemNav.length; index++) {
    const element = listItemNav[index];
    if (PATH_NAME === element.href) {
      $(element).addClass( "active bar" );
    }
  }
  
}