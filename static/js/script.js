const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input_file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change",uploadImage);
inputFile.multiple = true;
function uploadImage(){
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imageLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover",function(e)
{
    e.preventDefault();
});
dropArea.addEventListener("drop",function(e)
{
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage()
});
