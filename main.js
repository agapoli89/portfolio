const squares = document.querySelectorAll('.start__square');
const langButton = document.getElementById('atr1');

let i = 0; //squares
const start = document.querySelector('.start');
const content = document.querySelectorAll('.content');
const cross = document.querySelectorAll('.content__cross')

const showSquares = setInterval(() => {
    squares[i].classList.remove('hidden');
    i++;
    if (i === squares.length) {
        clearInterval(showSquares);
    }
}, 500);

function backToStart() {

    const index = this.dataset.number;

    setTimeout(() => {
        const afterTransitionendContent = () => {
            content[index].style.display = "none";
            start.style.display = "flex";
            setTimeout(() => {
                langButton.classList.remove('hidden');
                start.style.opacity = 1;
            }, 100);
            content[index].removeEventListener('transitionend', afterTransitionendContent);
        }
        content[index].style.opacity = 0;
        content[index].addEventListener("transitionend", afterTransitionendContent);
    }, 200)
    removeEventListener('click', backToStart);
}

function addContent() {
    if (this === squares[3]) {
        return;
    };
    const afterTransitionendStart = () => {
        start.style.display = "none";
        if (content[index].classList.contains('content__contact-me')) {
            content[index].style.display = "flex";
        } else {
            content[index].style.display = "block";
        }
        setTimeout(() => {
            langButton.classList.add('hidden');
            content[index].style.opacity = 1;
        }, 100);
        start.removeEventListener('transitionend', afterTransitionendStart);
    }

    const index = this.dataset.number;
    setTimeout(() => {
        start.style.opacity = 0;
        start.addEventListener('transitionend', afterTransitionendStart);
    }, 100);


    removeEventListener('click', addContent);
    cross[index].addEventListener('click', backToStart)
}

squares.forEach(square => square.addEventListener('click', addContent));

//my projects:

const myProjects = document.querySelectorAll('.content__links-to-my-works__frame-to-item');

myProjects.forEach(project => project.addEventListener('mouseenter', e => {
    e.target.firstElementChild.style.opacity = ".1";
    e.target.lastElementChild.style.opacity = "1";

    e.target.addEventListener('mouseleave', () => {
        e.target.firstElementChild.style.opacity = "1";
        e.target.lastElementChild.style.opacity = "0";
    })
}));

// change language

const translate = {
    pl: {
        atr1: "EN",
        atr2: "Słowo o mnie",
        atr3: "Kontakt",
        atr4: "Moje prace",
        atr5: "Dzień dobry! Fajnie, że jesteś :)",
        atr6: "O mnie",
        atr7: "Miłośniczka psów, rowerów miejskich, kuchni roślinnej i&nbsp;górskich wędrówek.",
        atr8: "Mimo, że&nbsp;wykształcenie mam humanistyczne, coraz bardziej pochłania mnie programowanie. Potrafię spędzać godziny analizując i&nbsp;udoskonalając kod, co jak do tej pory sprawia mi olbrzymią frajdę :)",
        atr9: "Technologie i umiejętności",
        atr10: "Znajdziesz mnie też na mediach społecznościowych:",
        atr11: "Moj kod",
        atr12: "Przewodnik miejski - wizytówka",
        atr13: "Lista 'to-do'",
        atr14: "Gra 'Papier, kamień, nożyce'",
        atr15: "Baza ras psów",
        atr16: "Kalkulator",
    },
    en: {
        atr1: "PL",
        atr2: "About me",
        atr3: "Contact",
        atr4: "My projects",
        atr5: "Hello! Nice to see You :)",
        atr6: "About me:",
        atr7: "Dogs, city bikes, plant-based cousine and hiking lover.",
        atr8: "Though I always thought I have a humanist's soul I feel great in programming. I could spend hours analysing or improving code and I really enjoy it :)",
        atr9: "Technologies and skills",
        atr10: "You can also find me on Social Media:",
        atr11: "My code",
        atr12: "City guide - business card website",
        atr13: "'To-do' list",
        atr14: "Game 'Paper, stone, scissors'",
        atr15: "The dog breed's base",
        atr16: "Calculator",
    },
};

const setLanguage = (lang) => {
    
    for (const [key, val] of Object.entries(translate[lang])) {
        document.getElementById(key).textContent = val;
    }
    langButton.dataset.lang = lang; 
}

const checkNavigatorLanguage = () => {
    const navLang = window.navigator.language.substr(0, 2);
    setLanguage(navLang);
}

checkNavigatorLanguage();

langButton.addEventListener('click', (e) => {
   let lang = e.target.dataset.lang;

   if (lang === "pl") {
    lang = "en";
} else {
    lang = "pl";
} 
   setLanguage(lang);  
});
