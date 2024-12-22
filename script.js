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
    
    /* 
     * Puan aralıklarını 15 sonuçla eşleştiriyoruz.
     * Toplam puan 5 - 20 arasında. Bu 16 farklı skor demek (5,6,7,...,20).
     * 15'e indirgemek için 5-6'yı tek bir sonucu paylaştırabiliriz ya da
     * istediğin başka bir aralığı kombine edebilirsin.
     */
    let selectedIndex;
    if (totalScore <= 6) {
      selectedIndex = 0;  // (5,6) -> 1. resim
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
      selectedIndex = 14; // (20) -> 15. resim
    }
    
    // Modal'ı hemen göster
    modal.style.display = "block";

    // 3.5 saniyelik slayt şovu ayarlayalım
    let index = 0;
    const intervalTime = 300;  // 0.3 saniye
    const totalSlideshowTime = 3500; // 3.5 saniye

    // Her 0.3 saniyede farklı rakun resmini göster
    const slideShow = setInterval(() => {
      // Dizi sınırını aşarsa başa dönsün
      resultImage.src = raccoonData[index].src;
      // Resmin altında geçici olarak "Slayt Efekti..." gibi bir şey gösterebilirsin, ama
      // istersen tamamen boş bırak. Şimdilik boş bırakalım:
      resultText.textContent = "";
      
      index = (index + 1) % raccoonData.length; 
    }, intervalTime);

    // 3.5 saniye sonra slayt'ı durdurup gerçek sonucu göster
    setTimeout(() => {
      clearInterval(slideShow);
      // Gerçek sonuç resmini ve mesajı koyalım
      resultImage.src = raccoonData[selectedIndex].src;
      resultText.textContent = raccoonData[selectedIndex].message;
    }, totalSlideshowTime);
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
