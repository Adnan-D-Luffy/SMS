const posts = document.querySelectorAll(".post-msge");
const msgeP = [];


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

posts.forEach((value,i)=>{
    value.setAttribute("data-msgeID",`${i}`)
    
})
// what if the post is bigger than ? 300 words ? 
//<span>See More</span> <span></span>
posts.forEach(value => {
    let txt = value.innerText;
    const ptn = txt.length;
    const id = value.dataset.msgeid;
   
    if (Number(ptn)>300) {
         const ID = Number(id);
         let text ="";
         msgeP.push({
            ID ,
            txt
         });
         txt = txt.split("");
         for (let i = 0; i < 250; i++) {
            text += txt[i];
         }
         value.innerHTML = `
         ${text} <span class="See-More" data-seeMore="${id}">... See More</span>
         `
    }
});

const Seemore = document.querySelectorAll(".See-More");
Seemore.forEach(value =>{
    value.addEventListener('click',()=>{
        const id = value.dataset.seemore;
        const index = msgeP.findIndex(data => data.ID === Number(id));
        if (index !== -1) {
           const text = msgeP[index].txt;
           posts[id].innerHTML = text ;
        }
        else {
            alert("Please enable js")
        }
    })
})
