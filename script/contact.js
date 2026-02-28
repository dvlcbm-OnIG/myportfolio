let attempt = 0;
const submit = document.getElementById('submit');

if (submit) {
  submit.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form from submitting
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const feedb = document.getElementById('feedback')
    attempt++;
 
   
    /*if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
      feedb.textContent = (`Please fill out all the input fields (${attempt}).`);
    } else {
      feedb.textContent = ('Successfully submitted.');
      attempt = 0;
      name.value = '';
      email.value = '';
      message.value = '';
    }
    setTimeout(()=>{
      feedb.textContent = " "

    },2000)*/
    const nameVal = name.value.trim();
const emailVal = email.value.trim();
const messageVal = message.value.trim();

if (nameVal === '' && emailVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out all sections.';

} else if (nameVal === '' && emailVal === '') {
  feedb.textContent = 'Please fill out the name and email sections.';

} else if (nameVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out the name and message sections.';

} else if (emailVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out the email and message sections.';

} else if (nameVal === '') {
  feedb.textContent = 'Please fill out the name section.';

} else if (emailVal === '') {
  feedb.textContent = 'Please fill out the email section.';

} else if (messageVal === '') {
  feedb.textContent = 'Please fill out the message section.';

} else {
  feedb.textContent = 'Successfully submitted.';
  name.value = '';
  email.value = '';
  message.value = '';

}


    setTimeout(()=>{
      feedb.textContent = " "

    },2000)
  });
}