const modals = document.querySelectorAll(".modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");

function hideModal(modal, form) {
    $(form).slideUp(300, function () {
      modal.classList.remove("active");
    });
  }

modals.forEach((modal) => {
  const formModal = modal.querySelector("form");
  const crossModal = modal.querySelector(".cross-modal");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetModalId = trigger.getAttribute("data-target");
      const targetModal = document.getElementById(targetModalId);
      
      targetModal.classList.add("active");
      $(formModal).slideDown(300);
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      hideModal(modal, formModal);
    }
  });

  crossModal.addEventListener("click", () => {
    hideModal(modal, formModal);
  });
});