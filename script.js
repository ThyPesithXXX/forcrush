  const btnNo = document.getElementById("no");
        const btnYes = document.getElementById("yes");
        const resultDiv = document.getElementById("result");
        const mainContent = document.getElementById("main-content");

        btnNo.addEventListener("click", () => {
            // Calculate random position
            const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
            const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

            // Apply movement
            btnNo.style.position = "absolute";
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;

            // Add shake animation class
            btnNo.classList.add("shake");
            
            // Remove shake class after animation finishes so it can trigger again
            setTimeout(() => {
                btnNo.classList.remove("shake");
            }, 300);
        });

        btnYes.addEventListener("click", () => {
            mainContent.style.display = "none";
            resultDiv.style.display = "block";
        });