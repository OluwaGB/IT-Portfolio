console.log("hello")
console.log("hello world")

icon = document.querySelectorAll("#icon");

const render= document.querySelector('#render');
//render = document.getElementById("render")
content = document.querySelector("#content");
newContent = document.querySelector("#rerender");
wrapper = document.querySelector('#wrapper');
p= document.getElementById("dsc");
menu= document.querySelector('#menu');
menus= document.querySelector('#menus');
list = document.querySelectorAll('#list');
 menubar = document.querySelector('#menubar');
 button = document.getElementsByTagName('button')
text=document.getElementById('dsc');
project = document.querySelector('#projects');
toggleImgs = document.querySelector('#toggleImgs');
form = document.getElementById("form");
viewer = document.getElementById("viewer")
toggleImgs = document.getElementById("toggleImgs")

console.log("hello");
for(x=0; x<list.length; x++){
    list[1].addEventListener('click',()=>{
        console.log("render");
        newContent.style.display= "block";
        content.style.display="none"
        project.style.display="none"
        form.style.display ="none"
        //content.style.display="none  "
        //https://drive.google.com/drive/folders/1LYpMCRDxejVuJDFOfRkc-GCWUht_HcDk?usp=drive_link

    })
    list[0].addEventListener('click',()=>{
        console.log("render");
        newContent.style.display= "none";
        toggleImgs.display = "none"
        content.style.display="block"
        project.style.display="none"
        form.style.display ="none"

    })
    list[2].addEventListener('click',()=>{
        console.log("render");
        newContent.style.display= "none";
        content.style.display="none";
        project.style.display="block";
        form.style.display ="none"
       /* wrapper.style.backgroundColor="black";*/

    })
    list[4].addEventListener('click',()=>{
        console.log("render");
        newContent.style.display= "none";
        toggleImgs.display = "none"
        content.style.display="none"
        project.style.display="none"
        form.style.display ="block"
        viewer.style.display = "none";

    })
}
for(i=0; i<icon.length; i++){
    icon[5].addEventListener('click',()=>{
        console.log("alertmode");
         //newContent.style.backgroundColor = "white";
       content.style.display = content.style.display === 'block'? 'none' : 'block';
       if(content.style.display === 'block'){
        content.style.display = 'none'
       }else{
        content.style.display = 'block'
       }
        //let  = wrapper.style.backgroundColor;
        //render.style.display = render.style.display === "block" ? "none" : "block"
        //wrapper.style.backgroundColor = wrapper.style.backgroundColor === 'black' ? 'white' : 'black';
       /* if(backgroundColor === 'black'){
            backgroundColor = 'white';
        }else{
            backgroundColor = 'black'
        }

*/
         
    })
    icon[4].addEventListener('click',()=>{
        //alert("hello world");
        newContent.style.display= "none";
        content.style.display="none";
        project.style.display="none";
        form.style.display ="block";
         
         let background = 'none'
        background = background === 'none'? 'block' : 'none'
        document.getElementsByClassName('wrapper').style.display = background;
    })
    icon[0].addEventListener('click', ()=>{
        //,.mnll;
        console.log("hello")
        content.style.display="block";
        wrapper.style.backgroundColor = wrapper.style.backgroundColor === 'black' ? 'white' : 'black';


        wrapper.style.backgroundColor ="black";
        newContent.style.display="none";
        project.style.display="none";
        

    })
    icon[1].addEventListener('click', ()=>{
        console.log("hello")
        content.style.display="none";
        wrapper.style.backgroundColor ="black";
        newContent.style.display="block";
        project.style.display="none"
        

    })
    icon[2].addEventListener('click', ()=>{
        //console.log("hello")
        content.style.display="none";
        wrapper.style.backgroundColor ="transparent";
        newContent.style.display="none";
        project.style.display = "block";
        wrapper.style.backgroundColor="black";
        

    })
}


menu.addEventListener('click',()=>{console.log("hello")
    if(menus.style.display === 'block'){
        menus.style.display='none'
    } 
else{menus.style.display = 'block'};

const toggleElement =  [21,24,35,43,22]
for(i=0;i<toggleElement.length; i++){
    alert(toggleElement[i]); 
}
   /*menubar.style.backgroundColor="rgba(255, 252, 252, 0.99)";*/
    document.querySelector('#dropdowns').style.display = 'block';
if(wrapper.style.backgroundColor==="black"){
    list.style.color = "white";
    menubar.style.backgroundColor="transparent";

}else{
    list.style.color = "black";
    menubar.style.backgroundColor="transparent";
}
 
})
viewer = document.getElementById("viewer");
toggleBtn = document.getElementById("toggle");
toggleArray = ["img/07d7aa4a12f00583de5117f76a2e915f.jpg","img/38163-St-Peters-Square.jpg","img/507063-mykonos.jpg"]
//let currentIndex = 0;
/*picture = document.getElementsByClassName("tImgs")
//toggleBtn.addEventListener('click',()=>{//console.log(toggleArray[currentIndex])
    for(i=0; i<toggleArray.le
    ngth; i++){
   viewer.setAttribute('src',toggleArray[i].src)
console.log(`${viewer.src}`)}*/
    /*for(i=0; i<toggleArray.length; i++){
        console.log("toggleArray");
        console.log(toggleArray);
        console.log(toggleArray[i]);

        viewer.src = toggleArray[i].src

    }*/
   //let currentIndex = 0;
   //picture = document.getElementsByClassName("tImgs");
   //picture.src = (currentIndex >= toggleArray.length)? toggleArray[0].src : toggleArray[currentIndex].src;
   /*toggleArray = ['img/07d7aa4a12f00583de5117f76a2e915f.jpg','img/38163-St-Peters-Square.jpg','img/507063-mykonos.jpg']
   var currentIndex = 0;
   currentIndex++
  var  picture = document.getElementsByClassName('tImgs')
   if(currentIndex >= toggleArray.length){
    currentIndex = 0;
   }
   picture.src = toggleArray[currentIndex];
   //picture.setAttribute('src',toggleArray[currentIndex]);
   console.log(`${picture.src}`);
   console.log(`${picture}`)
})*/
//alert("working");
/*vartoggleArray = ['img/places2.jpg','img/07d7aa4a12f00583de5117f76a2e915f.jpg','img/38163-St-Peters-Square.jpg','img/507063-mykonos.jpg']
toggle = document.getElementById('toggle');
var currentIndex = 0;
toggle.addEventListener('click',()=>{
var picture = document.getElementsByClassName('picture');
currentIndex++
if(currentIndex >= toggle.length){
    currentIndex = 0;
}
picture.src = toggleArray[currentIndex]
   
   currentIndex--
   if(currentIndex < toggleArray.length){
    currentIndex = toggleArray.length - 1;
   }
   picture.src= toggleArray[currentIndex] 
   console.log(picture.src);
    
})*/

signup = document.getElementById("signup");
    signin = document.getElementById("signin");
s1 = document.getElementById("s1");
s2 = document.getElementById("s2")
s1.onclick = function show(){
    signup.style.display ="block";
    signin.style.display = "none";
    alert("signup")}
    s2.addEventListener('click',()=>{
        signup.style.display ="none";
        signin.style.display = "block";
        //alert("signin")})
    })
formBtn = document.getElementsByClassName('formBtn');
for(let i=0; i<formBtn.length; i++){
    
    formBtn[0].addEventListener('click',()=>{
        signup.style.display ="block";
        signin.style.display = "none"
        alert("signup")
            })
            formBtn[1].addEventListener('click',()=>{
                signin.style.display ="block";
                signup.style.display = "none"
                alert("signin")
                    })
}


 