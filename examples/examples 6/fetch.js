let url = "https://634e9e514af5fdff3a62367c.mockapi.io/user";
fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
  //   data?.map((user) => addRowJs(user));
  console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
