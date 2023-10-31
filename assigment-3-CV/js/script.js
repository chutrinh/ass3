//Ẩn hiện thanh thông tin và điền email
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // console.log(typeof emailValue);
  const errorEmail = document.getElementById("error-email");
  const submitEmailButton = document.querySelector(".submit-email");
  const regexMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // console.log("email: " + emailValue);
  const checkMail = emailValue.match(regexMail); //return object
  console.log(typeof checkMail);
  const info = document.querySelector("#personal-info .info");
  // console.log(info);
  if (checkMail) {
    info.style.display = "block";
    submitEmailButton.style.display = "none";
    errorEmail.style.display = "";
  } else {
    errorEmail.innerHTML = "Invalid email, please try again!!!";
  }
}

function handlerOnMouseOver(element) {
  const view_more = element.querySelector(".control-view");
  view_more.style.display = "inline-block";
}

function handlerOnMouseOut(element) {
  const view_more = element.querySelector(".control-view");
  if (!view_more.classList.value.includes("less"))
    view_more.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const view_more = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".section-content");

  if (view_more.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    view_more.classList.remove("view-more");
    view_more.classList.add("less");
    view_more.innerHTML = "See less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    view_more.classList.remove("less");
    view_more.classList.add("view-more");
    view_more.innerHTML = "View more";
  }
}
