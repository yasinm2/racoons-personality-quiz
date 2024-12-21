document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const resultImage = document.getElementById("result-image");
  
  // 10 farklı rakun görseli (örneğin).
  const racoonImages = [
    "images/racoon1.png",
    "images/racoon2.png",
    "images/racoon3.png",
    "images/racoon4.png",
    "images/racoon5.png",
    "images/racoon6.png",
    "images/racoon7.png",
    "images/racoon8.png",
    "images/racoon9.png",
    "images/racoon10.png"
  ];
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Cevaplardan bir puan toplayalım
    let totalScore = 0;
    
    // 5 sorudan gelen değerleri çek
    for (let i = 1; i <= 5; i++) {
      const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
      switch(answer) {
        case "A":
          totalScore += 1;
          break;
        case "B":
          totalScore += 2;
          break;
        case "C":
          totalScore += 3;
          break;
        case "D":
          totalScore += 4;
          break;
      }
    }
    
    // Puan aralığına göre hangi görseli seçeceğimizi belirle
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
      selectedImageIndex = 9;
    }
    
    // SLOT MACHINE EFECTI
    // 1) Hızlı bir şekilde tüm görselleri 5 sn boyunca sırayla göster
    let currentSlotIndex = 0;
    resultDiv.style.display = "block"; // Sonuç alanını göster
    
    const slotMachineInterval = setInterval(() => {
      // Her 100ms'de bir sonraki görseli göster
      resultImage.src = racoonImages[currentSlotIndex];
      currentSlotIndex = (currentSlotIndex + 1) % racoonImages.length;
    }, 100);
    
    // 2) 5 saniye (5000ms) sonunda slot machine'i durdur ve asıl görseli göster
    setTimeout(() => {
      clearInterval(slotMachineInterval);
      // Asıl hak edilen resmi göster
      resultImage.src = racoonImages[selectedImageIndex];
    }, 5000);
  });
});
