document.addEventListener('DOMContentLoaded', () => {

 //tradução de idiomas
    const translations = {
    "pt-BR": {
        lang_text: "PT-BR",
        // Títulos das Páginas
        title_index: "Pedro Gonçalves - Desenvolvedor Front-End",
        title_sobre: "Sobre Mim - Pedro Gonçalves",
        title_projetos: "Projetos - Pedro Gonçalves",
        title_contato: "Contato - Pedro Gonçalves",

        // Navegação
        nav_inicio: "Início", nav_sobre: "Sobre", nav_projetos: "Projetos", nav_habilidades: "Habilidades", nav_contato: "Entre em Contato",
        
        // Hero (Página Inicial)
        hero_greeting: "Oi! Eu sou", 
        hero_name: "Pedro Gonçalves",
        // CORRIGIDO: Removido &nbsp;
        hero_role: ["Desenvolvedor Front End", "Infraestrutura de Redes"],
        hero_btn_projects: "Ver Projetos", 
        hero_btn_contact: "Contato",
        
        // Sobre (Página Inicial - TEXTO CURTO)
        sections_about: "Sobre Mim", 
        sections_aboutText: "Olá! Eu sou Pedro Gonçalves, um jovem de 17 anos apaixonado por tecnologia e atualmente cursando o Ensino Médio e Técnico em Informática no Colégio Cotemig. Estou buscando ativamente uma oportunidade de estágio para aplicar e expandir meus conhecimentos práticos. Minhas habilidades incluem HTML, CSS, C# e MySQL, além de manutenção de computadores. Meu objetivo é aprender continuamente e contribuir de forma prática para o crescimento da empresa e da equipe.",
        
        // Sobre (Página Sobre - TEXTO LONGO)
        about_p1: "Eu sou Pedro Gonçalves, um jovem de 17 anos apaixonado por tecnologia e atualmente cursando o Ensino Médio e Técnico em Informática no Colégio Cotemig. Estou buscando ativamente uma oportunidade de estágio para aplicar e expandir meus conhecimentos práticos.",
        about_p2: "Minhas habilidades incluem desenvolvimento web com HTML e CSS, lógica de programação em C# e noções de banco de dados MySQL. Também tenho experiência com montagem e manutenção de computadores. Além da minha formação principal, completei diversos cursos, incluindo Fundamentos de Hardware, Introdução à Cibersegurança e Introdução à IA Moderna pela Cisco Academy.",
        about_p3: "Meu objetivo é aprender continuamente e contribuir de forma prática para o crescimento da empresa e da equipe.",

        // Formação
        sections_education: "Formação", 
        education_course: "Técnico em Informática", 
        education_school: "Colégio Cotemig", 
        education_period: "Cursando (Previsão de Conclusão: 2026)",
        
        // Habilidades
        sections_skills: "Habilidades", 
        skills_html: "HTML", 
        skills_css: "CSS", 
        skills_csharp: "C#", 
        skills_linux: "LINUX", 
        skills_mysql: "MySQL", 
        skills_maintenance: "Manutenção de Computadores",
        skills_docker: "Docker", 
        skills_js: "JavaScript", 
        skills_infra: "Infra. de Redes",

        // Projetos (da index.html)
        sections_projects: "Projetos",
        projects_title_belara: "Site Belara", 
        projects_description_belara: "Descrição do Site Belara. Um projeto responsivo e moderno.",
        projects_title_react: "Gastronelle Delivery", 
        projects_description_react: "Site de E-commerce de vendas de restaurantes e mercados.",
        projects_title_csharp_console: "Spotify Clone", 
        projects_description_csharp_console: "Replicação do Spotify.",
        project_btn_view: "Ver Projeto", 
        project_btn_live: " Demonstração",
        
        // Contato (Seções e Página de Contato)
        sections_contact: "Entre em Contato", 
        contact_phone: "Telefone", 
        contact_email: "Email", 
        contact_linkedin: "LinkedIn", 
        contact_github: "GitHub",
        resume: "Currículo",
        form_title: "Envie uma Mensagem",
        contact_links_title: "Ou me encontre por aqui:",
        form_name: "Nome",
        form_email: "Email",
        form_subject: "Assunto",
        form_message: "Mensagem",
        form_button: "Enviar Mensagem",

        // Rodapé
        sections_footer: "© 2025 Pedro Gonçalves. Todos os direitos reservados.",
    },
    "en-US": {
        lang_text: "EN-US",
        // Títulos das Páginas
        title_index: "Pedro Gonçalves - Front-End Developer",
        title_sobre: "About Me - Pedro Gonçalves",
        title_projetos: "Projects - Pedro Gonçalves",
        title_contato: "Contact - Pedro Gonçalves",

        // Navegação
        nav_inicio: "Home", nav_sobre: "About", nav_projetos: "Projects", nav_habilidades: "Skills", nav_contato: "Contact Me",
        
        // Hero (Página Inicial)
        hero_greeting: "Hi! I am", 
        hero_name: "Pedro Gonçalves",
        // CORRIGIDO: Removido &nbsp;
        hero_role: ["Front End Developer", "Network Infrastructure"],
        hero_btn_projects: "View Projects", 
        hero_btn_contact: "Contact",
        
        // Sobre (Página Inicial - TEXTO CURTO)
        sections_about: "About Me", 
        sections_aboutText: "Hello! I am Pedro Gonçalves, a 17-year-old passionate about technology, currently studying High School and a Technical Course in Informatics at Colégio Cotemig. I am actively seeking an internship to apply and expand my practical knowledge. My skills include HTML, CSS, C#, and MySQL, as well as computer maintenance. My goal is to learn continuously and contribute practically to the company's and team's growth.",
        
        // Sobre (Página Sobre - TEXTO LONGO)
        about_p1: "I am Pedro Gonçalves, a 17-year-old passionate about technology and currently studying High School and a Technical Course in Informatics at Colégio Cotemig. I am actively seeking an internship opportunity to apply and expand my practical knowledge.",
        about_p2: "My skills include web development with HTML and CSS, programming logic in C#, and notions of MySQL databases. I also have experience with computer assembly and maintenance. In addition to my main training, I completed several courses, including Hardware Fundamentals, Introduction to Cybersecurity, and Introduction to Modern AI from the Cisco Academy.",
        about_p3: "My goal is to learn continuously and contribute practically to the growth of the company and the team.",
        
        // Formação
        sections_education: "Education", 
        education_course: "Technical in Computer Science", 
        education_school: "Cotemig College", 
        education_period: "In Progress (Expected Completion: 2026)",
        
        // Habilidades
        sections_skills: "Skills", 
        skills_html: "HTML", 
        skills_css: "CSS", 
        skills_csharp: "C#", 
        skills_linux: "LINUX", 
        skills_mysql: "MySQL", 
        skills_maintenance: "Computer Maintenance",
        skills_docker: "Docker", 
        skills_js: "JavaScript", 
        skills_infra: "Network Infra.",

        // Projetos (da index.html)
        sections_projects: "Projects",
        projects_title_belara: "Belara Website", 
        projects_description_belara: "Description of Belara Website. A responsive and modern project.",
        projects_title_react: "Delivery Gastronelle", 
        projects_description_react: "E-commerce website for restaurant and market sales.",
        projects_title_csharp_console: "Spotify Clone", 
        projects_description_csharp_console: "Spotify Replication.",
        project_btn_view: "View Project", 
        project_btn_live: " Live Demo",
        
        // Contato 
        sections_contact: "Contact Me", 
        contact_phone: "Phone", 
        contact_email: "Email", 
        contact_linkedin: "LinkedIn", 
        contact_github: "GitHub",
        resume: "Resume",
        form_title: "Send a Message",
        contact_links_title: "Or find me here:",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_button: "Send Message",

        // Rodapé
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
                el.innerHTML = translations[lang][key];
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
 //Lógica de animação de digitação

    const nameElement = document.getElementById('type-name');
    const roleElement = document.getElementById('type-role');
    const nameCursor = document.querySelector('.name-cursor');
    const roleCursor = document.querySelector('.role-cursor');
    let typingTimeout1, typingTimeout2;

    // Função para digitar
    function typeEffect(element, text, index, cursor, callback) {
        if (index < text.length) {
            // CORRIGIDO: de volta para textContent
            element.textContent += text.charAt(index); 
            typingTimeout1 = setTimeout(() => typeEffect(element, text, index + 1, cursor, callback), 100);
        } else if (callback) {
            if (cursor) cursor.style.display = 'none';
            callback();
        }
    }

    // Função para apagar
    function deleteEffect(element, cursor, callback) {
        const text = element.textContent;
        if (text.length > 0) {
            element.textContent = text.substring(0, text.length - 1);
            typingTimeout2 = setTimeout(() => deleteEffect(element, cursor, callback), 50);
        } else if (callback) {
            if (cursor) cursor.style.display = 'none';
            callback();
        }
    }

    // Função de animação principal
    function resetTypingAnimation(lang) {
    // Limpa timeouts antigos se a língua for trocada
    clearTimeout(typingTimeout1);
    clearTimeout(typingTimeout2);

    // MUDANÇA: Verifica se os elementos existem (corrige bug em outras páginas)
    if (nameElement && roleElement) {
        
        // Pega os textos desta língua
        const nameText = translations[lang].hero_name;
        const roleArray = translations[lang].hero_role;

        // Função interna para iniciar o loop completo
        function startFullLoop() {
            // Limpa os campos
            nameElement.textContent = '';
            roleElement.textContent = '';
            if (nameCursor) nameCursor.style.display = 'inline-block';
            if (roleCursor) roleCursor.style.display = 'none';

            // 1. Digita o NOME
            typeEffect(nameElement, nameText, 0, nameCursor, () => {
                // 2. Inicia o loop das profissões (começando pela primeira, index 0)
                loopRolesRecursive(0);
            });
        }

        // Função recursiva para digitar e apagar as profissões
        function loopRolesRecursive(index) {
            // Pega a profissão atual
            const roleText = roleArray[index];

            // 3. Digita a PROFISSÃO
            if (roleCursor) roleCursor.style.display = 'inline-block';
            typeEffect(roleElement, roleText, 0, roleCursor, () => {
                
                // 4. Espera 3 segundos
                typingTimeout1 = setTimeout(() => {
                    
                    // 5. Apaga a PROFISSÃO
                    deleteEffect(roleElement, roleCursor, () => {
                        
                        // 6. Verifica se tem mais profissões na lista
                        if (index + 1 < roleArray.length) {
                            // 7a. SIM: Chama a função de novo com a próxima profissão
                            loopRolesRecursive(index + 1);
                        } else {
                            // 7b. NÃO (é a última): Apaga o NOME
                            deleteEffect(nameElement, nameCursor, () => {
                                
                                // 8. Espera 0.5s e recomeça o loop inteiro
                                typingTimeout2 = setTimeout(startFullLoop, 500);
                            });
                        }
                    });
                }, 3000); // Tempo que o texto fica parado (3 segundos)
            });
        }
        // Inicia o loop completo pela primeira vez
        startFullLoop();
    }
}

// Lógica do tema claro/escuro

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
                <button class="lang-btn" id="lang-pt-mobile">
                    <img src="https://img.icons8.com/?size=100&id=zHmH8HpOmM90&format=png&color=000000" alt="PT-BR" width="20" height="20"> PT-BR
                </button>
                <span>|</span>
                <button class="lang-btn" id="lang-en-mobile">
                    <img src="https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000" alt="EN-US" width="20" height="20"> EN-US
                </button>
            `;
            
            mobileMenu.appendChild(langSelectorMobile);
            document.body.appendChild(mobileMenu);

            document.getElementById('lang-pt-mobile').addEventListener('click', () => setLanguage('pt-BR'));
            document.getElementById('lang-en-mobile').addEventListener('click', () => setLanguage('en-US'));

            // Pega a língua salva para aplicar no menu mobile
            const currentLang = localStorage.getItem('language') || 'pt-BR';
            if (currentLang === 'pt-BR') {
                document.getElementById('lang-pt-mobile').classList.add('active');
            } else {
                document.getElementById('lang-en-mobile').classList.add('active');
            }

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
    setLanguage(savedLang); // Inicia o idioma e a animação
});