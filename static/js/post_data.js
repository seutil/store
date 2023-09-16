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
            formContent.classList.add('flex', 'justify-center', 'items-center', 'flex-col')
            formContent.innerHTML = `
                <div class="w-20 h-20 rounded-full border-2 border-green-500 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="rgb(34 197 94)"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg></div>
                <div>Спасибо, за ваш отзыв!</div>
            `
        }
    })
})