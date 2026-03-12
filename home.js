// add money section
document
  .getElementById("Add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //dataBase information
    const userAccountNumber = "01776433215";
    const pass = "anik";

    // get the balance
    const balance = parseInt(
      document.getElementById("total-balance").innerText,
    );
    // get the input info
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const password = document.getElementById("pass-word").value;

    if (accountNumber === userAccountNumber && password === pass) {
      document.getElementById("total-balance").innerText = balance + amount;
      alert("Add Money successful");
    } else {
      alert("Invalid Information!");
    }
  });

// withdraw out section
document.getElementById("w-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //dataBase information
  const userAccountNumber = "01776433215";
  const pass = "anik";

  //collect the information from the user
  const amount = parseInt(document.getElementById("cash-out-amount").value);
  const password = document.getElementById("pin-number").value;

 if(password===pass){
    document.getElementById("total-balance").innerText-=amount;
    alert('Cash out is Done!');
 }else{
    alert("Invalid credential!");
 }

});

//   toggleing feature

document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "block";
    document.getElementById("cash-out").style.display = "none";
  });
document.getElementById("cash-out-card").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
});
