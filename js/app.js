
const loader=document.querySelector('#loader');window.addEventListener('load',()=>setTimeout(()=>{if(loader){loader.style.opacity='0';loader.style.visibility='hidden'}},450));
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('nav');btn?.addEventListener('click',()=>nav?.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');else if(e.boundingClientRect.top<0)e.target.classList.add('out')}),{threshold:.12});document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=Math.min(i*45,300)+'ms';io.observe(e)});
