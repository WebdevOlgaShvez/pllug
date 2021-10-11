//Текстове поле (input) - nickname. Якщо хоч одна умова не виконується, додати червону рамку цьому текстовому полю, умови:
//довжина мінімум 3 символа (включно), максимум 24 символа (включно)
//мінімум 1 буква
//За допомогою JavaScript дозвольте вводити тільки букви (англійські)  і цифри.


//const form  = document.getElementsByTagName('form')[0];
const nik = document.getElementById('nikname');

nik.addEventListener('input', function (event) {
const nikname = nik.value;
const nikError = document.querySelector('#nikname + span.error');
console.log(nikname);
const re = /[a-z]+[a-z0-9]{2,24}/i;
const valid = re.test(nikname);
console.log(valid);
  if (valid) {
    
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
  const valid = re.test(name);
  console.log(valid);
    if (valid) {
      
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

  const textareaField = document.getElementById('msg');
  textareaField.addEventListener('input', function (event) {

    const text = textareaField.value;
    const textError = document.querySelector('#msg + span.error');
    console.log(text);
    const re = /^[a-z.,!?-]{1,1000}$/i;
    const valid = re.test(text);
    console.log(valid);
      if (valid) {
        
        textError.textContent = ''; 
        textError.className = 'error'; 
      } else {
    
        textError.textContent = 'You need to enter right text';
        textError.className = 'error active';
      }
    });
  
  
/* form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if(!nikname.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

 */