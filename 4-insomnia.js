document.addEventListener('DOMContentLoaded', function () {
  // DECLARE GLOBAL VARIABLES FOR USE IN HANDLERS
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+>?-$#@%&*!~^=;œ∑†¥πåß∂ƒ∆≈ç√∫µ';

  // RUN JS WHEN 'DISTORT' ELEMENTS ARE HOVERED
  var distortElements = document.querySelectorAll('.distort');

  distortElements.forEach(function (element) {
    var orig = element.textContent;
    var runs = 0;
    var intervalId;

    // Initialize distortion outside of event listener
    intervalId = setInterval(function () {
      distortText(element);
    }, 100);

    // Stop distortion when hovered
    element.addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });

    // Resume distortion when mouse leaves
    element.addEventListener('mouseleave', function () {
      intervalId = setInterval(function () {
        distortText(element);
      }, 100);
    });

    function distortText(element) {
      // MAINTAINS SOME READABILITY IN THE TEXT BY ONLY ALLOWING 3 CHARACTERS TO BE DISTORTED
      if (runs >= 50) {
        runs = 0;
        element.textContent = orig;
        return;
      }
      // GET EACH INDIVIDUAL CHARACTER
      var chars = element.textContent.split('');
      // GET A RANDOM CHARACTER FROM THE TEXT
      var rand = Math.floor(Math.random() * (chars.length));
      // GET A RANDOM REPLACEMENT CHARACTER
      var randRep = Math.floor(Math.random() * (charSet.length));
      // CHECK TO MAKE SURE THAT THE NEW CHARACTER IS DIFFERENT FROM THE OLD
      if (chars[rand] != charSet[randRep] && chars[rand] != ' ') {
        chars[rand] = charSet[randRep];
      } else {
        distortText(element);
      }
      // UPDATE TEXT
      element.textContent = chars.join('');
      runs += 1;
    }
  });
});

const showImageButton = document.getElementById("show-image-button");
const myImage = document.getElementById("my-image");
showImageButton.addEventListener("click", () => { 
   myImage.classList.toggle("visible"); 
});