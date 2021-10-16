//Текстове поле (input) - nickname. Якщо хоч одна умова не виконується, додати червону рамку цьому текстовому полю, умови:
//довжина мінімум 3 символа (включно), максимум 24 символа (включно)
//мінімум 1 буква
//За допомогою JavaScript дозвольте вводити тільки букви (англійські)  і цифри.
const button = document.querySelector(".button");
const nik = document.getElementById('nikname');

nik.addEventListener('input', function(event) {


const nikname = nik.value;
const nikError = document.querySelector('#nikname + span.error');
console.log(nikname);
const re = /[a-z]{1,}[a-z0-9]{2,24}/i;
const validNikname = re.test(nikname);
console.log(validNikname);

  if (validNikname) {
    
    nikError.textContent = ''; 
    nikError.className = 'error'; 
  } else {
 
    nikError.textContent = 'You need to enter right nikname';
    nikError.className = 'error active';
  }
});

/* Текстове поле (input) - name. Якщо хоч одна умова не виконується, додати червону рамку цьому текстовому полю, умови:
довжина мінімум 1(включно), максимум 100 (включно)
За допомогою JavaScript дозвольте вводити тільки букви (англійські). */

const nameField = document.getElementById('name');
nameField.addEventListener('input', function (event) {

  const name = nameField.value;
  const nameError = document.querySelector('#name + span.error');
  console.log(name);
  const re = /^[a-z]{1,100}$/i;
  const validName = re.test(name);
  console.log(validName);

    if (validName) {
      
      nameError.textContent = ''; 
      nameError.className = 'error'; 
    } else {
   
      nameError.textContent = 'You need to enter right name';
      nameError.className = 'error active';
    }
  });

 /*  Текстове поле (textarea) - comment:
  довжина мінімум 1 (включно),  максимум 1000(включно)
  За допомогою JavaScript дозвольте вводити тільки букви (англійські), 
  а також наступні символи .,!?- */

const textareaField = document.getElementById('msg')
textareaField.addEventListener('input', function (event) {
    
  const text = textareaField.value;
  const textError = document.querySelector('#msg + span.error');
  console.log(text);
  const re = /^[a-z.,!?-]{1,1000}$/i;
  const validText = re.test(text);
  console.log(validText);  

    if (validText) {

      textError.textContent = ''; 
      textError.className = 'error'; 

    } else {
    
        textError.textContent = 'You need to enter right text';
        textError.className = 'error active';
      }
    });
  
/*   Кнопка “Add comment”:
додає блок з коментарем у наступному форматі:
	nickname - name
	comment
додати блок з коментарем можна тільки тоді коли всі поля заповнені і відповідають попередньо описаним вимогам
якщо поля не заповнені, то кнопка має бути виключена (disabled)
блок з коментарем додає на початку списку коментарів
Спочатку логіка, потім оформлення за бажанням.
 */
if (validName) {
  console.log(validName)
   button.disabled = false;
    
     
} else {
  
    button.disabled = true;
}

function addComment() {
  
  const form = document.getElementById('form');
  const allInputs = document.querySelectorAll('#form input[type="text"]')
    if (validName) {
      console.log(validName)
       button.disabled = false;
        form.insertAdjacentHTML('afterend', `<div><p>${nik.value}-${nameField.value}<br>
        ${textareaField.value}</p></div>`);
         
    } else {
      
        button.disabled = true;
    }

  form.reset();
}