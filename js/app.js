const aside = document.querySelector('aside');
const menu = document.querySelector('button.menu');
const navLine = document.querySelector('.nav-line');
var navItemActive = document.querySelector('.nav__items a');


addEventListener('click', (e) => {
    if (e.target.matches('.nav__items a')) {
        navItemActive = e.target;
        document.querySelector('.nav--active').classList.remove('nav--active');
        navItemActive.classList.add('nav--active');
        setNavLine();
    }

    if (e.target.matches('.aside__items a')) {
        asideItemActive = e.target;
        document.querySelector('.aside--active').classList.remove('aside--active');
        asideItemActive.classList.add('aside--active');
        setAsideLine();

        setTimeout(() => {
            menu.classList.remove('show');
            aside.classList.remove('show');
        }, 400)
    }

    if (e.target.matches('button.menu')) {
        menu.classList.toggle('show');
        aside.classList.toggle('show');
    }
})

addEventListener('resize', () => setNavLine())
addEventListener('load', () => setNavLine())

function setNavLine () {
    let offsetLeft = navItemActive.documentOffsetLeft;
    let width = navItemActive.getBoundingClientRect().width;
    let left = (offsetLeft + width / 2) - 10;
    
    navLine.style.transform = 'translateX(0)';
    navLine.style.left = left + 'px';
}


/*
    ASIDE
*/  

const asideLine = document.querySelector('.aside-line');
var asideItemActive = document.querySelector('.aside__items a');

addEventListener('resize', () => setAsideLine())
addEventListener('load', () => setAsideLine())

function setAsideLine () {
    let offsetTop = asideItemActive.documentOffsetTop;
    let height = asideItemActive.getBoundingClientRect().height;
    let top = (offsetTop + height / 2) - 15;

    asideLine.style.top = top + 'px';
}




/*
    NAV SCROLLED
*/
const header = document.querySelector('header');
const nav = document.querySelector('nav');

addEventListener('scroll', () => {
    let offsetTop = header.documentOffsetTop;
    let height = header.getBoundingClientRect().height;
    let topHeader = offsetTop + height;
    
    if (scrollY >= topHeader) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})


/*
    DESTINATION
*/

let destination = [
    {
        title: 'Vatican Museum',
        place: 'Rome, Italy',
        price: 49,
        rating: 5,
        review: '20k'
    },
    {
        title: 'Pakistan Monument',
        place: 'Islamabad, Pakistan',
        price: 34,
        rating: 3.5,
        review: '14k'
    },
    {
        title: 'Burj Khalifa',
        place: 'Skyscraper in Dubai',
        price: 28,
        rating: 3,
        review: '16k'
    },
    {
        title: 'Milaidhoo',
        place: 'Island in Maldivas',
        price: 55,
        rating: 4,
        review: '10.6k'
    },
    {
        title: 'Ko Tao',
        place: 'Island in the Gulf of Thailand',
        price: 39,
        rating: 4.5,
        review: '8k'
    },
    {
        title: 'Grand Mecidiye Mosque',
        place: 'Mosque in Istanbul, Türkiye',
        price: 25,
        rating: 3.5,
        review: '5k'
    },
]

const destinationBox = document.querySelector('.destination-box')

destination.forEach((item, index) => {
    let div = document.createElement('div');
    div.classList.add('destination__item');
    destinationBox.appendChild(div);

    div.innerHTML = `
        <div class="destination-image">
            <img src="./img/destination-${index+1}.jpeg" alt="Destination image">
            <div class="price">$${item.price}</div>
        </div>
        <h2>Enjoy the Beauty of the ${item.title}</h2>
        <p class="description">${item.place}</p>
        <div class="opinion">
            <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p class="description">${item.rating}</p>
            </div>
            <p class="description">(${item.review} Review)</p>
        </div>
    `;
})






Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
} );

Object.defineProperty( Element.prototype, 'documentOffsetLeft', {
    get: function () { 
        return this.offsetLeft + ( this.offsetParent ? this.offsetParent.documentOffsetLeft : 0 );
    }
} );