let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}





// let treatAcc = document.getElementsByClassName("treat-accordion");
// let swipe;

// for (swipe = 0; swipe < treatAcc.length; swipe++) {
//     treatAcc[swipe].addEventListener("click", function() {
//         this.classList.toggle("active");

//         let treatPanel = this.nextElementSibling;
//         if (treatPanel.style.maxHeight) {
//             treatPanel.style.maxHeight = null;
//         } else {
//             treatPanel.style.maxHeight = treatPanel.scrollHeight + "px";
//         }
//     });
// }

document.querySelectorAll('treat-accordion__trigger').forEach((item) =>
    item.addEventListener('click',() => {
        const parent = item.parentNode;
        if(parent.classList.contains('treat-accordion--active')){
            parent.classList.remove('treat-accordion--active')
        } else{
            document.querySelectorAll('.treat-accordion')
            .forEach((child)=> child.classList.remove('treat-accordion--active'))

            parent.classList.add('treat-accordion--active');
        }
        
    })

)