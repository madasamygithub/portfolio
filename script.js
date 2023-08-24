

let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
let sect=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= ()=>{

    sect.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            });

            //active sections for animation on scroll

            sec.classList.add('show-animate');
           
        }

        //if want to use animation that reaets on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
        
    });
    //sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //REMOVE TOGGLEICON AND NAVBAR WHEN CLICK NAVBAR LINKS(SCROLL)

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

   
}
