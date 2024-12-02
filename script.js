const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-x");
const nav = document.querySelector("nav ul")
const tabTitles = document.querySelector(".tab-titles")
const tabContents = document.querySelectorAll('.tab-contents')
const tabLinks = document.querySelectorAll('.tab-links')


tabTitles.addEventListener("click",(e)=>{
    let dataSet = e.target.dataset.id;


    if(dataSet){
        tabLinks.forEach((links)=>{
            links.classList.remove('active-link')
            e.target.classList.add('active-link')
        })

        tabContents.forEach((items)=>{
            items.classList.remove('active-tab')
            if(items.classList.contains(dataSet)){
                items.classList.add('active-tab')
            }

        })



    }
})

bars.addEventListener("click",()=>{
    nav.style.right ="0px"
})
cross.addEventListener("click",()=>{
    nav.style.right ="-200px"
})

const msg = document.querySelector("#msg")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzeg1mdU2VG4cxCdgc5vAcP3IUPWRoafE42byLk8BEqXRUtMlDfKQKJkIvtjHwB1b7d/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = " Message sent successfully"
    
                        setTimeout(()=>{
                            msg.innerHTML =""
                        },5000)

                        form.reset();
    }
                        
    )
      .catch(error => console.error('Error!', error.message))
  })

  let date = new Date();
const time = document.querySelector(".time")

  function dateGenerator(){
    let year = date.getFullYear();
    time.innerHTML = year

  }

  window.addEventListener("DOMContentLoaded",()=>{
    dateGenerator()
  })


  const typed = new Typed('.multiple-text',{
    strings: ['DSW-Student'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
  });
