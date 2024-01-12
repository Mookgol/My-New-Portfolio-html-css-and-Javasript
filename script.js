function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
  function submitForm() {
    // You can add your form submission logic here
    // For now, let's just log the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can replace the above console.log statements with your actual form submission code
    // For example, you might use AJAX to send the form data to a server
}
