        /*
  @project Expanding Flex Cards
  @author: Jamshid Elmi
  @created: 2022-03-25 19:13:18
  @modified: 2022-03-25 19:13:18
  @tutorial: https://youtu.be/pvjNbaV0Keo
*/
$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
  });
  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });