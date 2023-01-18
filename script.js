var gender1 = document.getElementById("txt7");
// var name = document.getElementById("txt1").value;
var gender2 = document.getElementById("txt7_1");
let arr =[];

function regestration()
{
    var name = document.getElementById("txt1").value;
    var email = document.getElementById("txt2").value;
    var country = document.getElementById("txt3").value;
    var mobile = document.getElementById("txt4").value;
    var zip = document.getElementById("txt5").value;
    var date = document.getElementById("txt6").value;
    var gender1 = document.getElementById("txt7");
    var gender2 = document.getElementById("txt7_1");

    var error1=document.getElementById("cname1");
    var error2=document.getElementById("cname2");
    var error3=document.getElementById("cname3");
    var error4=document.getElementById("cname4");
    var error5=document.getElementById("cname5");
    var error6=document.getElementById("cname6");
    var error7=document.getElementById("cname7");
    var error7_1=document.getElementById("cname7_1");


    var regex = /(^[a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z]+)?$/;
   
    
    if (name == '' )
    {
      error1.textContent = " *Please Enter Your Name";  
    }
    else 
    {
        error1.textContent = "";
    }
    if (email == '' )
    {
      error2.textContent = " *Please Enter Your Email-id";   
    }
    else if(regex.test(email) == false)
    {
      error2.textContent = " *Invalid Email-id";
    }
    else 
    {
        error2.textContent = "";
    }
    if (country == "")
    {
      error3.textContent = " *Please Enter Your Country";
    }
    else 
    {
        error3.textContent = "";
    }
    if (mobile == '' )
    {
      error4.textContent = " *Please Enter Your Mobile Number";   
    }
    else if(mobile.length < 10 || mobile.length > 10)
    {
      error4.textContent = " * Mobile Number must be 10 digit ";        
    }
    // else if((mobile.charAt(0)!=9) && (mobile.charAt(0)!=8) && (mobile.charAt(0)==7))
    // {
    //   error4.textContent = " * Mobile Number must start with 9,8  or 7 ";
    // }
    else if(mobile == NaN)
    {
      error4.textContent = " * Not a Mobile Number";       
    }
    else 
    {
        error4.textContent = "";
    }
    if ( zip == '' )
    {
      error5.textContent = " *Please Enter Zip Code";       
    }
    else if(zip.length > 6 || zip.length < 6)
    {
      error5.textContent = "* Invalid Zip Code";      
    }
    else if(zip == NaN)
    {
      error5.textContent = "* Invalid Zip Code";      
    }
    else 
    {
        error5.textContent = "";
    }
    if (date == '' )
    {
      error6.textContent = " *Please Enter Date";        
    }
    else 
    {
        error6.textContent = "";
    }
    // if(gender1.checked == false && gender2.checked == false)
    // {
    //   error7.textContent="Please";
    // }
    if (gender1.checked == false  )
    {
      error7.textContent = " *Please Enter Your Gender";       
    }
    else 
    {
      error7_1.style.display="none";
        error7.textContent = "";
    }
    if (gender2.checked == false)
    {
      error7.style.display="none";
      error7_1.textContent = " *Please Enter Your Gender";       
    }
    else 
    {
        error7_1.textContent = "";
    }     
    if((name != '') && (mobile.length ==10 ) && ( zip.length == 6 )&&(email != '') &&(regex.test(email) == true) &&(country != "" ) &&(mobile != '') &&(mobile != NaN) &&( zip != '') &&(zip != NaN) &&(date != '') &&(gender1.checked == true || gender2.checked ==true))
    {    
        let item ={
            Name : document.getElementById("txt1").value,
            Email : document.getElementById("txt2").value,
            Country : document.getElementById("txt2").value,
            Mobile_num : document.getElementById("txt2").value,
            Zip : document.getElementById("txt2").value,
            Date : document.getElementById("txt2").value,
            Gender : document.getElementById("txt2").value,
         }
         user=JSON.parse(localStorage.getItem("user1"));
         if(user==null){
            arr=[];
         }
         else{
            ar=JSON.parse(localStorage.getItem("user1"));
            arr.push(item);
            console.log(arr);
         }
          localStorage.setItem("user1",JSON.stringify(arr));
    }
}
function Blank()
{
    document.getElementById("txt1").value='' 
    document.getElementById("txt2").value='' 
    document.getElementById("txt3").value='' 
    document.getElementById("txt4").value='' 
    document.getElementById("txt5").value='' 
    document.getElementById("txt6").value='' 
    document.getElementById("txt7").value='' 
    document.getElementById("cname1").textContent= ''
    document.getElementById("cname2").textContent= ''
    document.getElementById("cname3").textContent= ''
    document.getElementById("cname4").textContent= ''
    document.getElementById("cname5").textContent= ''
    document.getElementById("cname6").textContent= ''
    document.getElementById("cname7").textContent= ''
    document.getElementById("txt7").checked=false;
    document.getElementById("txt7_1").checked=false;
}
