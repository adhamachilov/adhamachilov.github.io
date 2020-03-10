var dropBtns = document.getElementsByClassName("dropbtn");

for(let i = 0; i < dropBtns.length; i++) {
    dropBtns[i].addEventListener('click', function() {
        for(let j = 0; j < dropBtns.length; j++) {
            dropBtns[j].nextElementSibling.style.display = 'none';
            dropBtns[j].classList.remove('active');
        }
        this.classList.toggle('active');
        if(this.nextElementSibling.style.display === 'block'){
            this.nextElementSibling.style.display = 'none';
        }
        else {
            this.nextElementSibling.style.display = 'block';
        }
    });
}

var main = document.getElementById("main");
main.addEventListener('click', function() {
    for(let j = 0; j < dropBtns.length; j++) {
        dropBtns[j].nextElementSibling.style.display = 'none';
    }
});

var slides = document.getElementsByClassName("slide");
let i = 0;
setInterval(function(){
    for(let j = 0; j < slides.length; j++) {
        slides[j].style.display = 'none';
    }   
    slides[i].style.display = 'block';
    ++i;
    if(i === slides.length) {
        i = 0;
    }
}, 1000);    
