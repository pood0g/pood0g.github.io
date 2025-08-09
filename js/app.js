    function generateQR() {
        document.getElementById('qrCodeDisplay').innerHTML = "";
        var svgLogo = document.getElementById('orroLogo');
        var qrContent = document.getElementById('eSIMNo').value;
        var logoSize = qrContent.length > 120 ? 20 : 30
        var qrImageSize = qrContent.length > 450 ? 600 : 300
        var el = kjua({
            text: qrContent,
            ecLevel: 'H',
            size: qrImageSize,
            fill: '#00002a',
            back: '#ffffff',
            quiet: 0,
            rounded: 40,
            mode: 'image',
            image: svgLogo,
            mSize: logoSize,
        });
        el.filename = 'helloWorld!';
        document.getElementById('qrCodeDisplay').appendChild(el);
    };

    document.getElementById('eSIMNo').addEventListener('keyup', (e) => {(e.key === 'Enter') ? generateQR() : undefined})
    document.getElementById('goButton').addEventListener('click', generateQR)