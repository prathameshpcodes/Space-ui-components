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

// toast

const notificationToastDemoBtn = document.querySelector(
  "#notification-toast-demo-btn"
);

const notificationToast = document.querySelector("#notification-toast");
const toastCrossBtn = document.querySelector("#toast-cross-btn");

if (notificationToastDemoBtn) {
  notificationToastDemoBtn.addEventListener("click", () => {
    notificationToast.classList.remove("d-none");

    setTimeout(() => {
      notificationToast.classList.add("d-none");
    }, 4000);
  });
}

if (toastCrossBtn) {
  toastCrossBtn.addEventListener("click", () => {
    notificationToast.classList.add("d-none");
  });
}

// Stacked Toast

const firstStackedToastBtn = document.querySelector("#first-stacked-toast-btn");
const secondStackedToastBtn = document.querySelector(
  "#second-stacked-toast-btn"
);

const stackedToastOneCrossBtn = document.querySelector(
  "#stacked-toast-1-cross-btn"
);
const stackedToastTwoCrossBtn = document.querySelector(
  "#stacked-toast-2-cross-btn"
);

const stackedToastOne = document.querySelector("#stacked-toast-1");
const stackedToastTwo = document.querySelector("#stacked-toast-2");

if (firstStackedToastBtn) {
  firstStackedToastBtn.addEventListener("click", () => {
    stackedToastOne.classList.remove("d-none");

    setTimeout(() => {
      stackedToastOne.classList.add("d-none");
    }, 4000);
  });
}

if (stackedToastOneCrossBtn) {
  stackedToastOneCrossBtn.addEventListener("click", () => {
    stackedToastOne.classList.add("d-none");
  });
}

if (secondStackedToastBtn) {
  secondStackedToastBtn.addEventListener("click", () => {
    stackedToastTwo.classList.remove("d-none");

    setTimeout(() => {
      stackedToastTwo.classList.add("d-none");
    }, 4000);
  });
}

if (stackedToastTwoCrossBtn) {
  stackedToastTwoCrossBtn.addEventListener("click", () => {
    stackedToastTwo.classList.add("d-none");
  });
}
