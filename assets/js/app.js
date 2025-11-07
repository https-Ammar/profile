document.querySelectorAll('.link-btn').forEach(b=>{
  b.addEventListener('click',()=>{window.open('https://example.com','_blank')})
})
document.querySelector('.schedule-btn')?.addEventListener('click',()=>{
  alert('Open scheduler or add your scheduling link here')
})
