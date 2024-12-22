document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");
  
  // Modal ve iç öğeler
  const modal = document.getElementById("result-modal");
  const modalCloseBtn = document.getElementById("close-modal");
  const resultImage = document.getElementById("result-image");
  const restartBtn = document.getElementById("restart-btn");

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
    "images/racoons10.png",
    "images/racoons11.jpeg",
    "images/racoons12.png",
    "images/racoons13.png",
    "images/racoons14.jpeg",
    "images/racoons15.jpeg"
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
    let selectedImageIndex;
    
    if (totalScore <= 7) {
      selectedImageIndex = 0; // racoons1
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
    
    // Modal'ı hemen göster
    modal.style.display = "block";

    // 3.5 saniyelik slayt şovu ayarlayalım
    let index = 0;
    const intervalTime = 300;  // 0.3 saniye
    const totalSlideshowTime = 3500; // 3.5 saniye

    // Her 0.3 saniyede farklı rakun resmini göster
    const slideShow = setInterval(() => {
      resultImage.src = racoonImages[index];
      index = (index + 1) % racoonImages.length; 
    }, intervalTime);

    // 3.5 saniye sonra slayt'ı durdurup gerçek sonucu göster
    setTimeout(() => {
      clearInterval(slideShow);
      // Gerçek sonuç resmini koyalım
      resultImage.src = racoonImages[selectedImageIndex];
    }, totalSlideshowTime);
  });

  // Modal kapatma butonu
  modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // "Yeniden Başla" butonu: formu sıfırla ve modal'ı kapat
  restartBtn.addEventListener("click", function() {
    // Formu sıfırlamak için:
    form.reset();
    // Modal'ı kapatalım
    modal.style.display = "none";
  });

  // Modal dışına tıklayınca da kapansın (isteğe bağlı)
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
