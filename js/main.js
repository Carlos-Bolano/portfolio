const buttonMenu = document.querySelector(".Header-burger-btn")
const navbar = document.querySelector(".Header-nav-list")
const experienceBtn = document.getElementById("experienceBtn")
const educationBtn = document.getElementById("educationBtn")
const experienceContent = document.getElementById("experience")
const educationContent = document.getElementById("education")
const form = document.querySelector('form')
const divMessage = document.getElementById('message')


var typed = new Typed('.typed', {
    strings: ['web development', 'Front-end development'],
    typeSpeed: 85,
    startDelay: 0,
    backSpeed: 85,
    backDelay: 400,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});


function toggleMenu() {
    navbar.classList.toggle("Header-nav-active")
}

const openTab = (btnToShow, contentToShow, btnToHide, contentToHide) => {
    btnToHide.classList.remove("active-btn");
    contentToHide.classList.remove("active-tab");
    btnToShow.classList.add("active-btn");
    contentToShow.classList.add("active-tab");
};

const openTabExperience = () => {
    openTab(experienceBtn, experienceContent, educationBtn, educationContent);
}

const openTabEducation = () => {
    openTab(educationBtn, educationContent, experienceBtn, experienceContent);
}

const showMessage = (message, className) => {
    const messageSpan = document.createElement('span');
    messageSpan.classList.add(className);
    messageSpan.textContent = message;

    divMessage.appendChild(messageSpan);

    setTimeout(() => {
        messageSpan.remove();
    }, 4000);
};

const showSuccessMessage = (message, name) => {
    showMessage(`Muchas gracias ${name}, ${message}`, 'Contact-success-message');
};

const showErrorMessage = (message) => {
    showMessage(message, 'Contact-error-message');
};

const sendRequestToAPI = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const apiResponse = await response.json();
    return apiResponse;
};

const apiUri = "https://back-end-portfolio-production.up.railway.app/api/people"

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    try {
        const apiResponse = await sendRequestToAPI(apiUri, value);

        if (apiResponse && apiResponse.status === 'success') {
            showSuccessMessage(apiResponse.message, apiResponse.data.name);
        } else if (apiResponse && apiResponse.status === 'error') {
            showErrorMessage(apiResponse.message);
        }
    } catch (error) {
        const message = "Error al enviar el folmulario ❌"
        showErrorMessage(message);
        console.log(error)
    }

    event.target.reset();
};



form.addEventListener('submit', handleSubmit)
buttonMenu.addEventListener("click", toggleMenu)
experienceBtn.addEventListener('click', openTabExperience)
educationBtn.addEventListener('click', openTabEducation)