const modal = document.getElementById("modal")
const modalVisible = document.querySelector(".subscribe-btn")
const modalInvisible = document.querySelector(".modal-inner-btn")
modalVisible.addEventListener('click', () => {
        modal.classList.remove("modal-invisible");
        modal.classList.add("modal-visible");
})
modalInvisible.addEventListener('click', () => {
    modal.classList.remove("modal-visible")
    modal.classList.add("modal-invisible")
})

