// script.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const resultImage = document.getElementById("result-image");
  
  // 10 farklı rakun görseli (örnek)
  // Bunları "images" klasörüne koyduğunu varsayıyoruz
  const racoonImages = [
      "images/racoons1.jpeg",
        "images/racoons2.jpeg",
        "images/racoons3.jpeg",
        "images/racoons4.jpeg",
        "images/racoons5.png",
        "images/racoons6.png",
        "images/racoons7.png",
        "images/racoons8.png",
        "images/racoons9.png",
        "images/racoons10.png"
  ];

  // Form gönderildiğinde (submit)
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // 1) Cevapları al ve puan hesapla
    let totalScore = 0;
    for (let i = 1; i <= 5; i++) {
      const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
      switch(answer) {
        case "A": totalScore += 1; break;
        case "B": totalScore += 2; break;
        case "C": totalScore += 3; break;
        case "D": totalScore += 4; break;
      }
    }

    // 2) Toplam puana göre finalde hangi resim çıkacak?
    let selectedImageIndex;
    if (totalScore <= 7) {
      selectedImageIndex = 0; 
    } else if (totalScore <= 10) {
      selectedImageIndex = 1;
    } else if (totalScore <= 12) {
      selectedImageIndex = 2;
    } else if (totalScore <= 14) {
      selectedImageIndex = 3;
    } else if (totalScore <= 16) {
      selectedImageIndex = 4;
    } else if (totalScore === 17) {
      selectedImageIndex = 5;
    } else if (totalScore === 18) {
      selectedImageIndex = 6;
    } else if (totalScore === 19) {
      selectedImageIndex = 7;
    } else if (totalScore === 20) {
      selectedImageIndex = 8;
    } else {
      // Her ihtimale karşı
      selectedImageIndex = 9;
    }

    // 3) Slot machine efekti (5 sn boyunca hızlı resim değişimi)
    let currentIndex = 0;
    resultDiv.style.display = "block";  // Ortadaki kutuyu aç
    const intervalTime = 100;           // 0.1 sn aralıkla resimleri değiştir
    const spinDuration = 5000;          // 5 sn sonra duracak

    // Her 100ms'de bir resmi değiştir
    const spinInterval = setInterval(() => {
      resultImage.src = racoonImages[currentIndex];
      currentIndex = (currentIndex + 1) % racoonImages.length;
    }, intervalTime);

    // 5 sn sonra durdur ve final resmi göster
    setTimeout(() => {
      clearInterval(spinInterval);
      resultImage.src = racoonImages[selectedImageIndex];
    }, spinDuration);
  });
});
