const card = document.querySelectorAll(".QandA");
const pshow = document.querySelectorAll(".toshow");
const questionTitles = document.querySelectorAll("h2");
const arrows = document.querySelectorAll(".arrow");
let isClicked = false;

function hideOthers() {
    pshow.forEach((item) => {
        item.style.display = "none";
    });
    questionTitles.forEach((item) => {
        item.style.fontWeight = "400";
    });
    arrows.forEach((item) => {
        item.style.transform = "rotate(0deg)";
    });
}

card.forEach((item) => {
    item.addEventListener("click", () => {
        if (isClicked == true) {
            isClicked = false;
            item.lastElementChild.style.display = "none";
            item.firstElementChild.firstElementChild.style.fontWeight = "400";
            item.firstElementChild.lastElementChild.style.transform =
                "rotate(0deg)";
        } else {
            isClicked = true;
            hideOthers();
            item.lastElementChild.style.display = "block";
            item.firstElementChild.firstElementChild.style.fontWeight = "700";
            item.firstElementChild.lastElementChild.style.transform =
                "rotate(180deg)";
        }
    });
});
