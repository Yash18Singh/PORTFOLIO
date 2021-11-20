var ABOUT_DIV = document.getElementById('about-div');
var SKILLS_DIV = document.getElementById('skills-div');
var PORTFOLIO_DIV = document.getElementById('portfolio-div');
var EXPERIENCE_DIV = document.getElementById('experience-div');
var CONTACT_DIV = document.getElementById('contact-div');
var LOADING_DIV = document.getElementById('loading-div');

function showLOADING()
{
    LOADING_DIV.style.display='block';
}

function hideLOADING()
{
    LOADING_DIV.style.display = 'none';
}

function hideEVERYTHING()
{
    ABOUT_DIV.style.display = 'none';
    SKILLS_DIV.style.display = 'none';
    PORTFOLIO_DIV.style.display = 'none';
    EXPERIENCE_DIV.style.display ='none';
    CONTACT_DIV.style.display = 'none';
}


function showABOUT()
{
    hideEVERYTHING()
    showLOADING();
    setTimeout(ABOUT ,270);
    setTimeout(hideLOADING ,270);
}

function showSKILLS()
{
    hideEVERYTHING()
    showLOADING();
    setTimeout(SKILLS ,270);
    setTimeout(hideLOADING ,270);
}

function showPORTFOLIO()
{
    hideEVERYTHING()
    showLOADING();
    setTimeout(PORTFOLIO ,270);
    setTimeout(hideLOADING ,270);
}

//function showEXPERIENCE()
//{
//    hideEVERYTHING()
//    showLOADING();
//    setTimeout(EXPERIENCE ,270);
//    setTimeout(hideLOADING ,270);
//}

function showCONTACT()
{
    hideEVERYTHING()
    showLOADING();
    setTimeout(CONTACT ,270);
    setTimeout(hideLOADING ,270);
}


function ABOUT()
{
    ABOUT_DIV.style.display = 'block';
    SKILLS_DIV.style.display = 'none';
    PORTFOLIO_DIV.style.display = 'none';
    EXPERIENCE_DIV.style.display ='none';
    CONTACT_DIV.style.display = 'none';
}

function SKILLS()
{
    ABOUT_DIV.style.display = 'none';
    SKILLS_DIV.style.display = 'block';
    PORTFOLIO_DIV .style.display= 'none';
    EXPERIENCE_DIV.style.display ='none';
    CONTACT_DIV.style.display = 'none';
}

function PORTFOLIO()
{
    ABOUT_DIV.style.display = 'none';
    SKILLS_DIV.style.display = 'none';
    PORTFOLIO_DIV.style.display = 'block';
    EXPERIENCE_DIV.style.display ='none';
    CONTACT_DIV.style.display = 'none';
}

//function EXPERIENCE()
//{
//    ABOUT_DIV.style.display = 'none';
//    SKILLS_DIV.style.display = 'none';
//    PORTFOLIO_DIV.style.display = 'none';
//    EXPERIENCE_DIV.style.display ='block';
//    CONTACT_DIV.style.display = 'none';
//}

function CONTACT()
{
    ABOUT_DIV.style.display = 'none';
    SKILLS_DIV.style.display = 'none';
    PORTFOLIO_DIV.style.display = 'none';
    EXPERIENCE_DIV.style.display ='none';
    CONTACT_DIV.style.display = 'block';
}
