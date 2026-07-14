// Bilingual Translations Dictionary
const translations = {
    fr: {
        "nav-role": "INGÉNIEUR GÉNIE LOGICIEL",
        "nav-avail": "DISPONIBLE POUR STAGES & COLLABORATIONS",
        "hero-greeting": "BONJOUR, JE SUIS",
        "hero-title": "ÉLÈVE INGÉNIEUR EN GÉNIE LOGICIEL",
        "hero-desc": "Je conçois et développe des solutions logicielles robustes et performantes, alliant architecture propre et code optimisé. De la conception système aux interfaces Web modernes, j'apporte rigueur, précision et évolutivité.",
        "stat-loc-label": "LOCALISATION",
        "stat-loc-val": "Cameroun",
        "stat-exp-label": "FORMATION",
        "stat-exp-val": "Génie Logiciel",
        "stat-avail-label": "DISPONIBILITÉ",
        "stat-avail-val": "Immédiate",
        "projects-heading": "PROJETS SÉLECTIONNÉS",
        "projects-viewall": "VOIR TOUS LES PROJETS",
        "proj1-desc": "Base de données clé-valeur distribuée de haute performance implémentant le consensus Raft pour une tolérance totale aux pannes.",
        "proj2-desc": "Compilateur et machine virtuelle conçus pour optimiser et exécuter de manière sécurisée une syntaxe orientée objet stricte.",
        "proj3-desc": "Outil d'orchestration DevOps cloud-native pour automatiser le build, le test et le déploiement multi-cloud de microservices.",
        "wf-heading": "MON FLUX DE TRAVAIL",
        "wf1-title": "DÉCOUVRIR",
        "wf1-desc": "Analyse des exigences du système, des contraintes techniques et planification d'architecture.",
        "wf2-title": "CONCEVOIR",
        "wf2-desc": "Modélisation des bases de données, architectures API (REST, gRPC) et flux de données.",
        "wf3-title": "DÉVELOPPER",
        "wf3-desc": "Écriture d'un code propre, modulaire et hautement performant avec les patterns adaptés.",
        "wf4-title": "TESTER",
        "wf4-desc": "Couverture de tests unitaires, d'intégration et analyses de performance/sécurité.",
        "wf5-title": "DÉPLOYER",
        "wf5-desc": "Déploiement conteneurisé (Docker), automatisation CI/CD et monitoring en production.",
        "skills-heading": "COMPÉTENCES & EXPERTISE",
        "s-arch": "Architecture Système",
        "s-db": "Modélisation BD",
        "s-backend": "Développement Backend",
        "s-frontend": "Web & Frontend",
        "s-devops": "CI/CD & DevOps",
        "s-quality": "Clean Code & Qualité",
        "award-title": "EXCELLENCE ACADÉMIQUE",
        "award-desc": "Formation d'Élite en ingénierie informatique et développement logiciel.",
        "collab-heading": "COLLABORONS",
        "collab-title-text": "UN PROJET EN TÊTE ?",
        "collab-desc-text": "Je suis à l'écoute de toutes opportunités de stage, contrats freelance ou projets innovants.",
        "c-email": "GMAIL",
        "c-loc": "Yaoundé, Cameroun",
        "collab-btn": "DISCUTONS ENSEMBLE",
        "quote-content": "UN BON CODE NE S'ÉVALUE PAS SUR SON APPARENCE, MAIS SUR LA QUALITÉ DE SON EXÉCUTION.",
        "footer-connect": "REJOIGNEZ-MOI",
        "footer-resume": "TÉLÉCHARGER MON CV"
    },
    en: {
        "nav-role": "SOFTWARE ENGINEER",
        "nav-avail": "AVAILABLE FOR INTERNSHIPS & COLLABORATIONS",
        "hero-greeting": "HI, I'M",
        "hero-title": "SOFTWARE ENGINEERING STUDENT",
        "hero-desc": "I design and build robust, high-performance software solutions, combining clean architecture with optimized code. From system design to modern Web interfaces, I bring rigor, precision, and scalability.",
        "stat-loc-label": "LOCATION",
        "stat-loc-val": "Cameroon",
        "stat-exp-label": "EDUCATION",
        "stat-exp-val": "Software Engineering",
        "stat-avail-label": "DISPONIBILITY",
        "stat-avail-val": "Immediate",
        "projects-heading": "FEATURED PROJECTS",
        "projects-viewall": "VIEW ALL PROJECTS",
        "proj1-desc": "High-performance distributed key-value store implementing the Raft consensus protocol for absolute fault tolerance.",
        "proj2-desc": "Custom compiler and virtual machine designed to optimize and securely execute a strict object-oriented syntax.",
        "proj3-desc": "Cloud-native DevOps orchestration tool for automating microservice building, testing, and multi-cloud deployment.",
        "wf-heading": "MY WORKFLOW",
        "wf1-title": "DISCOVER",
        "wf1-desc": "Analyzing system requirements, technical constraints, and architectural planning.",
        "wf2-title": "ARCHITECT",
        "wf2-desc": "Modeling databases, API schemas (REST, gRPC), and data communication pipelines.",
        "wf3-title": "DEVELOP",
        "wf3-desc": "Writing clean, modular, and highly-optimized code conforming to design patterns.",
        "wf4-title": "TEST",
        "wf4-desc": "Implementing comprehensive unit, integration, and load tests to evaluate reliability and security.",
        "wf5-title": "DEPLOY",
        "wf5-desc": "Containerized deployments (Docker), pipeline automation (CI/CD), and active production monitoring.",
        "skills-heading": "SKILLS & EXPERTISE",
        "s-arch": "System Architecture",
        "s-db": "DB Modeling",
        "s-backend": "Backend Development",
        "s-frontend": "Web & Frontend",
        "s-devops": "CI/CD & DevOps",
        "s-quality": "Clean Code & Quality",
        "award-title": "ACADEMIC EXCELLENCE",
        "award-desc": "Elite training in computer engineering and software development.",
        "collab-heading": "COLLABORATE",
        "collab-title-text": "HAVE A PROJECT IN MIND?",
        "collab-desc-text": "I am open to discussing internship opportunities, freelance gigs, or innovative projects.",
        "c-email": "GMAIL",
        "c-loc": "Yaounde, Cameroon",
        "collab-btn": "LET'S DISCUSS TOGETHER",
        "quote-content": "GOOD CODE IS NOT MEASURED BY ITS LOOKS, BUT BY THE QUALITY OF ITS EXECUTION.",
        "footer-connect": "LET'S CONNECT",
        "footer-resume": "DOWNLOAD MY RESUME"
    }
};

// Language Selector Logic
const btnFr = document.getElementById("lang-fr");
const btnEn = document.getElementById("lang-en");
const htmlTag = document.documentElement;

function setLanguage(lang) {
    if (lang === "en") {
        btnFr.classList.remove("active");
        btnEn.classList.add("active");
        htmlTag.setAttribute("lang", "en");
    } else {
        btnFr.classList.add("active");
        btnEn.classList.remove("active");
        htmlTag.setAttribute("lang", "fr");
    }

    // Translate all elements with data-i18n attributes
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("portfolio-lang", lang);
}

btnFr.addEventListener("click", () => setLanguage("fr"));
btnEn.addEventListener("click", () => setLanguage("en"));

// Auto-load preferred language or fallback to browser language/French
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.substring(0, 2);
        if (browserLang === "en") {
            setLanguage("en");
        } else {
            setLanguage("fr");
        }
    }
    
    // Initialize Lucide Icons
    lucide.createIcons();
});

// Interactive 3D tilt effect on profile photo
const profileCard = document.getElementById("profile-card");
const photoInner = profileCard.querySelector(".photo-inner");

profileCard.addEventListener("mousemove", (e) => {
    const rect = profileCard.getBoundingClientRect();
    
    // Calculate cursor position relative to the element (from -0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Degrees of rotation (max 15 degrees)
    const rotateY = x * 20;
    const rotateX = -y * 20;
    
    // Apply styling: translateZ keeps the image looking separated from the frame
    photoInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    photoInner.style.transition = "transform 0.05s ease-out";
});

profileCard.addEventListener("mouseleave", () => {
    // Reset rotations smoothly
    photoInner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    photoInner.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
});

// Interactive Hover for Project Cards (Subtle parallax rotation)
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        const rotateY = x * 8;
        const rotateX = -y * 8;
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = "transform 0.05s ease-out, background-color 0.4s ease";
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) rotateX(0deg) rotateY(0deg)";
        card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease";
    });
});
