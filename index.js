const btn = document.getElementById("btn");

btn.addEventListener("click", function(e){
    const doll = document.getElementById("dollars").value
   const naira = document.getElementById ("naira");
naira.value = doll * 515;
e.preventDefault()
});