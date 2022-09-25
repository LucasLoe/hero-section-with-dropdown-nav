function menuToggle() {
    let navMobileMenu = document.getElementById('nav-mobile-menu');
    let navOverlay = document.getElementById('nav-mobile-overlay')

    navMobileMenu.classList.toggle('invisible');
    navOverlay.classList.toggle('invisible');
}

function openFeaturesSub() {
    let submenu = document.getElementById('nav-hover-features');
    submenu.classList.toggle('invisible');
}

function openFeaturesSubMobile() {
    let submenu = document.getElementById('nav-hover-features-mobile');
    submenu.classList.toggle('invisible');
}

function openCompanySub() {
    let submenu = document.getElementById('nav-hover-company');
    submenu.classList.toggle('invisible');
}

function openCompanySubMobile() {
    let submenu = document.getElementById('nav-hover-company-mobile');
    submenu.classList.toggle('invisible');
}

function closeMenu() {
    let navMobileMenu = document.getElementById('nav-mobile-menu');
    let navOverlay = document.getElementById('nav-mobile-overlay')

    navMobileMenu.classList.add('invisible');
    navOverlay.classList.add('invisible');
}