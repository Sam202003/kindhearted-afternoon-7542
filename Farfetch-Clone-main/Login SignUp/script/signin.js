
function funx(){
   window.location.href="../../index.html"
}

function funsignup(){
    console.log("iam signup")
    window.location.href="signUp.html"
}

function funnewtoff(){
    console.log("iam new to ff")
    window.location.href="signUp.html"
}

let signUpdata = JSON.parse(localStorage.getItem("signUpkey"));
console.log(signUpdata);
function funsignbutton()
{
    let email=document.getElementById("email").value;
    let password= document.getElementById("password").value;

    if(email==="" || password===""){
        console.log("Empty")
        document.getElementById("wrongdetials").innerText=null;
        let wrong=document.createElement("p")
        wrong.innerText="Incorrect email or password*"
        wrong.style.color="red"
        document.getElementById("wrongdetials").append(wrong)
    }

    let checkdata = signUpdata.find(c=>c.Email==email && c.Password==password)
    console.log(checkdata);

    if(!checkdata)
    {
        console.log("wrongdata")
        document.getElementById("wrongdetials").innerText=null;
        let wrong=document.createElement("p")
        wrong.innerText="Incorrect email or password*"
        wrong.style.color="red"
        document.getElementById("wrongdetials").append(wrong)
    }
    else if(checkdata.Email==email && checkdata.Password==password)
   {
    document.getElementById("wrongdetials").innerText=null;
    alert("Signin Successfull :)")
    window.location.href="../../index.html"
   }

    document.getElementById("email").value=null;
    document.getElementById("password").value=null;

}

function funforgetpass(event){
     let confrimemail = prompt("Comfirm Your Email")
     
    let checkdata=signUpdata.find(c=>c.Email==confrimemail )
    if(checkdata===undefined)
    {
        alert("Sorry Email Not Found!!")
    }

    if(confrimemail===checkdata.Email){
        var confir =confirm("Are You Sure You Want to Change Your Password");
        funabc();
      function funabc(){
        if(confir){
            let newpass = prompt("Enter Your New Password");
            if(newpass.length>=8 && newpass.includes("@")|| newpass.includes("#")|| newpass.includes("`")|| newpass.includes("!"))
            {
                alert("Password Changed Seccessfully");
                let freshData=[];

               function Senddata(name,email,password){
                      this.Name=name;
                       this.Email=email;
                       this.Password=password;
                }
                let name= checkdata.Name;
                let email= checkdata.Email
                let password=newpass;

                let p= new Senddata(name,email,password)
                freshData.push(p)
                localStorage.setItem("signUpkey",JSON.stringify(freshData)) 
                console.log("iam reload")
                window.location.reload();
            }
            else{
                confirm("Password Should Have Atleast 8 Charecters and One special Charecter*");
                newpass = prompt("Enter Your New Password");
                funabcd();
                function funabcd(){
                    if(newpass.length>=8 && newpass.includes("@")|| newpass.includes("#")|| newpass.includes("`")|| newpass.includes("!"))
                    {
                        alert("Password Changed Seccessfully");
                        let freshData=[];

               function Senddata(name,email,password){
                      this.Name=name;
                       this.Email=email;
                       this.Password=password;
                }
                let name= checkdata.Name;
                let email= checkdata.Email
                let password=newpass;

                let p= new Senddata(name,email,password)
                freshData.push(p)
                localStorage.setItem("signUpkey",JSON.stringify(freshData)) 
                console.log("iam reload")
                window.location.reload();
                    }
                }
            }    
        }

        else {
            alert("Email Doesn't Match")
            localStorage.setItem("signUpkey",JSON.stringify(signUpdata))
             }
    }   
      }     


}