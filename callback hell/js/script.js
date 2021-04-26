let div = document.querySelector("#white");
let particlesJS = document.createElement("green");
particlesJS.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12");
div.append(particlesJS);
particlesJS.textContent = "10";


  setTimeout(() => {
    particlesJS.textContent = "9";
    setTimeout(() => {
      particlesJS.textContent = "8";
      setTimeout(() => {
        particlesJS.textContent = "7";
        setTimeout(() => {
          particlesJS.textContent = "6";
          setTimeout(() => {
            particlesJS.textContent = "5";
            setTimeout(() => {
              particlesJS.textContent = "4";
              setTimeout(() => {
                particlesJS.textContent = "3";
                setTimeout(() => {
                  particlesJS.textContent = "2";
                  setTimeout(() => {
                    particlesJS.textContent = "1";
                    setTimeout(() => {
                      particlesJS.setAttribute("style", "font-size:100px;font-style:italic");
                      particlesJS.textContent = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
