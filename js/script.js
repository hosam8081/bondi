document.querySelectorAll('.work ul li').forEach((ele) => {
    ele.addEventListener("click", () => {
        document.querySelector('.work ul li.rounded-pill').classList.remove("rounded-pill", "bg-primary", "text-light")
        ele.classList.add("rounded-pill", "bg-primary", "text-light");

        document.querySelectorAll(".work .row .col-md-6").forEach(ele => {
            ele.classList.add("hide");
            ele.classList.remove("show");

            console.log(ele)
        })
        document.querySelectorAll(`${ele.dataset.show}`).forEach((ele) => {
            ele.classList.add("show");
        })

        // ele.textContent.toLocaleLowerCase()
    })
})