const inputReviewCompanyName = document.querySelector('input[name="company_name"]')
const inputReviewerName = document.querySelector('input[name="name_reviewer"]')
const inputReview = document.querySelector('textarea[name="review"]')
const inputReviewMarks = document.querySelectorAll('.review-mark svg path')
const btnSubmit = document.querySelector('.btn-create-review')

btnSubmit.addEventListener('click', e => {
    e.preventDefault()
    const data = {
        'name': inputReviewerName.value,
        'company_name': inputReviewCompanyName.value,
        'review': inputReview.value,
        'mark': Array.from(inputReviewMarks).filter(el => getComputedStyle(el).getPropertyValue('fill') != 'none').length
    }
    fetch('/reviews/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then((res) => res.status).then(res => {
        console.log(res);
        if(res == 200) {
            const formContent =  document.querySelector('.form-content')
            formContent.classList.add('flex', 'justify-center', 'items-center')
            formContent.innerHTML = `
                <div>Спасибо, за ваш отзыв!</div>
            `
        }
    })
})