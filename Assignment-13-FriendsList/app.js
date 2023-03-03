//---------------------------------------------------------START ::  OBJECT --------------------------------------------------------------->

import { friendsList } from "./assets/friendsList.js";

//---------------------------------------------------------END ::  OBJECT --------------------------------------------------------------->

//-----------------------------------------------------------START :: MAIN CONTAINER ---------------------------------------------------->
let mainContainer = document.querySelector(".mainContainer");


for(let friend of friendsList){

//-----------------------------------------------------------START :: IMAGE CONTAINER ---------------------------------------------------->
   let card = document.createElement("div")
    card.setAttribute("class","card")
    mainContainer.append(card)

    let imageContainer = document.createElement("div")
    imageContainer.setAttribute("class","imageContainer")
    imageContainer.setAttribute("alt",friend.first_name)
     
    let profile = document.createElement("img")
    profile.setAttribute("class","profile")

    profile.setAttribute("src",friend.img)
    imageContainer.append(profile)

    card.append(imageContainer)
//-----------------------------------------------------------END :: IMAGE CONTAINER ---------------------------------------------------->

//-----------------------------------------------------------START :: TEXT CONTAINER ---------------------------------------------------->
    
    let textContainer = document.createElement("div")
    textContainer.setAttribute("class","textContainer")
    

    let name = document.createElement("div")
    name.setAttribute("class","name")
    name.innerHTML=friend.first_name+" "+friend.last_name
    textContainer.append(name)

    let email = document.createElement("div")
    email.setAttribute("class","email")
    email.innerHTML=friend.email
    textContainer.append(email)


    card.append(textContainer)
//----------------------------------------------------------- END :: TEXT CONTAINER ---------------------------------------------------->
    
}
//-----------------------------------------------------------END :: MAIN CONTAINER ---------------------------------------------------->





