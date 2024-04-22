var counter = 0;
document.querySelector('.share')
    .addEventListener('click', () => {
        counter++;
        if (!(counter % 2) == 0) {
            const ever = document
                .querySelector('.ever');
            ever.style.paddingBottom = "20px";
            const lastsection = document
                .querySelector('.lastsection');
            const width = innerWidth;
            if (width < 992) {
                lastsection.style.width = "100%";
                lastsection.style.justifyContent = "center";
                lastsection.style.background = "var(--VeryDarkGrayishBlue)";
                const pshare = document
                    .querySelector('.pshare');
                pshare.style.display = "block";
                const leftside = document
                    .querySelector('.leftside');
                leftside.style.display = "none";
                const lefticons = document
                    .querySelector('.lefticons');
                lefticons.style.display = "block";
                const share = document
                    .querySelector('.share');
                share.style.background = "hsl(211, 38%, 87%)";
            } else {
                const double = document
                    .querySelector('.double');
                double.style.display = "block";
                double.style.display = "flex";
                double.style.justifyContent = "space-between";
                double.style.paddingTop = "0";
                lastsection.style.position = "absolute";
                lastsection.style.width = "20%";
                lastsection.style.justifyContent = "center";
                lastsection.style.paddingTop = "17px";
                lastsection.style.borderRadius = "13px";
                lastsection.style.marginLeft = "550px";
                lastsection.style.marginTop = "80px";
                lastsection.style.background = "var(--VeryDarkGrayishBlue)";
                const dright = document.querySelector('.dright');
                dright.style.display = "block";
                const pshare = document
                .querySelector('.pshare');
            pshare.style.display = "block";
            const leftside = document
                .querySelector('.leftside');
            leftside.style.display = "none";
            const lefticons = document
                .querySelector('.lefticons');
            lefticons.style.display = "block";
            const share = document
                .querySelector('.share');
                share.style.display = "none";
                if (innerWidth >= 1024 && innerHeight >= 600) {
                    lastsection.style.marginLeft = "380px";
                } if (innerWidth >= 1200 && innerHeight >= 600) {
                    lastsection.style.marginLeft = "490px";
                } if (innerWidth >= 1272 && innerHeight >= 645) {
                    lastsection.style.marginLeft = "520px";
                } if (innerWidth >= 1440 && innerHeight >= 600) {
                    lastsection.style.marginLeft = "550px";
                } 
            document.querySelector('.dshare').addEventListener('click', () => {
                if (!(counter % 2) == 0) {
                    window.location.href = "./index.html";
                }
                })
            }
        } else {
            window.location.href = "./index.html";
        }
    })