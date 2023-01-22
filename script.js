import Toast from "./Toast.js";

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Botoont clicked",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    autoClose: false,
  });
});
