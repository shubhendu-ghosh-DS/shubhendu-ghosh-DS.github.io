const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');


function PageTransitions(){
    // button click active class
    for (let i =0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function() {
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
            this.className += 'active-btn'
        })
    }
    // section active class
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id){
            // remove selected
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    ///Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();