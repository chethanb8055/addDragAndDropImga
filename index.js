

//to display the img



const dropArea = document.getElementById("drop-area");
console.log(dropArea)
const inputFile = document.getElementById("input-file");
console.log(inputFile)
const imageView = document.getElementById("img-view");
console.log(imageView)

//if change input img that will display


inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    //it get the img from the input when the input change we have to get that file now
    //it give the input file which is uploaded in the input filled but itin obeject formet so we convert it into the img link
    
    // inputFile.files[0];
    let imgLink = URL.createObjectURL(inputFile.files[0])
    //to add this img to background style


    imageView.style.backgroundImage =`url(${imgLink})`
    // to hide the content
    imageView.textContent = "";
    imageView.style.border =0



}


dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
z   inputFile.files = e.dataTransfer.files;
    uploadImage();
    
})

dropArea.addEventListener("drop",function(e){
    e.preventDefault();
    //when drop the img that will transfer the img to input file 

})
