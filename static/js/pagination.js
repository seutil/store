const paginationList = document.querySelector('.pagination-list')

paginationList.addEventListener('click', e => {
    const target = e.target
    if(target.classList.contains('pagination-link')) {
        console.log(Array.from(paginationList.children));
        if(!(target.classList.contains('prev') || target.classList.contains('next'))) {
            Array.from(paginationList.children).forEach(el => el.firstElementChild.classList.remove('active'))
            target.classList.add('active')
        }
    }
})