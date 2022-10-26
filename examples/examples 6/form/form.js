const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeColse = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden")
  eyeColse.classList.remove("hidden")
  input.setAttribute("type", "password")
});
eyeColse.addEventListener("click", function () {
    eyeOpen.classList.remove("hidden")
    eyeColse.classList.add("hidden")
    input.setAttribute("type", "text")
});

// function handleReset() {
//     let elementInputEmail = document.getElementById('input__email');
//     let elementInputPassword = document.getElementById('input__password');
//     let elementInputCheckBox = document.getElementById('input__checkbox');
//     if (elementInputEmail) {
//         elementInputEmail.value = '';
//     }
//     if (elementInputCheckBox) {
//         elementInputCheckBox.checked = false;
//     }
// }

function handleSubmit(event) {
    alert("Submit success")
    let elementInputEmail = document.
    getElementById('input__email');
    // let elementInputPassword = document.getElementById('input__password');
    // let elementInputCheckBox = document.getElementById('input__checkbox');
    let objectUser = {
        name: elementInputEmail?.value,
        // createdAt: elementInputPassword?.value,
        avatar:"https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/277108448_132485565988585_62266165370526473_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d9EVZTmPEnAAX-zZK5T&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-knHFcxMx1FJViTto8baZM7KIpnnWgH9LDCPxOnnkasg&oe=63584DD1",
        age:"22"
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

var settings = {
    rules: {
      email: {
        required: true,
        minlength: 6,
        maxlength: 12,
        //rangelength: [6, 10]
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 12,
        // hoặc
        // digits: true,
        // range: [18, 60],
        //step: 10 // step: x => so chia het cho x
      },
    },
    messages: {
        email: {
          required: 'Please enter your email',
        //   minlength: jQuery.validator.format('Toi thieu co {0} ky tu'),
        email: 'Dia chi email khong hop le',
        },
        password: {
            required: 'Please enter your password',
          },
    },
}

var validator = $('#myForm').validate(settings);
