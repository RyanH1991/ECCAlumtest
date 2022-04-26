//--I want to be able to grab all of the images
//--and place them into their own card
//--display the images in their cards
//--just add an external div with the additional transform features
//--when the card is clicked I want to pull the card all the wat out,
//--then grow the card and bring it to the center of the screen
//now lets work on the close feature
//we should only be able to interact with one card at a time
//put cards back
//rearrange photo to make room for bio underneath


//now on hover I want to change their Y index to show user they have been hovered on

const container = document.querySelector('.container');
// container.innerHTML = "SOMETHING";

function allCards() {
    for (let i = 1; i <= 14; i++) {
        let newCardContainer = document.createElement('div');
        newCardContainer.className = 'card-container'
        let newCard = document.createElement('div');
        newCard.className = 'card';
        let newImg = document.createElement('img');
        newImg.src = `/images/img${i}.JPG`;
        newImg.className = "card-image";
        newCardContainer.appendChild(newCard);
        newCard.appendChild(newImg);
        container.appendChild(newCardContainer);
    }
    let j = Math.floor((container.childNodes.length - 3) / -2);
    container.childNodes.forEach((child, idx, nodes) => {
        // console.log(j)
        // console.log(child)
        if (idx > 0) {
            let top = (3 * j * j) - (2 * j) + 10
            console.log(top)
            child.style.webkitTransform = `rotate(${j*5}deg)`
            child.style.MozTransform = `rotate(${j*5}deg)`
            child.style.msTransform = `rotate(${j*5}deg)`
            child.style.OTransform = `rotate(${j*5}deg)`
            child.style.transform = `rotate(${j*5}deg)`
            child.style.left = `${idx * 75}px`
            child.style.top = `${top}px`
            child.addEventListener('click', () => {
                console.log(child.childNodes)
                child.childNodes[0].style.webkitTransform = 'translateY(-310px)'
                child.childNodes[0].style.MozTransform = 'translateY(-310px)'
                child.childNodes[0].style.msTransform = 'translateY(-310px)'
                child.childNodes[0].style.OTransform = 'translateY(-310px)'
                child.childNodes[0].style.transform = 'translateY(-310px)'
                setTimeout(() => {
                    child.classList.add('grow-card');
                    child.style.webkitTransform = `none`
                    child.style.MozTransform = `none`
                    child.style.msTransform = `none`
                    child.style.OTransform = `none`
                    child.style.transform = `none`
                    child.style.top = '300px'
                    child.style.left = '500px'
                }, '1000');
            })
            j++;
        }
    })
}

allCards()