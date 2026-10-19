// Split marked headings into letters for the rising animation
(function(){
  var d=0;
  document.querySelectorAll('[data-split]').forEach(function(el){
    var t=el.textContent; el.textContent='';
    for(var i=0;i<t.length;i++){var s=document.createElement('span');s.className='ch';s.textContent=t[i];s.style.animationDelay=(d++*0.04)+'s';s.setAttribute('aria-hidden','true');el.appendChild(s);}
  });
  // Mobile menu
  var b=document.querySelector('.menu-btn'), nl=document.getElementById('navlist');
  if(b&&nl){b.addEventListener('click',function(){var o=nl.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  // Filters (projects page)
  var btns=document.querySelectorAll('.filters button'), items=document.querySelectorAll('[data-tags]');
  btns.forEach(function(btn){btn.addEventListener('click',function(){
    var f=btn.dataset.filter;
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===btn?'true':'false');});
    items.forEach(function(it){it.hidden=!(f==='all'||it.dataset.tags.split(' ').indexOf(f)>-1);});
  });});
})();
