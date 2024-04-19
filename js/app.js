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
                lastsection.style.position = "absolute";
                lastsection.style.width = "20%";
                lastsection.style.justifyContent = "center";
                lastsection.style.paddingTop = "17px";
                lastsection.style.borderRadius = "17px";
                lastsection.style.marginLeft = "567px";
                lastsection.style.marginTop = "67px";
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
                share.style.display = "none";
            }
        } else {
            window.location.href = "./index.html";
        }
    })