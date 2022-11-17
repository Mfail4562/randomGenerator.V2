document.getElementById("roll").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
  
    let dicetab = document.getElementsByName("dices");
    let valeur = 0;
    let number;
  
    for (let i = 0; i < dicetab.length; i++) {
      if (dicetab[i].checked) {
        valeur = dicetab[i].value;
      }
      
    }

    let roll = 1 + Math.round(Math.random() * valeur);
    document.getElementById("dicesResult").innerText = roll + "";
  });