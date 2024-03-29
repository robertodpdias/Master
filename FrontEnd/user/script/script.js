var id = JSON.parse(localStorage.getItem("user"));
// let url = 'http://10.87.207.30:3000/usuario/' + id;
let url = 'http://localhost:3000/usuario/' + id;
var btn_new_user = document.querySelector(".btn_new_user");
var btn_resetPw = document.querySelector(".btn_resetPw");

getInfo()

function getInfo() {

    fetch(url)
    .then(res => {
        return res.json();
    }).then(data =>{
        let avatar = document.querySelector("#avatar");
        let user = document.querySelector(".user");
        let fields = document.querySelector(".fields");

        
        avatar.src = data[0].foto;
        user.querySelector("h3").innerHTML = data[0].nome;
        fields.querySelector(".campo_cpf").value = data[0].cpf;
        fields.querySelector("#user_email").value = data[0].email
        fields.querySelector("#tel").value = data[0].telefone

        if(data[0].cargo == "Coordenador de Atividades Técnicas" || data[0].cargo == "Diretor de Unidade de Formação Profissional" || data[0].cargo == "Orientador de Prática Profissional"){
            btn_new_user.style.display = "block";
            btn_resetPw.style.display = "block";
        }else{
            btn_new_user.style.display = "none";
            btn_resetPw.style.display = "none";
        }
    }).catch(err =>[
        console.log(err)
    ])
}

function update(){
    let email = document.querySelector("#user_email").value;
    let tel = document.querySelector("#tel").value;

    let obj = {
        "telefone" : tel,
        "email" : email,
    }

    fetch(url, {
        method: "PUT",
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
}

function sair() {
    localStorage.removeItem("user");
    window.location.href="../login/index.html";
}

function funcionarios() {
    window.location.href="../funcionarios/index.html";
}

function register() {
    window.location.href="../registro/index.html";
}

function pwReview(e){
    let pwe = e.parentNode.querySelector("input");
    const type = pwe.getAttribute('type') === 'password' ? 'text' : 'password';
    pwe.setAttribute('type', type);
    e.classList.toggle('bi-eye');
}