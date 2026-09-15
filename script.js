document.getElementById("year").textContent=new Date().getFullYear();
const header=document.querySelector(".topbar"), menu=document.querySelector(".menu");
menu.addEventListener("click",()=>header.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));
document.getElementById("quoteForm").addEventListener("submit",e=>{
 e.preventDefault();
 document.getElementById("formNote").textContent="Quote form UI is ready. Connect this form to your email/Formspree or WhatsApp before launch.";
});
