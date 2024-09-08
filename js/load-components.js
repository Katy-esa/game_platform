document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header/header-layout.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
      const headerStyles = document.createElement("link");
      headerStyles.rel = "stylesheet";
      headerStyles.href = "/components/header/header-styles.css";
      document.head.appendChild(headerStyles);
    });

  fetch("/components/footer/footer-layout.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
      const footerStyles = document.createElement("link");
      footerStyles.rel = "stylesheet";
      footerStyles.href = "/components/footer/footer-styles.css";
      document.head.appendChild(footerStyles);
    });
});
