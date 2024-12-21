document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("quiz-form");
      const overlay = document.getElementById("overlay");
      const resultDiv = document.getElementById("result");
      const resultImage = document.getElementById("result-image");
      
      // 10 farklı rakun görseli (örnek)
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
        
        // 1) Cevaplardan puan topla
        let totalScore = 0;
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
        
        // 2) Puan aralığına göre hangi görseli göstereceğimizi bul
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

        // 3) Slot machine efekti (yavaşlayarak resimleri çevirme)
        //    Örnek olarak 12 kez dönecek. İlk hız 100ms, her turda 50ms artarak yavaşlıyor
        let spinCount = 12;
        let initialDelay = 100;
        let delayIncrement = 50;
        let currentIndex = 0;
        
        // Overlay ve sonuç kutusu aç
        overlay.style.display = "block";
        resultDiv.style.display = "block";
        
        function spinImages(count, delay) {
          resultImage.src = racoonImages[currentIndex];
          currentIndex = (currentIndex + 1) % racoonImages.length;
          
          if (count > 0) {
            setTimeout(() => {
              spinImages(count - 1, delay + delayIncrement);
            }, delay);
          } else {
            // Son tur bitti, final görseli ata
            resultImage.src = racoonImages[selectedImageIndex];
          }
        }
        
        // Döndürme başlasın
        spinImages(spinCount, initialDelay);
      });
    });
  </script>
</body>
</html>
