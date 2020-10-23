function sendMail(contactForm) {
  emailjs.send("gmail", "rosie", {
    from_name: contactForm.name.value,
    from_email: contactForm.emailaddress.value,
    message_html: contactForm.feedback.value,
  });

  alert("Email submitted!");
  window.location.replace("/");
  return false; // To block from loading a new page
}
