const form = document.querySelector('#form-problem')
function hideModal(modal, form) {
    $(form).slideUp(300, function () {
      modal.classList.remove("active");
    });
  }
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(new FormData(form));
    const data = new FormData()
    data.append('name', form.querySelector('input[name="name"]').value)
    data.append('email', form.querySelector('input[name="email"]').value)
    data.append('description', form.querySelector('textarea[name="description"]').value)
    const fileInput = form.querySelector('input[name="file_upload"]');
    for (const file of fileInput.files) {
        data.append('file_upload', file);
    }
    console.log(form.querySelector('input[name="file_upload"]').files)
    fetch('/create_problem', {
        method: 'POST',
        body: data
    }).then(res => res.json()).then(resJSON => {
        console.log(resJSON)
        const targetModal = document.getElementById('modal3');
        console.log(targetModal);
        const crossModal = targetModal.querySelector(".cross-modal");
        targetModal.classList.add("active");
        const formContent = targetModal.querySelector('.modal-content')
        $(formContent).slideDown(300);
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) {
              hideModal(targetModal, formContent);
            }
          });
          crossModal.addEventListener("click", () => {
            hideModal(targetModal, formContent);
          });
    })
})