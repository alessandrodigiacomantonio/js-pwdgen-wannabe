function Genera() {
  var name = document.pass_gen.name.value;
  var surname = document.pass_gen.surname.value;
  var color = document.pass_gen.color.value;
  var pass = nome + cognome + colore + '19';
return pass;
}
document.getElementsByClassName('footer__title')[0].innerHTML="Mi raccomando, utilizza sempre questa password almeno per i prossimi 5 anni. Che l'ozio sia con te!";
document.getElementsByClassName('footer__image-wrapper')[0].innerHTML='<img class="footer__image" src="https://www.iltuocruciverba.com/wp-content/uploads/2019/10/significato-stonks-1024x766.jpg" alt="stonk">';
document.getElementById('password').innerHTML=pass;
