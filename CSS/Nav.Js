const sections = document.querySelectorAll ('section') ;
const navLi = document.querySelectorAll('nav.container ul li');

window.addEventListener('scroll', ()=>  {
    let current = '';

    sections.forEach (sections => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop)
    })
} )