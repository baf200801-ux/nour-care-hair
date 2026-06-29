// script.js — small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});} 
  });
});

// Optional: simple success message for the contact form (if using Formspree, it redirects)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // keep default behavior (Formspree) — could add fetch-based submission here
    // show a quick message for local testing
    if(form.action.includes('yourformid')){
      e.preventDefault();
      alert('Formulaire envoyé (mode test). Remplacez "yourformid" par votre ID Formspree ou configurez une autre solution.');
      form.reset();
    }
  });
}
