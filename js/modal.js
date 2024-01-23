const modal = document.getElementById("modal")
const modalVisible = document.querySelector(".subscribe-btn")
const modalInvisible = document.querySelector(".modal-close-btn")
modalVisible.addEventListener('click', () => {
    let useremail = document.getElementById("email")
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (useremail.value.match(regExp) != null) {
        event.preventDefault();
        useremail.value = null
        modal.classList.remove("modal-invisible");
        modal.classList.add("modal-visible");
    }
    else {alert('정확한 이메일 주소를 입력해주세요.')}
})
modalInvisible.addEventListener('click', () => {
    modal.classList.remove("modal-visible")
    modal.classList.add("modal-invisible")
})

