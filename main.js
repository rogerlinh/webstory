//slide layout//
let slides = document.querySelector(".slides");
let slideItem = document.querySelectorAll(".slide-item");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let item = document.querySelector(".item");

console.log(slideItem.forEach);
let widthItemAndMargin = slides.offsetWidth / 3;
let widthAllItem = widthItemAndMargin * 7;
slides.style.width = `${widthAllItem}px`;

slideItem.forEach((element) => {
  element.style.marginRight = "5px";
  element.style.width = `${widthItemAndMargin - 5}px`;
});

let count = 0;
let lastItem = widthAllItem - widthItemAndMargin * 3;

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

//Grid layout//

let gridLayout = document.querySelector('.gridlayout');
let gridItem = document.querySelectorAll('.grid-item');
let titleGrid = document.querySelector('.title');
let gridImage = document.querySelectorAll('.grid-pic');

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 1200 ) {
        console.log(document.documentElement.clientWidth);
        gridLayout.style.gridTemplateColumns = '150px 150px 150px';
    }
    if (document.documentElement.clientWidth < 1000 ) {
        console.log(document.documentElement.clientWidth);
        gridLayout.style.gridTemplateColumns = '150px 150px';

} if (document.documentElement.clientWidth < 700 ) {
    console.log(document.documentElement.clientWidth);
    gridLayout.style.gridTemplateColumns = '150px';

}
})