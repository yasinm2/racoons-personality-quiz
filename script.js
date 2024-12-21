document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const resultImage = document.getElementById("result-image");
    
    // 10 farklı rakun görseli. images klasöründe bulunduklarını varsayıyoruz.
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
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Cevaplardan bir puan toplayalım
      let totalScore = 0;
      
      // 1. sorudan 5. soruya kadar yanıtları al
      for (let i = 1; i <= 5; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
        // Örnek puanlama:
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
      
      // Toplam puan 5 ile 20 arasında olacaktır.
      // Buna göre bir sonuç elde edelim. Örnek:
      //  5-7   -> racoon1 (daha düşük puan = "A" ağırlıklı)
      //  8-10  -> racoon2
      //  11-12 -> racoon3
      //  13-14 -> racoon4
      //  15-16 -> racoon5
      //  17    -> racoon6
      //  18    -> racoon7
      //  19    -> racoon8
      //  20    -> racoon9
      //  ... vs
      // Kısacası hangi aralığa denk geliyorsa ona göre bir index belirle.
      
      let selectedImageIndex;
      
      if (totalScore <= 7) {
        selectedImageIndex = 0; // racoon1.png
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
      
      // Seçilen rakun görselini göster
      resultImage.src = racoonImages[selectedImageIndex];
      resultDiv.style.display = "block";
    });
  });
  