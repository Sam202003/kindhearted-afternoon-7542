function funx(){
    window.location.href="../../index.html"
 }

 function funsignin(){
    console.log("iam signup")
    window.location.href="signin.html"
}

function funterms(){
    console.log("iam term")
    window.location.href="../../index.html"

}

function funsignupbutton(){
    let arr=JSON.parse(localStorage.getItem("signUpkey")) ||[ ];

    function signupdata(name,email,password){
        this.Name=name;
        this.Email=email;
        this.Password=password;
    }

    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let data = new signupdata(name,email,password)
    if(name===""||email===""||password==="")
    {
        document.getElementById("wrongdetials").innerHTML=null;
        console.log("yes")
        let wrong=document.createElement("p")
        wrong.innerText="Please Fill The Credentials"
        wrong.style.color="red"
        document.getElementById("wrongdetials").append(wrong)
    }
    else if(password.length<8)
    {
        document.getElementById("wrongdetials").innerHTML=null;
        console.log("yes its less")
        let wrong=document.createElement("p")
        wrong.innerText="Password Should Have Atleast 8 charecters*"
        wrong.style.color="red"
        document.getElementById("wrongdetials").append(wrong)
    }
    else{

     if(password.includes("@") || password.includes("!") ||password.includes("`") || password.includes("#")){
        document.getElementById("wrongdetials").innerHTML=null;
        arr.push(data)
        console.log(arr)
        localStorage.setItem("signUpkey",JSON.stringify(arr));
        alert("signup sucessfull")
        window.location.href="signin.html"
          }
    else{
        document.getElementById("wrongdetials").innerHTML=null;
        console.log("yes its less")
        let wrong=document.createElement("p")
        wrong.innerText="Password Should Have Atleast 8 charecters and One special charecters*"
        wrong.style.color="red"
        document.getElementById("wrongdetials").append(wrong)
    }
    }
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
}



