window.onload = function () {
  var form = document.querySelector('form[action="#"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // to prevent the form from submitting normally

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // here you can use the variables name, email, and message
    // for example, you can validate the inputs or send them to a server
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // after processing the form you can reset it
    form.reset();

    // refresh the page
    location.reload();
  });
};

window.addEventListener("scroll", function () {
  var isNavbarTogglerCollapsed = document
    .querySelector(".navbar-toggler")
    .getAttribute("aria-expanded");

  if (isNavbarTogglerCollapsed === "true") {
    document.querySelector(".navbar-toggler").click();
  }
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};
