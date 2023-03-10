const scriptURL =
  'https://script.google.com/macros/s/AKfycbyzwPyDAaRBBsMZtWTldBxZQa-mLBKrPiMtiXTxdHRyLFEuuY9vF2nKSJePD5Nr0XRKfQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      window.alert('Sikeres küldés!');
    })
    .catch(error => {
      console.error('Error!', error.message);
      window.alert('Hibás küldés!');
    });
});

const supervisionElement = document.querySelector('.inputSupervisionElement');
const supervisorElement = document.querySelector('.inputSupervisorElement');

supervisionElement.addEventListener('change', event => {
  if (supervisionElement.value === 'nincs') {
    //    element.classList.add("mystyle");
    supervisorElement.setAttribute('disabled', '');
  } else {
    supervisorElement.removeAttribute('disabled', '');
  }
});

const selectElement = document.querySelector('.inputStartElement');
/*
selectElement.addEventListener('change', event => {
  const result = document.querySelector('.inputEndElement');
  
  //result.textContent = `You like ${event.target.value}`;
  var newDate = new Date(selectElement.value);
  result.value = selectElement.value;
});
*/
