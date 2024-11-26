let b = document.querySelector('button');
b.addEventListener('click',ipMsg);
function ipMsg(){
    let name = prompt("Enter some thing: ");
    b.textContent = name;
    alert("Your name is :"+name)
}