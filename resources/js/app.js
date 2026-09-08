import { pages } from './data.js';

// DOM Elements
const bookSpread = document.getElementById('book-spread');
const paginationDots = document.getElementById('pagination-dots');
const navList = document.getElementById('nav-list');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidenav = document.getElementById('sidenav');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bookContainer = document.querySelector('.book-container');

let visiblePages = [];
let currentPageIndex = 0;
// let isDesktop = window.innerWidth >= 768;
let isDesktop = window.innerWidth >= window.innerHeight;

function init() {
    updateVisiblePages();

    renderMenu();
    updateView();
    initSwipe();
    
    window.addEventListener('resize', () => {
        // const currentlyDesktop = window.innerWidth >= 768;
        const currentlyDesktop = window.innerWidth >= window.innerHeight;

        if (currentlyDesktop !== isDesktop) {

            const currentPageObj = visiblePages[currentPageIndex];

            isDesktop = currentlyDesktop;

            updateVisiblePages();

            renderMenu();

            const newIndex = visiblePages.indexOf(currentPageObj);

            if (newIndex !== -1) {
                currentPageIndex = newIndex;
            } else {
                currentPageIndex = 0;
            }

            if(isDesktop && currentPageIndex % 2 !== 0) {
                currentPageIndex--; 
            }

            updateView();
        }
    });

    mobileMenuBtn.addEventListener('click', () => sidenav.classList.add('open'));
    closeMenuBtn.addEventListener('click', () => sidenav.classList.remove('open'));

    prevBtn.addEventListener('click', (e) => {
        if (e.detail !== 0 && window.visualViewport && window.visualViewport.scale > 1.1) return;
        navigate('prev');
    });

    nextBtn.addEventListener('click', (e) => {
        if (e.detail !== 0 && window.visualViewport && window.visualViewport.scale > 1.1) return;
        navigate('next');
    });
}

function updateVisiblePages() {
    if (isDesktop) {
        visiblePages = [...pages];
    } else {
        visiblePages = pages.filter(p => !p.onlyDesktop);
    }
}

function navigate (direction) {
    const jump = isDesktop ? 2 : 1;
    let newIndex = currentPageIndex;

    if (direction === 'next') {
        newIndex += jump;
    } else {
        newIndex -= jump;
    }

    goToPage(newIndex);
}

function initSwipe() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;

    bookContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) return;
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    bookContainer.addEventListener('touchend', (e) => {
        if (window.visualViewport && window.visualViewport.scale > 1.1) return;
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffY) > 0.6 * Math.abs(diffX)) return;
        if (Math.abs(diffX) < minSwipeDistance) return;

        if (diffX < 0) {
            navigate('next'); 
        } else {
            navigate('prev'); 
        }
    }
}

function renderMenu() {
    navList.innerHTML = '';
    const sections = {};

    visiblePages.forEach((page, index) => {
        if (!sections[page.section]) {
            sections[page.section] = { startIndex: index, topics: [] };
        }
        if (page.topic) {
            sections[page.section].topics.push({ title: page.topic, index: index });
        }
    });

    for (const [sectionName, data] of Object.entries(sections)) {
        const li = document.createElement('li');
        const sectionTitle = document.createElement('span');
        sectionTitle.className = 'section-title';
        sectionTitle.innerText = sectionName;
        sectionTitle.onclick = () => {
            goToPage(data.startIndex);
            sidenav.classList.remove('open');
        };
        li.appendChild(sectionTitle);

        if (data.topics.length > 0) {
            const topicUl = document.createElement('ul');
            data.topics.forEach(topic => {
                const topicLi = document.createElement('li');
                const topicLink = document.createElement('a');
                topicLink.innerText = topic.title;
                topicLink.onclick = (e) => {
                    // e.preventDefault();
                    goToPage(topic.index);
                    sidenav.classList.remove('open');
                };
                topicLi.appendChild(topicLink);
                topicUl.appendChild(topicLi);
            });
            li.appendChild(topicUl);
        }
        navList.appendChild(li);
    }
}

function updateView(direction = 'none') {
    renderPages(direction);
    renderDots();
    updateNavButtons();
}

function updateNavButtons() {
    if (currentPageIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    const itemsPerPage = isDesktop ? 2 : 1;
    if (currentPageIndex + itemsPerPage >= visiblePages.length) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

function renderPages(direction) {
    bookSpread.innerHTML = '';

    const firstPage = visiblePages[currentPageIndex];
    const secondPage = (isDesktop && currentPageIndex + 1 < visiblePages.length) 
                       ? visiblePages[currentPageIndex + 1] 
                       : null;

    bookSpread.appendChild(createPageElement(firstPage, direction));

    if (isDesktop) {
        if (secondPage) {
            bookSpread.appendChild(createPageElement(secondPage, direction));
        } else {
            const empty = document.createElement('div');
            empty.className = 'page page-empty';
            bookSpread.appendChild(empty);
        }
        const folding = document.createElement('div');
        folding.className = 'folding';

        if (direction === 'next') folding.classList.add('anim-next');
        if (direction === 'prev') folding.classList.add('anim-prev');

        bookSpread.appendChild(folding);
    }
}

function createPageElement(data, direction) {
    const div = document.createElement('div');
    div.className = 'page';

    if (direction === 'next') div.classList.add('anim-next');
    if (direction === 'prev') div.classList.add('anim-prev');

    div.innerHTML = data.content;
    return div;
}

function renderDots() {
    paginationDots.innerHTML = '';
    const itemsPerPage = isDesktop ? 2 : 1;
    const totalViews = Math.ceil(visiblePages.length / itemsPerPage);
    const currentViewIndex = Math.floor(currentPageIndex / itemsPerPage);

    for (let i = 0; i < totalViews; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentViewIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => goToPage(i * itemsPerPage));
        paginationDots.appendChild(dot);
    }
}

function goToPage(index) {
    if (index < 0) index = 0;
    if (index >= visiblePages.length) return;

    if (isDesktop && index % 2 !== 0) {
        index = index - 1; 
    }

    let animDirection = 'none';
    if (index > currentPageIndex) {
        animDirection = 'next';
    } else if (index < currentPageIndex) {
        animDirection = 'prev';
    }

    currentPageIndex = index;
    updateView(animDirection);
}

init();
