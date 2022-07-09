
var personarray = [];
var blogarray = [];
var filterarray = [];
var index;
function view_blogs() {
    if (!localStorage.global_email) {
        window.location.href = "../html/domain.html";
    }


    var wel = localStorage.getItem("global_email");
    document.getElementById("set_name").innerHTML = "Welcome" + " " + wel;

    blogarray = JSON.parse(localStorage.blogrecord);
    for (var i = 0; i < blogarray.length; i++) {
        blogarray[i].book_id = 'card'+i;
    }
    localStorage.blogrecord = JSON.stringify(blogarray);
    blogarray = JSON.parse(localStorage.blogrecord);
    for (var i = 0; i < blogarray.length; i++) {
        let str = blogarray[i].email;
        if (str === wel) {
            filterarray.push(blogarray[i]);
        }
    }




    for (var i = 0; i < filterarray.length; i++) {

        var main_div = document.getElementById('d_rend');
        var div1 = document.createElement("div");
        div1.className = "col-sm-12 col-md-6 col-lg-4 pb-2";
        div1.id = filterarray[i].book_id;




        var div2 = document.createElement("div");
        div2.className = "card";
        div2.style.width = "18rem";
        div2.style.minHeight = "12rem";
        var div3 = document.createElement("div");
        div3.className = "card-body";
        var h1 = document.createElement("h5");
        h1.textContent = filterarray[i].title;
        var p1 = document.createElement("p");
        p1.textContent = filterarray[i].description;

        var btn1 = document.createElement("button");
        btn1.className = "btn btn-primary after_mybtn1";
        btn1.textContent = "Edit";
        btn1.setAttribute('data-toggle','modal');
        btn1.setAttribute('data-target','#exampleModalCenter');
        btn1.onclick = function () {
            edit_card(this);
        };

        var btn2 = document.createElement("button");
        btn2.className = "btn btn-danger after_mybtn2  ";
        btn2.textContent = "Delete";
        btn2.onclick = function () {
            delete_card(this);
        };
        div3.appendChild(h1);
        div3.appendChild(p1);
        div3.appendChild(btn1);
        div3.appendChild(btn2);
        div2.appendChild(div3);
        div1.appendChild(div2);
        main_div.appendChild(div1);
 
    }


}
function delete_card(e) {
    var id1 = e.parentNode.parentNode.parentNode.getAttribute("id");

    var dltcard = document.getElementById(id1);
    dltcard.remove();
    blogarray = JSON.parse(localStorage.blogrecord);
    for (var i = 0; i < blogarray.length; i++) {
        if (blogarray[i].book_id == id1) {
            blogarray.splice(i, 1);
            break;

        }


    }
    localStorage.blogrecord = JSON.stringify(blogarray);

}
function edit_card(e) {
 
   
    var id1 = e.parentNode.parentNode.parentNode.getAttribute("id");
    blogarray = JSON.parse(localStorage.blogrecord);
    for (var i = 0; i < blogarray.length; i++) {
        if (blogarray[i].book_id == id1) {
            index = i;
            break;
        }
    }

    var tit = blogarray[index].title;
    

    var desc = blogarray[index].description;

    
    document.getElementById("title").value=tit;
    document.getElementById("description").value=desc;
   




}
function logoutpage() {
    localStorage.removeItem("global_email");
    window.location.href = "../index.html";

}




function savechanges(){
   
    
    blogarray=JSON.parse(localStorage.blogrecord);
    blogarray.splice(index,1);
    
   
    localStorage.blogrecord=JSON.stringify(blogarray);
    var em1= localStorage.getItem("global_email");

    var tit = document.getElementById("title").value;
    var des = document.getElementById("description").value;
    if(localStorage.blogrecord){
        blogarray=JSON.parse(localStorage.blogrecord);
       
   var blogobject={email:em1,title:tit,description:des};
    blogarray.push(blogobject);
    //console.log(bookarray);
    localStorage.blogrecord=JSON.stringify(blogarray);
     alert('You suceesfully changed blog.');
     window.location.href="../html/after_login.html";
    }
    else{
        var blogobject={email:em1,title:tit,description:des};
        blogarray.push(blogobject);
        //console.log(bookarray);
        localStorage.blogrecord=JSON.stringify(blogarray);
       
         alert('You suceesfully changed blog. ');
         window.location.href="../html/after_login.html";
    }
   

}

