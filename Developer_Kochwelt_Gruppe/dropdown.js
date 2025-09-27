
        document.getElementById("menuButton").addEventListener("click", function() {
            document.getElementById("dropdownMenu").classList.toggle("show");
        });

        document.addEventListener("click", function(event) {
            let button = document.getElementById("menuButton");
            let menu = document.getElementById("dropdownMenu");

            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    