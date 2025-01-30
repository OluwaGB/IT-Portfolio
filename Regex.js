
password = prompt("enter your password")
passwordRegex = /ace$/
checkPassword= passwordRegex.test(password);
if(checkPassword==true){
    alert("strong password,it cannot be compromised")
} else{
    alert("Password not strong and can be easily compromised")
}
/*alert("jesus")
//console.info ("jesus")
console.log("hello")
console.log("hello world")*/

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

//console.log("hello");

menu.addEventListener('click',()=>{
    alert("hello")
    if(menus.style.display === 'block'){
        menus.style.display='none'
    } 
else{menus.style.display = 'block'};

/*const toggleElement =  [21,24,35,43,22]
for(i=0;i<toggleElement.length; i++){
    alert(toggleElement[i]); 
}*/
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
for(x=0; x<list.length; x++){
    list[1].addEventListener('click',()=>{
       // console.log("render");
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

 