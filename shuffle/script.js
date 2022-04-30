//--I want to be able to grab all of the images
//--and place them into their own card
//--display the images in their cards
//--just add an external div with the additional transform features
//--when the card is clicked I want to pull the card all the wat out,
//--then grow the card and bring it to the center of the screen
//--put cards back
//--fix re-hover bug
//--test transform in css
//--test changing the card's top feature
//--test solely changing the card-container and allowing the hover feature persist for card
//--now on hover I want to change their Y index to show user they have been hovered on


//now lets work on the close feature
//we should only be able to interact with one card at a time
//as soon as we click on any card I shouldn't be able to interact with any other card
//make the entire background slowly grey out and immediately uninteractable
//rearrange photo to make room for bio underneath

const container = document.querySelector('.container');
// container.innerHTML = "SOMETHING";

function allCards() {
    for (let i = 1; i <= 14; i++) {
        let newCardContainer = document.createElement('div');
        newCardContainer.className = 'card-container'
        let newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.classList.add('hover-card')
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';
        let newImg = document.createElement('img');
        newImg.src = `/images/img${i}.JPG`;
        newImg.className = "card-image";
        imgContainer.appendChild(newImg);
        let cardBio = document.createElement('div');
        cardBio.className = 'card-bio';
        cardBio.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        newCardContainer.appendChild(newCard);
        newCard.appendChild(imgContainer);
        newCard.appendChild(cardBio);
        container.appendChild(newCardContainer);
    }
    let cards = {};
    let j = Math.floor((container.childNodes.length - 3) / -2);
    container.childNodes.forEach((child, idx, nodes) => {
        // console.log(j)
        // console.log(child)
        if (idx > 0) {
            let top = (3 * j * j) - (4 * j) + 10
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
                if (cards[idx].selected) { //card is already showcased
                    child.classList.remove('grow-card');
                    child.style.left = `${cards[idx].left}px`;
                    child.style.top = `${cards[idx].top}px`;
                    child.style.webkitTransform = 'translateY(-330px)'
                    child.style.MozTransform = 'translateY(-330px)'
                    child.style.msTransform = 'translateY(-330px)'
                    child.style.OTransform = 'translateY(-330px)'
                    child.style.transform = 'translateY(-330px)'
                    setTimeout(() => {
                        child.style.zIndex = '0'
                    }, '1000')
                    setTimeout(() => {
                        cards[idx].selected = false;
                        child.style.webkitTransform = `rotate(${cards[idx].rotate}deg`
                        child.style.MozTransform = `rotate(${cards[idx].rotate}deg`
                        child.style.msTransform = `rotate(${cards[idx].rotate}deg`
                        child.style.OTransform = `rotate(${cards[idx].rotate}deg`
                        child.style.transform = `rotate(${cards[idx].rotate}deg`
                        // child.childNodes[0].style.webkitTransform = 'translateY(0px)'
                        // child.childNodes[0].style.MozTransform = 'translateY(0px)'
                        // child.childNodes[0].style.msTransform = 'translateY(0px)'
                        // child.childNodes[0].style.OTransform = 'translateY(0px)'
                        // child.childNodes[0].style.transform = 'translateY(0px)'
                        child.style.webkitTransform += 'translateY(0px)'
                        child.style.MozTransform += 'translateY(0px)'
                        child.style.msTransform += 'translateY(0px)'
                        child.style.OTransform += 'translateY(0px)'
                        child.style.transform += 'translateY(0px)'

                        child.childNodes[0].classList.add('hover-card');
                    }, '1250')
                    
                } else { //card is in hand
                    child.childNodes[0].classList.remove('hover-card');

                    // child.childNodes[0].style.webkitTransform = 'translateY(-330px)'
                    // child.childNodes[0].style.MozTransform = 'translateY(-330px)'
                    // child.childNodes[0].style.msTransform = 'translateY(-330px)'
                    // child.childNodes[0].style.OTransform = 'translateY(-330px)'
                    // child.childNodes[0].style.transform = 'translateY(-330px)'
                    child.style.webkitTransform = 'translateY(-330px)'
                    child.style.MozTransform = 'translateY(-330px)'
                    child.style.msTransform = 'translateY(-330px)'
                    child.style.OTransform = 'translateY(-330px)'
                    child.style.transform = 'translateY(-330px)'
                    setTimeout(() => {
                        child.style.zIndex = 1;
                    }, '800')
                    setTimeout(() => {
                        cards[idx].selected = true;
                        child.classList.add('grow-card');
                        child.style.webkitTransform = `rotate(0deg)`
                        child.style.MozTransform = `rotate(0deg)`
                        child.style.msTransform = `rotate(0deg)`
                        child.style.OTransform = `rotate(0deg)`
                        child.style.transform = `rotate(0deg)`
                        child.style.top = '300px'
                        child.style.left = '500px'
                    }, '1200');
                    // child.childNodes[0].addEventListener('mouseover', () => {
                    //     child.childNodes[0].style.transform = "translateY(-50px)";
                    // })
                    // child.childNodes[0].addEventListener('mouseleave', () => {
                        // child.childNodes[0].style.transform = "translateY(0px)";
                    // })
                }
            })
            j++;
        }
    })
}

allCards()