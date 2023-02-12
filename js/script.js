const scriptURL = 'https://script.google.com/macros/s/AKfycbyzwPyDAaRBBsMZtWTldBxZQa-mLBKrPiMtiXTxdHRyLFEuuY9vF2nKSJePD5Nr0XRKfQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
