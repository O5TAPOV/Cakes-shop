//Ф-ція для створення випадкових зображень
function createRandomImages(sectionID, raspberryConfig, leavesConfig)
{
    const section = document.getElementById(sectionID);
    if(!section) {`Error: Section ${sectionID} undefined`}

    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const fragment = document.createDocumentFragment();

    function createImage(config, src, x, y)
    {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('.randomPosition_Image');

        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        const blur = Math.random() * (config.maxBlur - config.minBlur) + config.minBlur;
        const rotate = Math.random() * (config.maxRotate - config.minRotate) + config.minRotate;

        const posX = x ?? Math.random() * (sectionWidth - size);
        const posY = y ?? Math.random() * (sectionHeight - size);

        img.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            filter: blur(${blur}px);
            transform: rotate(${rotate}deg);
            left: ${Math.max(-50, Math.min(posX, sectionWidth - size))}px;
            top:${Math.max(-50, Math.min(posY, sectionHeight - size))}px;
        `;

        fragment.appendChild(img);
    }

    raspberryConfig.images.forEach(([x,y]) => createImage(raspberryConfig, './img/common/raspberry.svg', x, y));
    leavesConfig.images.forEach(([x,y]) => createImage(leavesConfig, './img/common/leaf.svg', x, y));

    section.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => 
{
    createRandomImages('header', 
    { 
        minSize: 150, maxSize: 240, minBlur: 0, maxBlur: 2, minRotate: 0, maxRotate: 360,
        images: [[-40, -5], [1300, 80], [1300, 700]]
    }, 
    { 
        minSize: 200, maxSize: 220, minBlur: 0, maxBlur: 5, minRotate: 270, maxRotate: 280,
        images: [[20, 1060]]
    });
})