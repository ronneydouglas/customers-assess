// 1. Fetch your users data

fetch("https://randomuser.me/api/?results=12.json")


// 2. Loop over the data
.then(function(response) {
  console.log(response);
      if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("Here is the data:", data);
        cust(data);
        });
  });


// 3. Display it in the `.customers` element

function cust(data) {
    var field_1 = document.querySelector("#name");
    var field_2 = document.querySelector("#email");
    name.innerHTML = data.results.name;
    email.innerHTML = data.results.email;
  };
