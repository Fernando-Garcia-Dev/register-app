const registerForm = document.querySelector("#form-register");

registerForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const inputs = this.querySelectorAll("input");
    const dataInfoSend = {};
    
    inputs.forEach(input => {
        const clave = input.name;
        const valor = input.value;
        dataInfoSend[clave] = valor;
    });

    const resp = await fetch('/register',{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataInfoSend)
    });
    
    const data = await resp.text();
    console.log(data);

})