const acc_btns=document.querySelectorAll(".accordion-header");
const acc_contents=document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        acc_contents.forEach((acc)=>{
            if(
                e.target.nextElementSibling !== acc &&
                acc.classList.contains("active")
            ){
                acc.classList.remove("active");
            }
        });
        const panel=btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
});