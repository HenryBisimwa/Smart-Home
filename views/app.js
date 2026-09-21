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
let div8=document.getElementById("div8")
let Eexte=document.getElementById("Eexte")
let bt8=document.getElementById("Bt8")


const ESP32_URL = "http://192.168.4.1"

function envoyerCommande(appareil, action) {
    fetch(`${ESP32_URL}/${appareil}/${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de communication avec l'ESP32")
            }

            console.log(`Commande envoyée : ${appareil} → ${action}`)
        })
        .catch(error => {
            console.log("ESP32 non disponible :", error)
        })
}


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
divVent.style.display ="block"
})

       let salonAllume = false
       let chambreAllume = false
       let salonVentilateur = false
       let chambreVentilateur = false
       let porteOuverte = false
       let alarmeActive = false
       let Exteallume=false
       div1.addEventListener("click",()=>{
              salonVentilateur=!salonVentilateur
              if (salonVentilateur) {
                div1.style.transition="0.6s"
                div1.style.justifyContent="flex-end"
                div1.style.backgroundColor="#13d413"  
                vsalon.textContent="Allumé"   

                envoyerCommande("ventilateur-salon","on")
              }else{
                  div1.style.justifyContent="flex-start"
                  div1.style.backgroundColor="gray"  
                  vsalon.textContent="Eteinte" 

                  envoyerCommande("ventilateur-salon","off")
              }
              
       })

    //    div2.addEventListener("click",()=>{
    //           chambreVentilateur=!chambreVentilateur
    //           if (chambreVentilateur) {
    //             div2.style.justifyContent="flex-end"
    //             div2.style.transition="0.6s"
    //             div2.style.backgroundColor="#22e832"   
    //             vchambre.textContent="Allumé"  

    //             envoyerCommande("ventilateur-chambre","on")
    //           }else{
    //               div2.style.justifyContent="flex-start"
    //               div2.style.backgroundColor="gray" 
    //               vchambre.textContent="Eteinte"  

    //               envoyerCommande("ventilateur-chambre","off")
    //           }
              
    //    })

       div3.addEventListener("click",()=>{
              salonAllume=!salonAllume
              if (salonAllume) {
                div3.style.justifyContent="flex-end"
                div3.style.transition="0.6s"
                div3.style.backgroundColor="#22e832"  
                Esalon.textContent="Allumée"   
                
                envoyerCommande("lampe-salon","on")
              }else{
                  div3.style.justifyContent="flex-start"
                  div3.style.backgroundColor="gray"  
                  Esalon.textContent="Eteinte" 
                  
                  envoyerCommande("lampe-salon","off")
              }
              
       })

    //     div8.addEventListener("click",()=>{
    //           Exteallume=!Exteallume
    //           if (Exteallume) {
    //             div8.style.transition="0.6s"
    //             div8.style.justifyContent="flex-end"
    //             div8.style.backgroundColor="#13d413"  
    //             Eexte.textContent="Allumé"   

    //             envoyerCommande("lampe-exterieure","on")
    //           }else{
    //               div8.style.justifyContent="flex-start"
    //               div8.style.backgroundColor="gray"  
    //               Eexte.textContent="Eteinte" 

    //               envoyerCommande("lampe-exterieure","off")
    //           }
              
    //    })

       div4.addEventListener("click",()=>{
              chambreAllume=!chambreAllume
              if (chambreAllume) {
                div4.style.justifyContent="flex-end"
                div4.style.transition="0.6s"
                div4.style.backgroundColor="#22e832"
                Echambre.textContent="Allumée"   
                
                envoyerCommande("lampe-chambre","on")
              }else{
                  div4.style.justifyContent="flex-start"
                  div4.style.backgroundColor="gray"  
                  Echambre.textContent="Eteinte"  

                  envoyerCommande("lampe-chambre","off")
              }
              
       })

       // ===== CLAVIER DE LA PORTE =====

let clavierPorte = document.getElementById("clavierPorte");
let affichageCode = document.getElementById("affichageCode");
let messageCode = document.getElementById("messageCode");
let validerCode = document.getElementById("validerCode");
let annulerCode = document.getElementById("annulerCode");
let effacerCode = document.getElementById("effacerCode");
let touchesCode = document.querySelectorAll(".toucheCode");

let codeEntre = "";
let nombreTentatives = 0;


// Quand on clique sur la porte
div5.addEventListener("click", () => {

    // Si la porte est déjà ouverte → on la ferme
    if (porteOuverte) {

        porteOuverte = false;

        div5.style.justifyContent = "flex-start";
        div5.style.backgroundColor = "gray";
        porte.textContent = "Fermée";

        envoyerCommande("porte", "close");

        return;
    }

    // Sinon on affiche le clavier
    clavierPorte.classList.remove("hidden");

    codeEntre = "";
    affichageCode.textContent = "";
    messageCode.textContent = "";
});


// Quand on appuie sur un chiffre
touchesCode.forEach(touche => {

    touche.addEventListener("click", () => {

        if (codeEntre.length < 4) {

            codeEntre += touche.dataset.touche;

            affichageCode.textContent = "•".repeat(codeEntre.length);
        }
    });
});


// Effacer le dernier chiffre
effacerCode.addEventListener("click", () => {

    codeEntre = codeEntre.slice(0, -1);

    affichageCode.textContent = "•".repeat(codeEntre.length);
});


// Annuler
annulerCode.addEventListener("click", () => {

    clavierPorte.classList.add("hidden");

    codeEntre = "";
    affichageCode.textContent = "";
    messageCode.textContent = "";
});


// Valider le code
validerCode.addEventListener("click", () => {

    if (codeEntre === "2580") {

        // Code correct
        porteOuverte = true;

        div5.style.justifyContent = "flex-end";
        div5.style.transition = "0.6s";
        div5.style.backgroundColor = "#22e832";

        porte.textContent = "Déverrouillée";

        envoyerCommande("porte", "open");

        messageCode.textContent = "✓ Accès autorisé";
        messageCode.style.color = "#22e832";

        setTimeout(() => {
            porteOuverte = false;
            div5.style.justifyContent = "flex-start";
            div5.style.transition = "0.6s";
            div5.style.backgroundColor = "gray";

            porte.textContent = "Verrouillée";

        envoyerCommande("porte", "close");

        }, 8000);

        setTimeout(() => {
            clavierPorte.classList.add("hidden");
        }, 1000);

        codeEntre = "";

    } else {

        // Code incorrect
        nombreTentatives++;

        messageCode.textContent = "✕ Code incorrect";
        messageCode.style.color = "#ef4444";

        codeEntre = "";
        affichageCode.textContent = "";

        if (nombreTentatives >= 3) {

            messageCode.textContent = "⚠️ 3 tentatives atteintes !";

            envoyerCommande("alarme", "on");

            div6.style.justifyContent="flex-end"
            div6.style.transition="0.6s"
            div6.style.backgroundColor="#22e832" 
            alarme.textContent="Activée" 

            setTimeout(()=>{
                div6.style.justifyContent="flex-start"
                div6.style.backgroundColor="gray" 
                alarme.textContent="Desactivée"  

                envoyerCommande("alarme","off")
            },10000)

            setTimeout(() => {
                clavierPorte.classList.add("hidden");
            }, 1500);

            nombreTentatives = 0;
        }
    }
});

       div6.addEventListener("click",()=>{
              alarmeActive=!alarmeActive
              if (alarmeActive) {
                div6.style.justifyContent="flex-end"
                div6.style.transition="0.6s"
                div6.style.backgroundColor="#22e832" 
                alarme.textContent="Activée"    

                envoyerCommande("alarme","on")
              }else{
                  div6.style.justifyContent="flex-start"
                  div6.style.backgroundColor="gray" 
                  alarme.textContent="Desactivée"  

                  envoyerCommande("alarme","off")
              }
              
       })
