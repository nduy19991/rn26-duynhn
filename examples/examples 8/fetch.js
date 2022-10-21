getListUsers();
// addRowJs();



function getListUsers() {
    let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users"
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
     <td>Male</td>
     <td><button class="dt" onclick = "gotoDetail()">Detail</button></td>
     <td><button class="dl" onclick = "deleteRowJs()">Delete</button></td>
`
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
    console.log(id);
}

function deleteRowJs(elm) {
    let elmRow = elm.parentElement.parentElement;
    console.log(elmRow);
    elmRow.remove();
    document.getElementById("table_users").deleteRow(index);
}

function postUser() {
    const data = {
        name: "Duynhn",
        avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((res) => console.log(res))
        .catch((error) => {
            console.error("Error:", error);
        });
}
