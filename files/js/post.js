const posts = document.querySelectorAll(".post-msge");



posts.forEach(value=>{
    const ptxt = value.innerText;
    const txtL = ptxt.length;

    if (Number(txtL)<100) {
        value.style.fontSize = "30px"        
    }
    else {
        value.style.fontSize = "16px";
    }
})

// what if the post is bigger than ? 300 words ? 
//<span>See More</span> <span></span>
posts.forEach(value => {
    let txt = value.innerText;
    const ptn = txt.length;
    if (Number(ptn)>300) {
         txt = txt.split("");
         let text ;
         for (let i = 0; i < 250; i++) {
            text += txt[i];
         }
         value.innerHTML = `
         ${text} <span class="See-More">... See More</span>
         `
    }
});

const Seemore = document.querySelectorAll(".See-More");
Seemore.forEach(value =>{
    value.addEventListener('click',()=>{
        ///gonna do it letter ...InshAAllah
    })
})
