const IMG_INITIAL = "/public/image";
const IMG_END = ".jpeg";

function changeImage(e) {
    const imgNumberRandom = Math.floor((Math.random() * 4) + 1);
    e.target.setAttribute("src",`${IMG_INITIAL}${imgNumberRandom}${IMG_END}`);
}
document.getElementById("imageWeb").addEventListener("click", changeImage);
