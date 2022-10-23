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
