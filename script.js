// import Toast from "./src/Toast.js";
import Toast from "./dist/Toast.js";

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Botton clicked",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    autoClose: false,
  });
});
