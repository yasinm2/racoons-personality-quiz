document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");
  const resultModal = document.getElementById("resultModal");
  const overlay = document.getElementById("overlay");
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
    
    // 1) Formdan gelen yanıtları okuyup puan hesaplayalım
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
    
    // 2) Puan aralığına göre hangi görseli seçeceğimizi belirle
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
    
    // 3) Modal aç: (Overlay + Modal)
    overlay.style.display = "block";
    resultModal.style.display = "block";
    
    // 4) Slot machine animasyonu (resimler yavaşlayarak dönsün)
    // Adım adım 10-12 kere dönsün ve her defasında bekleme süresini artıralım
    let currentIndex = 0;
    let spinCount = 12;      // Toplam kaç kez dönecek (dilersen değiştir)
    let initialDelay = 100;  // İlk resim geçiş hızı (ms)
    let delayIncrement = 50; // Her adımda hızı ne kadar artıralım?
    
    // Rekürsif fonksiyon:
    function spinImages(count, delay) {
      // Görseli ata
      resultImage.src = racoonImages[currentIndex];
      currentIndex = (currentIndex + 1) % racoonImages.length;
      
      if (count > 0) {
        setTimeout(() => {
          spinImages(count - 1, delay + delayIncrement);
        }, delay);
      } else {
        // Tur bitti, artık final görseli göster
        resultImage.src = racoonImages[selectedImageIndex];
      }
    }
    
    // 5) Spin başlasın
    spinImages(spinCount, initialDelay);
  });
});
