let items = document.querySelectorAll('.silder .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnali .item');

//config 
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

//Auto run the slider 
let refreshInterval = setInterval(() =>{
    next.click();
},3000)
function showSlider() {
    //remove old item Active
    let oldItemActive = document.querySelector('.silder .list .item.active');
    let oldThumbnailActive = document.querySelector('.thumbnali .item.active')
    oldItemActive.classList.remove('active');
    oldThumbnailActive.classList.remove('active');

    //Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

//click thumbnail
thumbnails.forEach((thumbnali, index) =>{
    thumbnali.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})