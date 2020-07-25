const btnNav = document.getElementById('btnNav')
const btnOpen = document.getElementById('btnOpen')
const btnClose = document.getElementById('btnClose')

function btnActive() {
    btnOpen.addEventListener('click', () => {
        if(btnNav.classList.contains('navNoActive')) {
            btnNav.classList.remove('navNoActive')
            btnNav.classList.add('navActive')
        }else {
            btnNav.classList.add('navActive')
        }
    })
    btnClose.addEventListener('click', () => {
        if(btnNav.classList.contains('navActive'))
            btnNav.classList.remove('navActive')
            btnNav.classList.add('navNoActive')
    })
}
btnActive()