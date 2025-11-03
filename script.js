document.addEventListener('DOMContentLoaded', () => {

    // ============================================= //
    //              TRADUÇÃO DE IDIOMAS              //
    // ============================================= //
    const translations = {
        "pt-BR": {
            lang_text: "PT-BR",
            title: "Pedro Gonçalves - Desenvolvedor Front-End", nav_inicio: "Início", nav_sobre: "Sobre", nav_projetos: "Projetos", nav_habilidades: "Habilidades", nav_contato: "Entre em Contato",
            hero_greeting: "Oi! Eu sou", hero_name: "Pedro Gonçalves", hero_role: "Desenvolvedor Front-End", hero_btn_projects: "Ver Projetos", hero_btn_contact: "Contato",
            sections_about: "Sobre Mim", sections_aboutText: "Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com conhecimento em tecnologias modernas como React, JavaScript e CSS, busco sempre entregar soluções inovadoras e funcionais.",
            sections_education: "Formação", education_course: "Técnico em Informática", education_school: "Colégio Cotemig", education_period: "2022 - 2024",
            sections_skills: "Habilidades", skills_html: "HTML", skills_css: "CSS", skills_csharp: "C#", skills_linux: "LINUX", skills_mysql: "MySQL", skills_maintenance: "Manutenção de Computadores",
            sections_projects: "Projetos",
            projects_title_belara: "Site Belara", projects_description_belara: "Descrição do Site Belara. Um projeto responsivo e moderno.",
            projects_title_react: "Gastronelle Delivery", projects_description_react: "Site de E-commerce de vendas de restaurantes e mercados.",
            projects_title_js_dom: "Manipulação de DOM", projects_description_js_dom: "Projeto JavaScript focado em manipulação do DOM e eventos.",
            projects_title_csharp_console: "Spotify Clone", projects_description_csharp_console: "Replicação do Spotify.",
            projects_title_mysql_db: "Sistema de Banco de Dados MySQL", projects_description_mysql_db: "Projeto de gerenciamento de banco de dados utilizando MySQL.",
            project_btn_view: "Ver Projeto", project_btn_live: " Demonstração",
            sections_contact: "Contato", contact_phone: "Telefone", contact_email: "Email", contact_linkedin: "LinkedIn", contact_github: "GitHub",
            sections_footer: "© 2025 Pedro Gonçalves. Todos os direitos reservados.",
        },
        "en-US": {
            lang_text: "EN-US",
            title: "Pedro Gonçalves - Front-End Developer", nav_inicio: "Home", nav_sobre: "About", nav_projetos: "Projects", nav_habilidades: "Skills", nav_contato: "Contact Me",
            hero_greeting: "Hi! I am", hero_name: "Pedro Gonçalves", hero_role: "Front-End Developer", hero_btn_projects: "View Projects", hero_btn_contact: "Contact",
            sections_about: "About Me", sections_aboutText: "I am a front-end developer passionate about creating incredible digital experiences. With knowledge in modern technologies like React, JavaScript and CSS, I always seek to deliver innovative and functional solutions.",
            sections_education: "Education", education_course: "Technical in Computer Science", education_school: "Cotemig College", education_period: "2022 - 2024",
            sections_skills: "Skills", skills_html: "HTML", skills_css: "CSS", skills_csharp: "C#", skills_linux: "LINUX", skills_mysql: "MySQL", skills_maintenance: "Computer Maintenance",
            sections_projects: "Projects",
            projects_title_belara: "Belara Website", projects_description_belara: "Description of Belara Website. A responsive and modern project.",
            projects_title_react: "Delivery Gastronelle", projects_description_react: "E-commerce website for restaurant and market sales.",
            projects_title_js_dom: "DOM Manipulation", projects_description_js_dom: "JavaScript project focused on DOM manipulation and events.",
            projects_title_csharp_console: "Spotify Clone", projects_description_csharp_console: "Spotify Replication.",
            projects_title_mysql_db: "MySQL Database System", projects_description_mysql_db: "Database management project using MySQL.",
            project_btn_view: "View Project", project_btn_live: "Live Demo",
            sections_contact: "Contact", contact_phone: "Phone", contact_email: "Email", contact_linkedin: "LinkedIn", contact_github: "GitHub",
            sections_footer: "© 2025 Pedro Gonçalves. All rights reserved.",
        }
    };

    const langSelectorBtn = document.getElementById('lang-selector-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangText = document.getElementById('current-lang-text');

    const setLanguage = (lang) => {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        currentLangText.textContent = translations[lang].lang_text;

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        const langPtMobile = document.getElementById('lang-pt-mobile');
        if (langPtMobile) {
            langPtMobile.classList.toggle('active', lang === 'pt-BR');
            document.getElementById('lang-en-mobile').classList.toggle('active', lang === 'en-US');
        }
        resetTypingAnimation(lang);
    };

    if (langSelectorBtn) {
        langSelectorBtn.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('show'); langSelectorBtn.classList.toggle('open'); });
    }
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(e.target.getAttribute('data-lang'));
            langDropdown.classList.remove('show');
            langSelectorBtn.classList.remove('open');
        });
    });
    window.addEventListener('click', () => { if (langDropdown && langDropdown.classList.contains('show')) { langDropdown.classList.remove('show'); langSelectorBtn.classList.remove('open'); } });

    const nameElement = document.getElementById('type-name');
    const roleElement = document.getElementById('type-role');
    const nameCursor = document.querySelector('.name-cursor');
    const roleCursor = document.querySelector('.role-cursor');
    let typingTimeout1, typingTimeout2;

    function typeEffect(element, text, index, cursor, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            typingTimeout1 = setTimeout(() => typeEffect(element, text, index + 1, cursor, callback), 100);
        } else if (callback) {
            if (cursor) cursor.style.display = 'none';
            callback();
        }
    }

    function resetTypingAnimation(lang) {
        clearTimeout(typingTimeout1); clearTimeout(typingTimeout2);
        nameElement.textContent = ''; roleElement.textContent = '';
        if (nameCursor) nameCursor.style.display = 'inline-block';
        if (roleCursor) roleCursor.style.display = 'none';
        const nameText = translations[lang].hero_name;
        const roleText = translations[lang].hero_role;
        typeEffect(nameElement, nameText, 0, nameCursor, () => {
            if (roleCursor) roleCursor.style.display = 'inline-block';
            typeEffect(roleElement, roleText, 0, roleCursor, () => {
                typingTimeout2 = setTimeout(() => resetTypingAnimation(lang), 3000);
            });
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    const applyTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    const hamburgerBtn = document.getElementById('hamburger-button');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        let mobileMenu = document.querySelector('.mobile-menu');
        if (!mobileMenu) {
            mobileMenu = navMenu.cloneNode(true);
            mobileMenu.classList.add('mobile-menu');

            const langSelectorMobile = document.createElement('div');
            langSelectorMobile.className = 'language-selector-mobile';
            langSelectorMobile.innerHTML = `
                <button class="lang-btn" id="lang-pt-mobile">PT-BR</button>
                <span>|</span>
                <button class="lang-btn" id="lang-en-mobile">EN-US</button>
            `;
            mobileMenu.appendChild(langSelectorMobile);
            document.body.appendChild(mobileMenu);

            document.getElementById('lang-pt-mobile').addEventListener('click', () => setLanguage('pt-BR'));
            document.getElementById('lang-en-mobile').addEventListener('click', () => setLanguage('en-US'));
            const currentLang = localStorage.getItem('language') || 'pt-BR';
            setLanguage(currentLang);

            mobileMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    hamburgerBtn.classList.remove('open');
                });
            });
            setTimeout(() => mobileMenu.classList.add('open'), 10);
        } else {
            mobileMenu.classList.remove('open');
        }
    });

    document.addEventListener('transitionend', (event) => {
        if (event.target.classList.contains('mobile-menu') && !event.target.classList.contains('open')) {
            event.target.remove();
        }
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    const savedLang = localStorage.getItem('language') || 'pt-BR';
    setLanguage(savedLang);
});

