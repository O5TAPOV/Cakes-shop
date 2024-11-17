//Ф-ція для створення випадкових зображень
function createRandomImages(sectionID, raspberryConfig, leavesConfig)
{
    const section = document.getElementById(sectionID);
    if(!section) {`Error: Section ${sectionID} undefined`}

    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const fragment = document.createDocumentFragment();

    function createImage(config, src, x, y, offsetType = 'left', offsetValue = 0)
    {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('.randomPosition_Image');

        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        const blur = Math.random() * (config.maxBlur - config.minBlur) + config.minBlur;
        const rotate = Math.random() * (config.maxRotate - config.minRotate) + config.minRotate;

        let posX = x ?? Math.random() * (sectionWidth - size);
        const posY = y ?? Math.random() * (sectionHeight - size);

        if(offsetType == 'right') 
            {posX = sectionWidth - size - offsetValue;}
        else if(offsetType == 'left') 
            {posX = offsetValue;}

        img.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            filter: blur(${blur}px);
            transform: rotate(${rotate}deg);
            left: ${posX}px;
            top:${posY}px;
        `;

        fragment.appendChild(img);
    }

    raspberryConfig.images.forEach(([x, y, offsetType, offsetValue]) => createImage(raspberryConfig, './img/common/raspberry.svg', x, y, offsetType, offsetValue));
    leavesConfig.images.forEach(([x, y, offsetType, offsetValue]) => createImage(leavesConfig, './img/common/leaf.svg', x, y, offsetType, offsetValue));

    section.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => 
{
    createRandomImages('header', 
    { 
        minSize: 120, maxSize: 220, minBlur: 0, maxBlur: 2, minRotate: 0, maxRotate: 360,
        images: [
            [null, -5, 'left', 180], 
            [null, 80, 'right', -40], 
            [null, 680, 'right', -40]
        ]
    }, 
    { 
        minSize: 200, maxSize: 220, minBlur: 0, maxBlur: 5, minRotate: 270, maxRotate: 30,
        images: [[20, 780]]
    });
    createRandomImages('section1_catalog', {
        minSize: 120, maxSize: 180, minBlur: 0, maxBlur: 2, minRotate: 0, maxRotate: 360,
        images: [
            [null, 160, 'left', 85]
        ]
    },
    {
        minSize: 160, maxSize: 180, minBlur: 0, maxBlur: 5, minRotate: 0, maxRotate: 360,
        images: [
            [null, 560, 'right', 40],
            [null, 1100, 'left', 40]
        ]
    })
});