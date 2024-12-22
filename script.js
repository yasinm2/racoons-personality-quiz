document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");
  
  // Modal ve iç öğeler
  const modal = document.getElementById("result-modal");
  const modalCloseBtn = document.getElementById("close-modal");
  const resultImage = document.getElementById("result-image");
  const resultText = document.getElementById("result-text");
  const restartBtn = document.getElementById("restart-btn");

  // 15 farklı rakun görseli ve her birine ait mesaj
  const raccoonData = [
    { src: "images/racoons1.jpeg",  message: "Sen eski kral rakunsun !" },
    { src: "images/racoons2.jpeg",  message: "Sen gezici rakunsun" },
    { src: "images/racoons3.jpeg",  message: "Sen keşifçi rakunsun" },
    { src: "images/racoons4.jpeg",  message: "Sen çılgın rakunsun" },
    { src: "images/racoons5.png",   message: "Sen tarz bir rakunsun" },
    { src: "images/racoons6.png",   message: "Sen asker rakunsun" },
    { src: "images/racoons7.png",   message: "Sen yeşil goblin rakunsun" },
    { src: "images/racoons8.png",   message: "Sen şövalye rakunsun" },
    { src: "images/racoons9.png",   message: "Sen karıncayiyen keşifçi rakunsun" },
    { src: "images/racoons10.png",  message: "Sen hapishane kaçkını rakunsun" },
    { src: "images/racoons11.jpeg", message: "Sen hayvansever rakunsun" },
    { src: "images/racoons12.png",  message: "Sen büyücü rakunsun" },
    { src: "images/racoons13.png",  message: "Sen kırmızı başlıklı rakunsun" },
    { src: "images/racoons14.jpeg", message: "Sen gerilla rakunsun" },
    { src: "images/racoons15.jpeg", message: "Sen yoda rakunsun" }
  ];
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Cevaplardan bir puan toplayalım
    let totalScore = 0;
    
    // 1. sorudan 5. soruya kadar yanıtları al
    for (let i = 1; i <= 5; i++) {
      const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
      switch(answer) {
        case "A": totalScore += 1; break;
        case "B": totalScore += 2; break;
        case "C": totalScore += 3; break;
        case "D": totalScore += 4; break;
      }
    }
    
    /*
     * Puan aralıklarını 15 sonuçla eşleştiriyoruz.
     * (5..6) -> index 0
     *  7     -> index 1
     *  8     -> index 2
     *  9     -> index 3
     * 10     -> index 4
     * 11     -> index 5
     * 12     -> index 6
     * 13     -> index 7
     * 14     -> index 8
     * 15     -> index 9
     * 16     -> index 10
     * 17     -> index 11
     * 18     -> index 12
     * 19     -> index 13
     * 20     -> index 14
     */
    let selectedIndex;
    if (totalScore <= 6) {
      selectedIndex = 0;
    } else if (totalScore === 7) {
      selectedIndex = 1;
    } else if (totalScore === 8) {
      selectedIndex = 2;
    } else if (totalScore === 9) {
      selectedIndex = 3;
    } else if (totalScore === 10) {
      selectedIndex = 4;
    } else if (totalScore === 11) {
      selectedIndex = 5;
    } else if (totalScore === 12) {
      selectedIndex = 6;
    } else if (totalScore === 13) {
      selectedIndex = 7;
    } else if (totalScore === 14) {
      selectedIndex = 8;
    } else if (totalScore === 15) {
      selectedIndex = 9;
    } else if (totalScore === 16) {
      selectedIndex = 10;
    } else if (totalScore === 17) {
      selectedIndex = 11;
    } else if (totalScore === 18) {
      selectedIndex = 12;
    } else if (totalScore === 19) {
      selectedIndex = 13;
    } else {
      selectedIndex = 14; // 20
    }
    
    // Modal'ı göster
    modal.style.display = "block";
    // Mesajı şimdilik boşaltalım (slayt sırasında bir şey göstermezsin)
    resultText.textContent = "";

    // Slayt gösterisi ayarları
    const intervalTime = 100;   // 0.1 saniye
    const totalTime = 3000;     // 3 saniye
    const maxFrames = totalTime / intervalTime; // 3s / 0.1s = 30 kez
    let frameCount = 0;         // Kaç kez resim değiştirdiğimizi sayacağız
    let slideIndex = 0;         // raccoonData'da hangi resimde olduğumuzu takip

    // Her 0.1 sn'de bir resim değiştir:
    const slideShow = setInterval(() => {
      if (frameCount < maxFrames) {
        // Sıradaki resmi göster
        resultImage.src = raccoonData[slideIndex].src;
        slideIndex = (slideIndex + 1) % raccoonData.length;
        frameCount++;
      } else {
        // 3 saniye (30 frame) dolduysa slaytı durdur
        clearInterval(slideShow);

        // Artık asıl sonucu göster
        resultImage.src = raccoonData[selectedIndex].src;
        resultText.textContent = raccoonData[selectedIndex].message;
      }
    }, intervalTime);
  });

  // Modal kapatma butonu
  modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // "Yeniden Başla" butonu: formu sıfırla ve modal'ı kapat
  restartBtn.addEventListener("click", function() {
    form.reset();
    modal.style.display = "none";
  });

  // Modal dışına tıklayınca da kapansın (isteğe bağlı)
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
