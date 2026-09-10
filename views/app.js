let Btnventi=document.getElementById("Btnventi")
let Btneclairage=document.getElementById("Btneclairage")
let Btnporte=document.getElementById("Btnporte")
let divVent=document.getElementById("divVent")
let divLum=document.getElementById("divLum")
let divPort=document.getElementById("divPort")
let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let Echambre=document.getElementById("Echambre")
let Esalon=document.getElementById("Esalon")
let vsalon=document.getElementById("vsalon")
let vchambre=document.getElementById("vchambre")
let porte=document.getElementById("porte")
let alarme=document.getElementById("alarme")


Btneclairage.addEventListener("click",()=>{
Btneclairage.style.backgroundColor = "#13d413"
divVent.style.display ="none"
divPort.style.display ="none"
Btnporte.style.backgroundColor = "black"
divLum.style.display ="flex"
Btnventi.style.backgroundColor ="black"
})

Btnporte.addEventListener("click",()=>{
Btnporte.style.backgroundColor = "#13d413"
Btneclairage.style.backgroundColor = "black"
divLum.style.display ="none"
divPort.style.display ="flex"
Btnventi.style.backgroundColor ="black"
 divVent.style.display ="none"
})

       Btnventi.addEventListener("click",()=>{
       Btnventi.style.backgroundColor = "#13d413"
       Btneclairage.style.backgroundColor = "black"
       Btnporte.style.backgroundColor = "black"
       divLum.style.display ="none"
       divPort.style.display ="none"
       divVent.style.display ="flex"
       })

       let allume=false
       div1.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div1.style.transition="0.6s"
                div1.style.justifyContent="flex-end"
                div1.style.backgroundColor="#13d413"  
                vsalon.textContent="Allumé"   
              }else{
                  div1.style.justifyContent="flex-start"
                  div1.style.backgroundColor="gray"  
                  vsalon.textContent="Eteinte" 
              }
              
       })

       div2.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div2.style.justifyContent="flex-end"
                div2.style.transition="0.6s"
                div2.style.backgroundColor="#22e832"   
                vchambre.textContent="Allumé"  
              }else{
                  div2.style.justifyContent="flex-start"
                  div2.style.backgroundColor="gray" 
                  vchambre.textContent="Eteinte"  
              }
              
       })

       div3.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div3.style.justifyContent="flex-end"
                div3.style.transition="0.6s"
                div3.style.backgroundColor="#22e832"  
                Esalon.textContent="Allumée"    
              }else{
                  div3.style.justifyContent="flex-start"
                  div3.style.backgroundColor="gray"  
                  Esalon.textContent="Eteinte"  
              }
              
       })

       div4.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div4.style.justifyContent="flex-end"
                div4.style.transition="0.6s"
                div4.style.backgroundColor="#22e832"
                Echambre.textContent="Allumée"     
              }else{
                  div4.style.justifyContent="flex-start"
                  div4.style.backgroundColor="gray"  
                  Echambre.textContent="Eteinte"  
              }
              
       })

       div5.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div5.style.justifyContent="flex-end"
                div5.style.transition="0.6s"
                div5.style.backgroundColor="#22e832" 
                porte.textContent="Déverrouillée"    
              }else{
                  div5.style.justifyContent="flex-start"
                  div5.style.backgroundColor="gray"
                  porte.textContent="Vérrouillée"   
              }
              
       })

       div6.addEventListener("click",()=>{
              allume=!allume
              if (allume) {
                div6.style.justifyContent="flex-end"
                div6.style.transition="0.6s"
                div6.style.backgroundColor="#22e832" 
                alarme.textContent="Activée"    
              }else{
                  div6.style.justifyContent="flex-start"
                  div6.style.backgroundColor="gray" 
                  alarme.textContent="Desactivée"  
              }
              
       })
















// const form = document.querySelector("#login-form");
// const message = document.querySelector("#message");

// const password = "12345678";

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const pass = document.querySelector("#password").value;

//     if (pass === password) {
//         window.location.href = "app.html";
//     } else {
//         message.className ="p-3 rounded-lg mb-4 bg-red-100 text-red-700 text-center font-bold";
//         message.textContent = "Mot de passe incorrect.";
//     }
// });

    

