var form = document.getElementById('myform').addEventListener('submit',e =>{
e.preventDefault();
var u_username = document.getElementById('username').value;
var u_password = document.getElementById('vid').value;
var formData = new FormData();
formData.append("booth_number",u_username);
formData.append("booth_password",u_password);
fetch('http://voting-back.atwebpages.com/boothlogin.php',{
    method:'POST',
    body:formData
}).then(response => response.text()).then(response =>{
    console.log(response);
    if(JSON.parse( response)[0].message==="success"){
        location.href="index.html";
    }
    else{
        document.getElementById("alreadyvoted").innerHTML="You must have already casted your vote if not contact service desk";
        // console.log("not");
    }

})
.catch(err => console.log(err));
})