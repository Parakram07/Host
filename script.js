document.getElementById("parent").innerHTML=("Something Else");
document.getElementById("parent").style.cssText=("background-color:red; color:black; text-align:center");
document.getElementsByClassName("exercise")[0].innerHTML=("i am class selector");

document.getElementById("parent1").style.cssText=("background-color:aqua; color:brown");

document.getElementsByClassName("exercise")[2].innerHTML=("I am index 3");

document.getElementsByTagName("h1")[1].style.cssText=("background-color:pink; color:white");

document.querySelector("h2").style.cssText=("text-align:center; text-transform:uppercase");
document.querySelector("#hi").style.cssText=("text-align:center; text-transform:uppercase");
document.querySelector(".hey").style.cssText=("text-align:center; text-transform:uppercase");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Parakram KC")
}
function myFunction(){
    document.open();
    document.write("<h1>Hello World</h1>");
    document.close();
}
