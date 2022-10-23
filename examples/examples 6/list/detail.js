window.onload = function () {
    getUser();
};

function getUser() {
    let id = getIdUrl();
    let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/";
    fetch(url + id, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
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
      <img src = "${user?.avatar}" style="border-radius: 50%; width: 230px">
      <p>No : ${user?.id}</p>
      <p>Name : ${user?.name}</p>
      <p>Create : ${user?.createdAt}</p>
    `;
    const elm = document.getElementById("info");
    elm.innerHTML = contentHTML;
}