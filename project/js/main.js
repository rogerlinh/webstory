//slide layout//
let slides = document.querySelector(".slides");
let slideItem = document.querySelectorAll(".slide-item");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let item = document.querySelector(".item");


function createSlide (n) {

    console.log(slideItem.forEach);
    let widthItemAndMargin = slides.offsetWidth / n;
    let widthAllItem = widthItemAndMargin * 7;
    slides.style.width = `${widthAllItem}px`;
    
    slideItem.forEach((element) => {
        element.style.marginRight = "5px";
        element.style.width = `${widthItemAndMargin - 5}px`;
    });
    
    let count = 0;
    let lastItem = widthAllItem - widthItemAndMargin * n;
    
    btnRight.addEventListener("click", function () {
        if (count > lastItem) {
            count = 0
        } else count += widthItemAndMargin;
        slides.style.transform = `translateX(${-count}px)`
        
    });
    
    btnLeft.addEventListener('click', function() {
        if (count <= 0) {
            count = lastItem
        } else count -= widthItemAndMargin
        console.log(count);
        
        slides.style.transform = `translateX(${-count}px)`
    })
}

createSlide(3)



//Grid layout//

let gridLayout = document.querySelector('.gridlayout');
let gridItem = document.querySelectorAll('.grid-item');
let titleGrid = document.querySelector('.title');
let gridImage = document.querySelectorAll('.grid-pic');

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 1200 ) {
        gridLayout.style.columnCount = '4';
    }
    if (document.documentElement.clientWidth < 1100 ) {
        gridLayout.style.columnCount = '3';

} if (document.documentElement.clientWidth < 700 ) {
    gridLayout.style.columnCount = '2';

}
})