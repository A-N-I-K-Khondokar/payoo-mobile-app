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
function toggleWithId(cardId, sectionClass, sectionId) {
  document.getElementById(cardId).addEventListener('click', function (e) {
    // Hide all sections with the given class
    e.preventDefault()
    const sections = document.getElementsByClassName(sectionClass);
    for (const section of sections) {
      section.style.display = 'none';
    }

    const common2=document.getElementsByClassName('common2');
    for(const common of common2){
      common.classList.remove("border-green-500", "border-2");
    }

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
    document.getElementById(cardId).classList.add("border-green-500", "border-2");
  });
}

toggleWithId('add-money-card', 'common', 'add-money');
toggleWithId('cash-out-card', 'common', 'cash-out');
toggleWithId("transfer-card",'common','transfer-money');
toggleWithId("bonus-card",'common','get-bonus');
toggleWithId("payBill-card", "common", "pay-bill");


// document
//   .getElementById("add-money-card")
//   .addEventListener("click", function () {
//     document.getElementById("add-money").style.display = "block";
//     document.getElementById("cash-out").style.display = "none";
//   });
// document.getElementById("cash-out-card").addEventListener("click", function () {
//   document.getElementById("add-money").style.display = "none";
//   document.getElementById("cash-out").style.display = "block";
// });
