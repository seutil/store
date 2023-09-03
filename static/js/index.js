const checkboxMenu = $("#check");
const headerTop = $(".header-top");
const headerMenuContainer = $(".header__menu-container");
const body = $("body");

checkboxMenu.on("change", function (e) {
  headerTop.slideToggle(300);
  body.toggleClass("overflow-hidden");
  $(document).width() > 640
    ? headerMenuContainer.toggleClass(["p-4", "sm:top-[60px]", "top-[124px]"])
    : headerMenuContainer.toggleClass(["p-4", "top-[124px]"]);
});

$('.swiper').each(function(index) {
  console.log(index);
  const swiper = new Swiper(index === 0 ? ".swiper-reviews" : ".swiper-news", {
    slidesPerView: index === 0 ? 2 : 3,
    speed: 1000,
    loopAdditionalSlides: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      960: {
        slidesPerView: index === 0 ? 2 : 3,
      },
    },
  });
})

const inputFiles = document.querySelector(".input-files");
const files = document.querySelector(".block-files");

function getFile(file, container) {
  let extension = file.name.split(".")[file.name.split(".").length - 1];
  let icon = "";
  if (extension == "jpg" || extension == "jpeg" || extension == "png")
    icon = '<i class="fa fa-file-image-o text-5xl text-green-700 mb-3"></i>';
  if (extension == "doc" || extension == "docx")
    icon = '<i class="fa fa-file-word-o text-5xl text-blue-900 mb-3"></i>';
  if (extension == "pdf")
    icon = '<i class="fa fa-file-pdf-o text-5xl text-red-700 mb-3"></i>';
  console.log(icon);
  console.log(extension);
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="file">
        <i class="fa fa-times cross-file"></i>
        ${icon}
        <p class="max-w-[170px] inline-block">
          <span class="truncate block">${file.name}</span>
        </p>
  </div>
`
  );
}

const addimage = (container, input) => {
  const files = input.files;
  console.log(files);
  for (let file of files) {
    getFile(file, container);
  }
};

function transferImages(files, input) {
  // Создаем новый объект DataTransfer
  const dataTransfer = new DataTransfer();
  // Добавляем файлы в объект DataTransfer
  files.forEach((file) => {
    dataTransfer.items.add(file);
  });

  // Устанавливаем объект DataTransfer в свойство files элемента input
  input.files = dataTransfer.files;
}

function deleteImg(e) {
  e.preventDefault();  
  if (e.target.classList.contains("cross-file")) {
    let parent = e.target.parentElement.parentElement;
    let array = Array.from(parent.children);
    let index = array.indexOf(e.target.parentElement);
    parent.children[index].remove();
    const files = Array.from(inputFiles.files);
    const newFiles = [...files.slice(0, index), ...files.slice(index + 1)];
    transferImages(newFiles, inputFiles);
  }
}

inputFiles.addEventListener("change", (e) => {
  files.innerHTML = "";
  addimage(files, inputFiles);
});
files.addEventListener("click", (e) => {
  deleteImg(e);
});

const reviewStars = document.querySelectorAll(".review-mark svg");
const reviewStarsBlock = document.querySelector(".review-mark");

const stars = Array.from(reviewStarsBlock.children);

function updateStarsColor(index) {
  stars.forEach((star, idx) => {
    if (idx <= index) {
      const pathElement =
        star.tagName === "svg" ? star.querySelector("path") : null;
      if (pathElement) {
        pathElement.style.fill = "#4F8FF0";
      } else {
        star.style.fill = "#4F8FF0";
      }
    } else {
      const pathElement =
        star.tagName === "svg" ? star.querySelector("path") : null;
      if (pathElement) {
        pathElement.style.fill = "none";
      } else {
        star.style.fill = "none";
      }
    }
  });
}

reviewStars.forEach((el, index) => {
  el.addEventListener("mousemove", () => {
    updateStarsColor(index);
  });
});

function hideModal(modal, form) {
  $(form).slideUp(300, function () {
    modal.classList.remove("active");
  });
}

const modals = document.querySelectorAll(".modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");

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
