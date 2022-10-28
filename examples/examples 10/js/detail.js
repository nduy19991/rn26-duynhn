window.onload = function () {
  getUser();
};

function getUser() {
  let id = getIdUrl();
  let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/"
  fetch(url + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);

}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
      <div style="width: 50%; margin: auto"><img src = "${user?.avatar}" style="border-radius: 50%; width: 100%;"></div>
      <p style="margin-top: 20px;">No : ${user?.id}</p>
      <p>Age : ${user?.age}</p>
      <p>Name : ${user?.name}</p>
      <p>Address : ${user?.address}</p>
      <button class="dt" style="border-radius: 5px; background-color: aquamarine;  border: 1px;" onclick = "gotoUpdate(${user?.id})">Update</button>
    `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}

function gotoUpdate(id) {
  console.log(window.location.href, id);
  window.location.href = "../html/form.html?id=" + id;
}