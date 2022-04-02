// Modal

const modalDemoBtn = document.querySelector("#modal-demo-btn");

const modalContainer = document.querySelector("#modal-container");
const modalCloseBtn = document.querySelector("#modal-close-btn");

if (modalDemoBtn) {
  modalDemoBtn.addEventListener("click", () => {
    modalContainer.classList.remove("d-none");
  });
}

if (modalContainer) {
  modalContainer.addEventListener("click", (event) => {
    if (event.currentTarget === event.target)
      modalContainer.classList.add("d-none");
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    modalContainer.classList.add("d-none");
  });
}
