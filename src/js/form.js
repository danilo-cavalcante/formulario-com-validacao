const button = document.getElementById("submit");

const formArea = document.querySelectorAll(".form-area")

button.addEventListener("click", function(e) {
    e.preventDefault();

    formArea.forEach(function(data){
        const itemDoInput = data.parentElement;
        let = dataValue = data.value;
        if(dataValue === "") {
            itemDoInput.classList.remove("success");
            itemDoInput.classList.add("error");
        } else {
            itemDoInput.classList.remove("error");
            itemDoInput.classList.add("success");
        }
    });
});