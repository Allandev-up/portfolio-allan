const translations = {
  "fr": {
    "role": "Étudiant en génie logiciel",
    "navProjects": "Projets",
    "navAbout": "Parcours",
    "navContact": "Contact",
    "eyebrow": "YAOUNDÉ, CAMEROUN · IAI-CAMEROUN",
    "headline": "Des idées utiles.<br>Du code concret.",
    "intro": "Je suis Allan Wilfried, étudiant en 3e année de génie logiciel. Je développe des projets web avec React et Vite, et je renforce mes bases en Flutter pour créer des applications mobiles.",
    "see": "Découvrir mes projets",
    "contact": "Discutons ensemble",
    "caption": "SIKAMEUGNI NGONGO ALLAN WILFRIED",
    "captionSub": "Développement web & apprentissage mobile",
    "projectsLabel": "01 / RÉALISATIONS",
    "projectsTitle": "Ce que je construis.",
    "projectsIntro": "Des projets personnels et académiques, et le code public de mon portfolio.",
    "allRepos": "Explorer mon GitHub ↗",
    "portfolioDesc": "Mon site personnel : présentation de mon parcours, de mes compétences et de mes projets. Une interface responsive en HTML, CSS et JavaScript.",
    "source": "Voir le code ↗",
    "personal": "Projet privé",
    "details": "Présentation à venir",
    "pioloDesc": "Projet cité dans mon parcours. Une présentation détaillée sera ajoutée prochainement.",
    "aboutLabel": "02 / PARCOURS",
    "aboutTitle": "Apprendre. Construire.<br>Progresser.",
    "educationTitle": "Génie logiciel · 3e année",
    "educationDesc": "IAI-Cameroun, Yaoundé. Formation en développement logiciel et réalisation de projets académiques.",
    "internTitle": "Stage en développement",
    "internDesc": "Dijital by Waslink. Participation au développement d’applications web et mobiles, à l’intégration de services backend et à la documentation technique.",
    "skillsTitle": "Mes outils au quotidien",
    "web": "Développement web",
    "mobile": "Mobile · bases",
    "tools": "Outils de développement",
    "ai": "Assistants IA",
    "languages": "Français : niveau soutenu · Anglais : A2",
    "contactLabel": "03 / CONTACT",
    "contactTitle": "Construisons la suite.",
    "contactDesc": "À la recherche d’un stage en développement. Parlons de vos projets et de ce que je peux apporter à votre équipe.",
    "email": "Écrire un e-mail ↗",
    "cv": "Télécharger mon CV ↓",
    "footer": "Conçu avec soin, depuis Yaoundé.",
    "skip": "Aller au contenu",
    "project1Desc": "Application mobile et web de recherche de logements et de mise en relation avec des prestataires de services immobiliers, notamment des électriciens. IA intégrée.",
    "project2Desc": "Application conçue pour faciliter la prise en charge et la mise en relation des patients avec le personnel de santé. IA intégrée.",
    "project3Desc": "Plateforme de recherche d’emploi assistée par intelligence artificielle.",
    "project4Desc": "Plateforme avec IA intégrée pour aider les Camerounais à comprendre les lois et les procédures applicables aux situations qu’ils rencontrent."
  },
  "en": {
    "role": "Software engineering student",
    "navProjects": "Projects",
    "navAbout": "Background",
    "navContact": "Contact",
    "eyebrow": "YAOUNDÉ, CAMEROON · IAI-CAMEROON",
    "headline": "Useful ideas.<br>Real code.",
    "intro": "I’m Allan Wilfried, a third-year software engineering student. I build web projects with React and Vite, and I am strengthening my Flutter foundations to create mobile applications.",
    "see": "Explore my projects",
    "contact": "Let’s talk",
    "caption": "SIKAMEUGNI NGONGO ALLAN WILFRIED",
    "captionSub": "Web development & learning mobile",
    "projectsLabel": "01 / WORK",
    "projectsTitle": "What I’m building.",
    "projectsIntro": "Personal and academic projects, and the public source code of my portfolio.",
    "allRepos": "Explore my GitHub ↗",
    "portfolioDesc": "My personal website presenting my background, skills and projects. A responsive interface built with HTML, CSS and JavaScript.",
    "source": "View source ↗",
    "personal": "Private project",
    "details": "Details coming soon",
    "pioloDesc": "A project from my background. A detailed presentation will be added soon.",
    "aboutLabel": "02 / BACKGROUND",
    "aboutTitle": "Learn. Build.<br>Improve.",
    "educationTitle": "Software engineering · Year 3",
    "educationDesc": "IAI-Cameroon, Yaoundé. Software development studies and academic projects.",
    "internTitle": "Development internship",
    "internDesc": "Dijital by Waslink. Contributions to web and mobile applications, backend service integration and technical documentation.",
    "skillsTitle": "Tools I work with",
    "web": "Web development",
    "mobile": "Mobile · foundations",
    "tools": "Development tools",
    "ai": "AI assistants",
    "languages": "French: advanced · English: A2",
    "contactLabel": "03 / CONTACT",
    "contactTitle": "Let’s build what’s next.",
    "contactDesc": "Looking for a development internship. Let’s discuss your projects and how I can contribute to your team.",
    "email": "Send an email ↗",
    "cv": "Download my CV (French) ↓",
    "footer": "Made with care, from Yaoundé.",
    "skip": "Skip to content",
    "project1Desc": "A mobile and web application for finding housing and connecting with property service providers, including electricians. Includes AI features.",
    "project2Desc": "An application designed to support patient care and connect patients with healthcare professionals. Includes AI features.",
    "project3Desc": "An AI-assisted job search platform.",
    "project4Desc": "A platform with AI features helping Cameroonians understand laws and procedures relevant to situations they encounter."
  }
};
function setLanguage(value) {
 const lang = value === 'en' ? 'en' : 'fr';
 document.documentElement.lang = lang;
 document.querySelectorAll('[data-i18n]').forEach(el => {
   const text = translations[lang][el.dataset.i18n];
   if (text !== undefined) {
     el.replaceChildren();
     text.split('<br>').forEach((line, i) => {
       if (i) el.append(document.createElement('br'));
       el.append(document.createTextNode(line));
     });
   }
 });
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
 try { localStorage.setItem('portfolio-lang', lang); } catch (_) { /* Storage may be unavailable. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem('portfolio-lang') || 'fr'; } catch (_) {}
setLanguage(savedLanguage);
