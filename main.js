let pound = document.getElementById('Bound');
let dollar = document.getElementById('Dollar');

dollar.onkeyup = function() {
    pound.value = dollar.value * 47.56;
}

pound.onkeyup = function() {
    dollar.value = pound.value / 47.56;
}


  console.log( window.innerWidth );
  console.log( window.innerHeight);
