import activityList from "/dataList.js";

document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementsByClassName("box__text")[0];
    const roteateButton = document.getElementsByClassName("box__button")[0];
    const randomLoopCount = Math.floor(Math.random() * 100);

    roteateButton.addEventListener('click', () => {
        let count = 0;
        function rotate(randomLoopCount, count){
            if(randomLoopCount > count){
                const randomIndex = Math.floor(Math.random * activityList.length);
                textBox.innerHTML = `<p>${activityList[randomIndex]}</p>`
                setTimeout(() => {
                    rotate(randomLoopCount, count + 1);
                }, 20)
            };
        }
        rotate(randomLoopCount,count);
    });
});