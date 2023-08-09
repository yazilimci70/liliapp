const inputField = document.getElementById('inputField');

inputField.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('has-value');
  } else {
    this.classList.remove('has-value');
  }
});
