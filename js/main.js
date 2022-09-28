const card = document.querySelectorAll(".QandA");
let isClicked = false;

card.forEach((item) => {
    item.addEventListener("click", () => {
        if (isClicked !== true) {
            item.lastElementChild.style.display = "block";
            item.firstElementChild.firstElementChild.style.fontWeight = "700";
            item.firstElementChild.lastElementChild.style.transform =
                "rotate(180deg)";
            isClicked = true;
        } else {
            item.lastElementChild.style.display = "none";
            item.firstElementChild.firstElementChild.style.fontWeight = "400";
            item.firstElementChild.lastElementChild.style.transform =
                "rotate(0deg)";
            isClicked = false;
        }
    });
});
