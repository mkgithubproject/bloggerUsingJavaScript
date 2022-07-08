
var personarray = [];
var blogarray = [];


function view_blogs() {
    var i;
    if (localStorage.global_email) {
        window.location.href = "../html/after_login.html";
    }
    else {

        blogarray = JSON.parse(localStorage.blogrecord);

        for (i = 0; i < blogarray.length; i++) {

            var main_div = document.getElementById('d_rend');
            var div1 = document.createElement("div");
            div1.className = "col-sm-12 col-md-6 col-lg-4 pb-2";
            var div2 = document.createElement("div");
            div2.className = "card";
            div2.style.width = "18rem";
            div2.style.minHeight = "12rem";
            var div3 = document.createElement("div");
            div3.className = "card-body";
            var h1 = document.createElement("h5");
            h1.textContent = blogarray[i].title;
            var p1 = document.createElement("p");
            p1.textContent = blogarray[i].description;
            p1.id='para'+i;
            p1.style.display="none";
            var btn = document.createElement("button");
            btn.className = "btn btn-primary btn-bot";
            btn.textContent = "Show Details";
            btn.onclick=function(){
                Show_Details(this);
            };
            div3.appendChild(h1);
            div3.appendChild(p1);
            div3.appendChild(btn);
            div2.appendChild(div3);
            div1.appendChild(div2);
            main_div.appendChild(div1);

        }

    }

}

function Show_Details(e){
    var nodes= e.parentNode.childNodes;
    var id1=nodes[1].getAttribute("id");
     var x=document.getElementById(id1);
    
     if(x.style.display === "none"){
         x.style.display="block";
     }
     else{
         x.style.display="none";
     }
     

}


