// Slider Auto
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index+1)%slides.length;
  slides[index].classList.add("active");
},3000);


// Search Filter
document.getElementById("search").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card=>{
    let name = card.dataset.name;
    card.style.display = name.includes(value) ? "block":"none";
  });
});


// WhatsApp Order
function order(product){
  let number = "919999999999";
  let msg = "I want to buy " + product;
  window.open(`https://wa.me/${number}?text=${msg}`);
}
