// const input = document.querySelector(".input");
// const eyeOpen = document.querySelector(".eye-open");
// const eyeColse = document.querySelector(".eye-close");
// eyeOpen.addEventListener("click", function () {
//   eyeOpen.classList.add("hidden")
//   eyeColse.classList.remove("hidden")
//   input.setAttribute("type", "password")
// });
// eyeColse.addEventListener("click", function () {
//     eyeOpen.classList.remove("hidden")
//     eyeColse.classList.add("hidden")
//     input.setAttribute("type", "text")
// });

function handleSubmit(event) {
    alert("Submit success")
    let elementName = document.getElementById('Name');
    let elementAge = document.getElementById('Age');
    let elementAddress = document.getElementById('Address')
    // let elementInputCheckBox = document.getElementById('input__checkbox');
    let objectUser = {
        name: elementName?.value,
        // createdAt: elementInputPassword?.value,
        avatar: "../img/nd.png",
        age: elementAge?.value,
        address: elementAddress?.value,
    }
     console.log(objectUser);
    postData(objectUser)
    return false;
}
function postData(user) {
    let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .then((res) => console.log(res))
        .catch((error) => {
            console.error("Error:", error);
        });
}

// var settings = {
//     rules: {
//       email: {
//         required: true,
//         minlength: 6,
//         maxlength: 12,
//         //rangelength: [6, 10]
//       },
//       password: {
//         required: true,
//         minlength: 6,
//         maxlength: 12,
//         // hoặc
//         // digits: true,
//         // range: [18, 60],
//         //step: 10 // step: x => so chia het cho x
//       },
//     },
//     messages: {
//         email: {
//           required: 'Please enter your email',
//         //   minlength: jQuery.validator.format('Toi thieu co {0} ky tu'),
//         // email: 'Dia chi email khong hop le',
//         },
//         password: {
//             required: 'Please enter your password',
//           },
//     },
// }

// var validator = $('#myForm').validate(settings);
window.onload = function () {
  getUser();
};

function getUser() {
  let id = getIdUrl();
  if (id) {
    let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/"
    fetch(url + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("Name").value = data.name
        document.getElementById("Age").value = data.age
        document.getElementById("Address").value = data.address
        document.getElementById("btn__submit").textContent = "Update"

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(id);
  }

}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}