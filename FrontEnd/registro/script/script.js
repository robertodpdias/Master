(init)();
let img;

document.querySelector("select").addEventListener("focus", () => {
    document.querySelector("select").style.color = "black";
    document.querySelector("select").style.fontWeight = "500";
})

function registro() {
    let nome = document.querySelector("#reg_nome").value;
    let cpf = document.querySelector("#reg_cpf").value;
    let email = document.querySelector("#reg_email").value;
    let cargo = document.querySelector("#reg_cargo").value;
    let tel = document.querySelector("#tel").value;
    let pw1 = document.querySelector("#reg_pw1").value;
    let pw2 = document.querySelector("#reg_pw2").value;
    let pwf = "";
    let url = 'http://10.87.207.30:3000/usuario';
    // let url = 'http://localhost:3000/usuario';

    console.log(nome, cpf, cargo, email, tel, pw1, pw2)

    if(pw1 == pw2){
        pwf = md5(pw1);
    

    let obj = {
        "nome" : nome,
        "telefone" : tel,
        "cargo" : cargo,
        "email" : email,
        "senha" : pwf,
        "cpf" : cpf,
        "foto" : img,
        "resetsenha" : false
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    }).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        console.log(data);

    }).catch(err => {
        console.log(err);
    })

alert("Usuario cadastrado com sucesso!")

    nome.value = "";
    cpf.value = "";
    email.value = "";
    cargo.value = "";
    tel.value = "";
    pw1.value = "";
    pw2.value = "";

    }else{
        alert("As senhas não são iguais!");
    }
}


function events(){
    document.getElementById("avatar").addEventListener("change", (e) => {
        const file = e.target.files[0];
        document.getElementById("avatar").dataset.content = file.name;
        const reader = new FileReader();
        reader.onloadend = () => {
            img = reader.result;
            
        };
        
        reader.readAsDataURL(file);
    });
}

function init(){
    events();
}