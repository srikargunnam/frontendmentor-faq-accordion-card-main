const arrows = document.querySelectorAll('.arrow')
const faqQsns = document.querySelectorAll(".faq")
const hiddenParas = document.querySelectorAll(".hidden")

arrows.forEach((arrow) => {
    // let faqQsn = arrow.parentElement.previousElementSibling.children[0];
    // let hiddenPara = arrow.parentElement.previousElementSibling.children[1];
    let index;
    arrow.addEventListener("click", () => {
        for (let i = 0; i < arrows.length; i++){
            if (!(arrows[i] === arrow)) {
                arrows[i].classList.remove("arrow-up")
                faqQsns[i].classList.remove("faqBold")
                hiddenParas[i].classList.remove("visible")
            } else {
                index = i
            }
        }
        if (arrow.classList.contains("arrow-up")) {
            arrow.classList.remove("arrow-up")
            faqQsns[index].classList.remove("faqBold")
            hiddenParas[index].classList.remove("visible")
        }
        else {
            arrow.classList.add("arrow-up")
            faqQsns[index].classList.add("faqBold")
            hiddenParas[index].classList.add("visible")
        }
    })
})