getListUsers();
// addRowJs();

function getListUsers() {
  let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user));
      // console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function formatRow(user) {
  return `
     <th>${user?.id}</th>
     <td>${user?.name}</td>
     <td>${user?.createdAt}</td>
     <td>${user?.age}</td>
     <td><button class="dt" onclick = "gotoDetail(${user?.id})">Detail</button></td>
     <td><button class="dl" onclick = "deleteRowAPI(this,${user?.id})">Delete</button></td>
`;
}

function addRowJs(user) {
  // console.log(user);
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];
  var newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = formatRow(user);
}

function gotoDetail(id) {
  console.log(window.location.href, id);
  window.location.href = "./detail.html?id=" + id;
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

// function resetTbody() {
//   var tableRef = document
//     .getElementById("table_users")
//     .getElementsByTagName("tbody")[0];
//   tableRef.innerHTML = "";
// }

function deleteRowAPI(elm, id) {
  // console.log("deleteRowAPI", id);
  let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/";
  fetch(url + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteRowJs(elm);
      // resetTbody();
      // getListUsers();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

console.log(1)
$.get("../ifame/head.html", function(data, status){
    console.log(2)
    // alert("Data: " + data + "\nStatus: " + status);
    document.querySelector("headr").innerHTML = data;
    console.log(3)
  });

  if (typeof document === "undefined") {
    // during server evaluation
    console.log("Server loadding...!!!!");
    $.get("header.html", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  } else {
    // during client's browser evaluation
    const collection = document.getElementsByClassName("item");
    // console.log(collection);
    // console.log(window.location.href);
    $.get("../ifame/head.html", function(data, status){
      console.log(2)
     
      document.querySelector("header").innerHTML = data;
      console.log(3)
    });
  }

  if (typeof document === "undefined") {
    // during server evaluation
    console.log("Server loadding...!!!!");
  } else {
    //ajax
    $.get("../ifame/head.html", function (data, status) {
      // alert("Data: " + data + "\nStatus: " + status);
      document.querySelector("header").innerHTML = data;
      checkPath() // xu ly bat dong bo
    });
  
    // $.get("./footer.html", function (data, status) {
    //   // alert("Data: " + data + "\nStatus: " + status);
    //   document.querySelector("footer").innerHTML = data;
    // });
  
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