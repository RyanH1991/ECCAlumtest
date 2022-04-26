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
    let cards = {};
    let j = Math.floor((container.childNodes.length - 3) / -2);
    container.childNodes.forEach((child, idx, nodes) => {
        // console.log(j)
        // console.log(child)
        if (idx > 0) {
            let top = (3 * j * j) - (2 * j) + 10
            cards[idx] = {
                div: child,
                rotate: j*5,
                top: top,
                left: idx * 75,
                selected: false
            }
            // console.log(top)
            child.style.webkitTransform = `rotate(${j*5}deg)`
            child.style.MozTransform = `rotate(${j*5}deg)`
            child.style.msTransform = `rotate(${j*5}deg)`
            child.style.OTransform = `rotate(${j*5}deg)`
            child.style.transform = `rotate(${j*5}deg)`
            child.style.left = `${idx * 75}px`
            child.style.top = `${top}px`
            child.addEventListener('click', () => {
                if (cards[idx].selected) {
                    cards[idx].selected = false;
                    child.classList.remove('grow-card');
                    child.style.left = `${cards[idx].left}px`;
                    child.style.top = `${cards[idx].top}px`;
                    setTimeout(() => {
                        child.style.zIndex = '0'
                        child.style.webkitTransform = `rotate(${cards[idx].rotate}deg)`
                        child.style.MozTransform = `rotate(${cards[idx].rotate}deg)`
                        child.style.msTransform = `rotate(${cards[idx].rotate}deg)`
                        child.style.OTransform = `rotate(${cards[idx].rotate}deg)`
                        child.style.transform = `rotate(${cards[idx].rotate}deg)`
                        child.childNodes[0].style.webkitTransform = 'none'
                        child.childNodes[0].style.MozTransform = 'none'
                        child.childNodes[0].style.msTransform = 'none'
                        child.childNodes[0].style.OTransform = 'none'
                        child.childNodes[0].style.transform = 'none'
                    }, '1000')
                } else {
                    cards[idx].selected = true;
                    child.childNodes[0].style.webkitTransform = 'translateY(-330px)'
                    child.childNodes[0].style.MozTransform = 'translateY(-330px)'
                    child.childNodes[0].style.msTransform = 'translateY(-330px)'
                    child.childNodes[0].style.OTransform = 'translateY(-330px)'
                    child.childNodes[0].style.transform = 'translateY(-330px)'
                    setTimeout(() => {
                        child.classList.add('grow-card');
                        child.style.webkitTransform = `none`
                        child.style.MozTransform = `none`
                        child.style.msTransform = `none`
                        child.style.OTransform = `none`
                        child.style.transform = `none`
                        child.style.top = '300px'
                        child.style.left = '500px'
                        child.style.zIndex = 1;
                    }, '1000');
                }
            })
            j++;
        }
    })
}

allCards()