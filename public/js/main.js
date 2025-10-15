const registerForm = document.querySelector("#form-register");

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputs = this.querySelectorAll("input");
    const dataInfoSend = {};
    
    inputs.forEach(input => {
        const clave = input.name;
        const valor = input.value;
        dataInfoSend[clave] = valor;
    });

    console.log(dataInfoSend)

})