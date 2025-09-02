
function enviarForm(e){
  e.preventDefault();
  const ok = document.getElementById('form-ok');
  ok.style.display = 'block';
  e.target.reset();
}
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));
});
