

// var previewImg = document.getElementById('largeImg');
// var smallImgs = document.getElementsByClassName("sm-Img");

// for (let i = 0; i < smallImgs.length; i++) {
//    console.log(smallImgs[i])
//     smallImgs.addEventListener('mouseover' , function(){
//     previewImg.src = this.smallImgs
//     })
// }

var previewImg = document.getElementById("largeImg")
var smallImgs = document.getElementsByClassName("sm-Img")

for(let i = 0; i < smallImgs.length; i++){
    console.log(smallImgs[i])
    smallImgs[i].addEventListener('mouseover', function(){
        previewImg.src = this.src
        this.style.border = '2px solid black'
    })
    smallImgs[i].addEventListener('mouseout', function(){
        this.style.border = "2px solid transparent"
    })
}