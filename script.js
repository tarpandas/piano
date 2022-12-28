const keys = ['a','s','d','f','g','h','j','k','l',';','w','e','t','y','u','o','p'];
playSound = () => {
    setInterval(() => {
        document.addEventListener("keydown", playFunction);
    }, 100);
};

playFunction = (event) => {
    if(event.repeat) return;
    keyPressed = event.key;
    let i;
    for(i=0; i<keys.length; i++){
        if(keys[i] == keyPressed){
            if (keyPressed != ';') {
                let div = document.querySelector(`#${keyPressed}`);
                let originalColor = getComputedStyle(div).backgroundColor;

                div.style.backgroundColor = "grey";
                setTimeout(() => {
                    div.style.backgroundColor = originalColor;
                }, 200);
            } else if (keyPressed == ';') {
                let div = document.querySelector('#m');
                let originalColor = getComputedStyle(div).backgroundColor;

                div.style.backgroundColor = "grey";
                setTimeout(() => {
                    div.style.backgroundColor = originalColor;
                }, 200);
            }

            let name = "tunes/"+keyPressed+".wav";
            new Audio(name).play();
            
        }
    }
}