const dragDropArea = document.getElementById('drop');
const input = document.querySelector('#file');
const openFile = document.querySelector('.btn');
const preview = document.querySelector('.preview');

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
  

function displayImage(file, index) {
   
  if (file.type.match('image')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      preview.insertAdjacentHTML('afterbegin', `
      <div class="preview-image" >
        <div class="preview-remove" data-name="${file.name}">&times;</div>
        <img src="${img.src}" class ="thumbnail" alt="${file.name}" id="box${index}"/>
      
      </div>
    `); 

  } else if (file.type.match('vnd.ms-excel')) {
     
      const reader = new FileReader();

      reader.onload = ev => {
      preview.insertAdjacentHTML('afterbegin', `
        <div class="preview-image" >
          <div class="preview-remove" data-name="${file.name}">&times;</div>
          <img src="assets/csv.png" alt="${file.name}" id="box${index}" />
        </div>
      `)
      };

      reader.readAsDataURL(file);
   
  } else if (file.type.match('plain')) {

    const reader = new FileReader();
    reader.onload = ev => { 
      preview.insertAdjacentHTML('afterbegin', `
        <div class="preview-image" >
          <div class="preview-remove" data-name="${file.name}">&times;</div>
          <img src="assets/txt-icon.png" alt="${file.name}" id="box${index}" />  
        </div>
      `)
    }

    reader.readAsDataURL(file);
   
  } else { alert("not allowed type of files") };
  
// change order
    document.querySelectorAll('.preview-image').forEach(e => {
      
      e.draggable = true;
      e.ondragstart = e => {
        e.dataTransfer.setData("id", e.target.id);
        e.target.classList.add('dragging');
      };

      e.ondragover = e => {
        let old = document.querySelector('.over');
        old && old.classList.remove('over');
        e.target.classList.add('over');
        e.preventDefault();
      };

      e.ondrop = e => {
        let old = document.querySelector('.dragging');
        old && old.classList.remove('dragging')
        old = document.querySelector('.over');
        old && old.classList.remove('over');
        let mid = e.target.outerHTML;
        let nextel = document.querySelector('#'+e.dataTransfer.getData('id'));
        e.target.outerHTML = nextel.outerHTML;
        nextel.outerHTML = mid;
    
      };
    })



};

//handler

const changeHandler = ({target: {files}})=>{
    [...files].forEach(displayImage);
};

//removehandler

const removeHandler = event => {
  if (!event.target.dataset.name)  return;
   
  const {name} = event.target.dataset;
  const block = preview
    .querySelector(`[data-name="${name}"]`)
    .closest('.preview-image');

  block.classList.add('removing');
  setTimeout(() => block.remove(), 300);
 
};


const triggerInput = () => input.click();
openFile.addEventListener('click', triggerInput);
input.addEventListener('change', changeHandler);
preview.addEventListener('click', removeHandler);



