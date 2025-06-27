document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  
  alert('Thank you, ' + name + '! Your message has been sent.');
  this.reset();
});
