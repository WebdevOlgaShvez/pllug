const dragDropArea = document.getElementById('drop');
const input = document.querySelector('#file');
const open = document.querySelector('.btn');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(
    (eventName) => 
    dragDropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
    })
);

dragDropArea.addEventListener('drop',(event) => {
    let dt = event.dataTransfer;
    let files = dt.files;
    [...files].forEach(displayImage);

 });
  
const preview = document.querySelector('.preview');


function displayImage(file) {
if (file.type.match('image')) {

 console.log(file)
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  //mg.classList.add('thumbnail');

 
  preview.insertAdjacentHTML('afterbegin', `
  <div class="preview-image draggable" draggable ="true">
    <div class="preview-remove" data-name="${file.name}">&times;</div>
    <img src="${img.src}" class ="thumbnail" alt="${file.name}" />
   
  </div>
`)  

} else if (file.type.match('vnd.ms-excel')) {
    console.log(file)
    const reader = new FileReader()

  reader.onload = ev => {
    
    preview.insertAdjacentHTML('afterbegin', `
      <div class="preview-image" draggable ="true">
        <div class="preview-remove" data-name="${file.name}">&times;</div>
        <img src="assets/csv.png" alt="${file.name}" />
       
      </div>
    `)
  }

  reader.readAsDataURL(file)
   
  } else if (file.type.match('plain')) {
    console.log(file)
    const reader = new FileReader()

  reader.onload = ev => {
    
    preview.insertAdjacentHTML('afterbegin', `
      <div class="preview-image" draggable ="true">
        <div class="preview-remove" data-name="${file.name}">&times;</div>
        <img src="assets/txt-icon.png" alt="${file.name}" />
       
      </div>
    `)
  }

  reader.readAsDataURL(file)
   
  } else {
    alert("not allowed type of files")
  }

 


};



const changeHandler = ({target: {files}})=>{
    [...files].forEach(displayImage);
}

const removeHandler = event => {
  if (!event.target.dataset.name) {
    return
  }

  const {name} = event.target.dataset
  //files = files.filter(file => file.name !== name)

  /* if (!files.length) {
    upload.style.display = 'none'
  }
 */
  const block = preview
    .querySelector(`[data-name="${name}"]`)
    .closest('.preview-image')

  block.classList.add('removing')
  setTimeout(() => block.remove(), 300)
}

  const triggerInput = () => input.click();
  open.addEventListener('click', triggerInput);
  input.addEventListener('change', changeHandler);
  preview.addEventListener('click', removeHandler);