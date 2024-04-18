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
            const lastsection = document
                .querySelector('.lastsection');
            lastsection.style.width = "85%";
            lastsection.style.justifyContent = "left";
            lastsection.style.background = "white";
            const leftside = document
                .querySelector('.leftside');
            leftside.style.display = "block";
            leftside.style.display = "flex";
            const pshare = document
                .querySelector('.pshare');
            pshare.style.display = "none";
        }
    })