var personarray=[]; 
var blogarray=[];
 
 
function create_blogs(){
    
    var tit = document.getElementById("title").value;
    var des = document.getElementById("description").value;
    var em1= localStorage.getItem("global_email");
    if(localStorage.blogrecord){
        blogarray=JSON.parse(localStorage.blogrecord);
      
      
     
   var blogobject={email:em1,title:tit,description:des};
  
    blogarray.push(blogobject);
    //console.log(bookarray);
    localStorage.blogrecord=JSON.stringify(blogarray);
     alert('You suceesfully added blog.');
    }
    else{
        var blogobject={email:em1,title:tit,description:des};
        blogarray.push(blogobject);
        //console.log(bookarray);
        localStorage.blogrecord=JSON.stringify(blogarray);
       
         alert('You suceesfully added blog.');
    }
}
function logoutpage(){
    localStorage.removeItem("global_email");
    window.location.href="../index.html";

}

function authent(){
    if(!localStorage.global_email){
        window.location.href="../html/domain.html";
    }
    }


