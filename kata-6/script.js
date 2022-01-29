const title = document.getElementById('title')





var d = new Date()
var an = d.getFullYear(), mois = d.getMonth()+1 // car Janvier commence à 0
var jour = d.getDate(), jsem = d.getDay() // car Dimanche commence à 0
var joursemaine = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

title.textContent = "Date Js : " + joursemaine[jsem]+ " "+jour+"/"+(mois)+"/"+an
title.classList.add('active')
