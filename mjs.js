"use strict";
class PolskiJS{
constructor(){}
// publiczne //
schowaj(komponent){
 let e=this.#kmp(komponent);
 for(let i=0;i<e.length;i++) 
  e[i].style.setProperty("display","none");
}
pokaż(komponent){
 let e=this.#kmp(komponent);
 for(let i=0;i<e.length;i++)
  e[i].style.setProperty("display","block");
}
pokaz(komponent){
 this.pokaż(komponent);
}
przełączPokaż(komponent){
 let e=this.#kmp(komponent);
 for(let i=0;i<e.length;i++) 
  e[i].style.setProperty("display",e[i].style.display==="none"?"block":"none");
}
przelaczPokaz(komponent){
 this.przełączPokaż(komponent);
}
dodajStyl(komponent, nazwaCss, wartośćCss){
 let e=this.#kmp(komponent),n=nazwaCss,w=wartośćCss;
 for(let i=0;i<e.length;i++)
  e[i].style.setProperty(n,w);
}
dodajKlaseStylu(komponent, nazwaKlasy){
 let e=this.#kmp(komponent),n=nazwaKlasy;
 for(let i=0;i<e.length;i++){
  let a=e[i].className.split(" "),b=n.split(" ");
  for(let j=0;j<b.length;j++)
   if(a.indexOf(b[j])<0)e[i].className+=" "+b[j];
 }
}
dodajKlasęStylu(komponent, nazwaKlasy){
 this.dodajKlaseStylu(komponent, nazwaKlasy);
}
usuńKlasęStylu(komponent, nazwaKlasy){
 let e=this.#kmp(komponent),n=nazwaKlasy;
 for(let i=0;i<e.length;i++){
  let a=e[i].className.split(" "),b=n.split(" ");
  for(let j=0;j<b.length;j++)
   while(a.indexOf(b[j])>-1)
    a.splice(a.indexOf(b[j]),1);
  e[i].className=a.join(" ");
 }
}
usunKlaseStylu(komponent, nazwaKlasy){
 this.usuńKlasęStylu(komponent, nazwaKlasy);
}
przełączKlasęStylu(komponent, nazwaKlasyPierwszej, nazwaKlasyDrugiej){
 let e=this.#kmp(komponent),n=nazwaKlasyPierwszej,m=nazwaKlasyDrugiej;
 for(let i=0,t=1;i<e.length;i++,t=1){
  for (let j=0;j<(n||"").split(" ").length;j++)
   if(e[i].className.split(" ").indexOf((n||"").split(" ")[j])<0)t=0;
  if((m||"").split(" ").length==0){
   if(t) 
    this.#add(e[i],(n||""));
   else
    this.#rem(e[i],(n||""));
  }
  else{
   if(t){
    this.#rem(e[i],(n||""));
    this.#add(e[i],(m||""));    
   }else{
    this.#rem(e[i],(m||""));   
    this.#add(e[i],(n||""));
   }
  }
 }
}
przelaczKlaseStylu(komponent, nazwaKlasyPierwszej, nazwaKlasyDrugiej){
 this.przełączKlasęStylu(komponent, nazwaKlasyPierwszej, nazwaKlasyDrugiej);
}
// prywatne //
#kmp(id){
 if(typeof id==="object") 
  return [id];
 return document.querySelectorAll(id);
}
#add(element, name){
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
   if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
 }
}
#rem(element, name){
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
   while (arr1.indexOf(arr2[i]) > -1) {
     arr1.splice(arr1.indexOf(arr2[i]), 1);
   }
 }
 element.className = arr1.join(" ");
}
}
var mjs = new PolskiJS();