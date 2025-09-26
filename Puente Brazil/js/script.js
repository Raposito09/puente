document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do Menu e Dropdown ---
    const languageBtn = document.getElementById('languageBtn');
    const languageBtnText = languageBtn ? languageBtn.querySelector('i') ? languageBtn.querySelector('i').previousSibling : languageBtn : null; // Pega o nó de texto antes do ícone
    const languageMenu = document.getElementById('languageMenu');

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLanguageBtn = document.getElementById('mobileLanguageBtn');
    const mobileLanguageBtnText = mobileLanguageBtn ? mobileLanguageBtn.querySelector('i') ? mobileLanguageBtn.querySelector('i').previousSibling : mobileLanguageBtn : null; // Pega o nó de texto antes do ícone
    const mobileLanguageMenu = document.getElementById('mobileLanguageMenu');

    // --- Objeto de Traduções ---
    const translations = {
        'pt-BR': {
            lang_name: 'Português', // Nome do idioma para exibir no botão
            page_title: 'Puente Brazil - Início',
            nav_home: 'Início',
            nav_about: 'Sobre',
            nav_projects: 'Projetos',
            nav_contact: 'Contato',
            hero_title: 'Bem-vindo ao Puente Brazil',
            hero_subtitle: 'Promovendo o desenvolvimento integral da pessoa humana e a justiça social.',
            hero_button: 'Saiba Mais',
            mission_title: 'Nossa Missão',
            mission_paragraph1: 'O Puente Brazil é uma associação civil independente, sem fins lucrativos, que promove o desenvolvimento integral da pessoa humana, defendendo seus direitos e valorizando a dignidade de todos, especialmente os mais vulneráveis.',
            mission_paragraph2: 'Atuamos principalmente com pessoas em situação de vulnerabilidade social, buscando fortalecer uma sociedade que valorize o perdão, a justiça e a paz.',
            values_title: 'Nossos Valores',
            value_solidarity_title: 'Solidariedade',
            value_solidarity_text: 'Acreditamos na força da união para transformar realidades.',
            value_dignity_title: 'Dignidade Humana',
            value_dignity_text: 'Respeito e valorização de cada indivíduo.',
            value_justice_title: 'Justiça Social',
            value_justice_text: 'Lutamos por um mundo mais justo e equitativo.',
            footer_tagline: 'Promovendo o desenvolvimento integral da pessoa humana e a justiça social.',
            footer_nav_title: 'Navegação',
            footer_contact_title: 'Contato',
            footer_address: 'Rua Exemplo, 123 - Cidade, Estado',
            footer_phone: '(XX) XXXX-XXXX',
            footer_email: 'contato@puentebrasil.org.br',
            footer_newsletter_title: 'Newsletter',
            footer_newsletter_text: 'Receba nossas novidades por e-mail.',
            footer_newsletter_placeholder: 'Seu e-mail',
            footer_newsletter_button: 'Assinar',
            footer_copyright: '&copy; 2025 Puente Brazil. Todos os direitos reservados.'
        },
        'en': {
            lang_name: 'English',
            page_title: 'Puente Brazil - Home',
            nav_home: 'Home',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_contact: 'Contact',
            hero_title: 'Welcome to Puente Brazil',
            hero_subtitle: 'Promoting the integral development of the human person and social justice.',
            hero_button: 'Learn More',
            mission_title: 'Our Mission',
            mission_paragraph1: 'Puente Brazil is an independent, non-profit civil association that promotes the integral development of the human person, defending their rights and valuing the dignity of all, especially the most vulnerable.',
            mission_paragraph2: 'We primarily work with people in situations of social vulnerability, seeking to strengthen a society that values forgiveness, justice, and peace.',
            values_title: 'Our Values',
            value_solidarity_title: 'Solidarity',
            value_solidarity_text: 'We believe in the power of unity to transform realities.',
            value_dignity_title: 'Human Dignity',
            value_dignity_text: 'Respect and appreciation for each individual.',
            value_justice_title: 'Social Justice',
            value_justice_text: 'We fight for a more just and equitable world.',
            footer_tagline: 'Promoting the integral development of the human person and social justice.',
            footer_nav_title: 'Navigation',
            footer_contact_title: 'Contact',
            footer_address: 'Example Street, 123 - City, State',
            footer_phone: '(XX) XXXX-XXXX',
            footer_email: 'contact@puentebrasil.org.br',
            footer_newsletter_title: 'Newsletter',
            footer_newsletter_text: 'Receive our news by email.',
            footer_newsletter_placeholder: 'Your email',
            footer_newsletter_button: 'Subscribe',
            footer_copyright: '&copy; 2025 Puente Brazil. All rights reserved.'
        },
        'es': {
            lang_name: 'Español',
            page_title: 'Puente Brazil - Inicio',
            nav_home: 'Inicio',
            nav_about: 'Acerca de',
            nav_projects: 'Proyectos',
            nav_contact: 'Contacto',
            hero_title: 'Bienvenido a Puente Brazil',
            hero_subtitle: 'Promoviendo el desarrollo integral de la persona humana y la justicia social.',
            hero_button: 'Saber Más',
            mission_title: 'Nuestra Misión',
            mission_paragraph1: 'Puente Brazil es una asociación civil independiente, sin fines de lucro, que promueve el desarrollo integral de la persona humana, defendiendo sus derechos y valorando la dignidad de todos, especialmente los más vulnerables.',
            mission_paragraph2: 'Trabajamos principalmente con personas en situación de vulnerabilidad social, buscando fortalecer una sociedad que valore el perdón, la justicia y la paz.',
            values_title: 'Nuestros Valores',
            value_solidarity_title: 'Solidaridad',
            value_solidarity_text: 'Creemos en el poder de la unión para transformar realidades.',
            value_dignity_title: 'Dignidad Humana',
            value_dignity_text: 'Respeto y aprecio por cada individuo.',
            value_justice_title: 'Justicia Social',
            value_justice_text: 'Luchamos por un mundo más justo y equitativo.',
            footer_tagline: 'Promoviendo el desarrollo integral de la persona humana y la justicia social.',
            footer_nav_title: 'Navegación',
            footer_contact_title: 'Contacto',
            footer_address: 'Calle Ejemplo, 123 - Ciudad, Estado',
            footer_phone: '(XX) XXXX-XXXX',
            footer_email: 'contacto@puentebrasil.org.br',
            footer_newsletter_title: 'Boletín',
            footer_newsletter_text: 'Recibe nuestras noticias por correo electrónico.',
            footer_newsletter_placeholder: 'Tu correo electrónico',
            footer_newsletter_button: 'Suscribirse',
            footer_copyright: '&copy; 2025 Puente Brazil. Todos los derechos reservados.'
        },
        'zh': {
            lang_name: 'Mandarim',
            page_title: 'Puente Brazil - 主页',
            nav_home: '主页',
            nav_about: '关于我们',
            nav_projects: '项目',
            nav_contact: '联系',
            hero_title: '欢迎来到Puente Brazil',
            hero_subtitle: '促进人的全面发展和社会正义。',
            hero_button: '了解更多',
            mission_title: '我们的使命',
            mission_paragraph1: 'Puente Brazil是一个独立的非营利性民间协会，致力于促进人的全面发展，捍卫其权利，并珍视所有人的尊严，特别是最弱势群体。',
            mission_paragraph2: '我们主要与处于社会弱势地位的人群合作，力求建立一个重视宽恕、正义与和平的社会。',
            values_title: '我们的价值观',
            value_solidarity_title: '团结',
            value_solidarity_text: '我们相信团结的力量可以改变现实。',
            value_dignity_title: '人的尊严',
            value_dignity_text: '尊重和珍视每一个人。',
            value_justice_title: '社会正义',
            value_justice_text: '我们为建立一个更公正、更公平的世界而奋斗。',
            footer_tagline: '促进人的全面发展和社会正义。',
            footer_nav_title: '导航',
            footer_contact_title: '联系方式',
            footer_address: '示例街123号 - 城市，州',
            footer_phone: '(XX) XXXX-XXXX',
            footer_email: 'contact@puentebrasil.org.br',
            footer_newsletter_title: '新闻通讯',
            footer_newsletter_text: '通过电子邮件接收我们的新闻。',
            footer_newsletter_placeholder: '您的电子邮件',
            footer_newsletter_button: '订阅',
            footer_copyright: '&copy; 2025 Puente Brazil. 版权所有。'
        },
        'hi': {
            lang_name: 'हिंदी',
            page_title: 'पुएंते ब्राजील - होम',
            nav_home: 'होम',
            nav_about: 'हमारे बारे में',
            nav_projects: 'परियोजनाएं',
            nav_contact: 'संपर्क करें',
            hero_title: 'पुएंते ब्राजील में आपका स्वागत है',
            hero_subtitle: 'मानव व्यक्ति के समग्र विकास और सामाजिक न्याय को बढ़ावा देना।',
            hero_button: 'और जानें',
            mission_title: 'हमारा मिशन',
            mission_paragraph1: 'पुएंते ब्राजील एक स्वतंत्र, गैर-लाभकारी नागरिक संघ है जो मानव व्यक्ति के समग्र विकास को बढ़ावा देता है, उनके अधिकारों की रक्षा करता है और सभी की गरिमा को महत्व देता है, विशेष रूप से सबसे कमजोर लोगों की।',
            mission_paragraph2: 'हम मुख्य रूप से सामाजिक रूप से कमजोर लोगों के साथ काम करते हैं, एक ऐसे समाज को मजबूत करने की कोशिश करते हैं जो क्षमा, न्याय और शांति को महत्व देता है।',
            values_title: 'हमारे मूल्य',
            value_solidarity_title: 'एकजुटता',
            value_solidarity_text: 'हम वास्तविकताओं को बदलने के लिए एकता की शक्ति में विश्वास करते हैं।',
            value_dignity_title: 'मानव गरिमा',
            value_dignity_text: 'प्रत्येक व्यक्ति के लिए सम्मान और प्रशंसा।',
            value_justice_title: 'सामाजिक न्याय',
            value_justice_text: 'हम एक अधिक न्यायपूर्ण और न्यायसंगत दुनिया के लिए लड़ते हैं।',
            footer_tagline: 'मानव व्यक्ति के समग्र विकास और सामाजिक न्याय को बढ़ावा देना।',
            footer_nav_title: 'नेविगेशन',
            footer_contact_title: 'संपर्क करें',
            footer_address: 'उदाहरण गली, 123 - शहर, राज्य',
            footer_phone: '(XX) XXXX-XXXX',
            footer_email: 'contact@puentebrasil.org.br',
            footer_newsletter_title: 'न्यूज़लेटर',
            footer_newsletter_text: 'ईमेल द्वारा हमारी खबरें प्राप्त करें।',
            footer_newsletter_placeholder: 'आपका ईमेल',
            footer_newsletter_button: 'सदस्यता लें',
            footer_copyright: '&copy; 2025 Puente Brazil. सभी अधिकार सुरक्षित।'
        }
    };

    // --- Variável para armazenar o idioma atual ---
    // Define pt-BR como padrão se não houver nada no localStorage
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'pt-BR'; 

    // --- Função para Traduzir a Página ---
    function translatePage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
        const currentTranslations = translations[lang];

        if (!currentTranslations) {
            console.warn(`Traduções para o idioma "${lang}" não encontradas.`);
            return;
        }

        elementsToTranslate.forEach(element => {
            const key = element.dataset.translateKey;
            if (currentTranslations[key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });

        // Atualiza o atributo lang da tag <html>
        document.documentElement.lang = lang;
        // Atualiza o título da página
        document.title = currentTranslations.page_title;

        // Atualiza o texto dos botões de idioma
        if (languageBtnText) {
            languageBtnText.textContent = currentTranslations.lang_name + ' '; // Adiciona um espaço para o ícone
        }
        if (mobileLanguageBtnText) {
            mobileLanguageBtnText.textContent = currentTranslations.lang_name + ' '; // Adiciona um espaço para o ícone
        }

        // Salva o idioma selecionado no localStorage
        localStorage.setItem('selectedLanguage', lang);
        currentLanguage = lang; // Atualiza a variável global
    }

    // --- Funções de Toggle (mantidas e adaptadas para a tradução) ---

    // Toggle para o dropdown de idiomas (Desktop)
    if (languageBtn && languageMenu) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = languageMenu.classList.contains('show');
            if (isOpen) {
                languageMenu.classList.remove('show');
                languageBtn.setAttribute('aria-expanded', 'false');
            } else {
                languageMenu.classList.add('show');
                languageBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // Toggle para o menu hamburger (Mobile)
    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            if (!mobileNav.classList.contains('open') && mobileLanguageMenu) {
                mobileLanguageMenu.classList.remove('show');
                mobileLanguageBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Toggle para o dropdown de idiomas (Mobile)
    if (mobileLanguageBtn && mobileLanguageMenu) {
        mobileLanguageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileLanguageMenu.classList.contains('show');
            if (isOpen) {
                mobileLanguageMenu.classList.remove('show');
                mobileLanguageBtn.setAttribute('aria-expanded', 'false');
            } else {
                mobileLanguageMenu.classList.add('show');
                mobileLanguageBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // --- Fechar menus ao clicar fora ---
    document.addEventListener('click', (e) => {
        if (languageMenu && languageBtn && !languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('show');
            languageBtn.setAttribute('aria-expanded', 'false');
        }

        if (mobileNav && hamburgerBtn && !hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('open');
            if (mobileLanguageMenu) {
                mobileLanguageMenu.classList.remove('show');
                mobileLanguageBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // --- Ação ao selecionar um idioma ---
    // Para o dropdown desktop
    if (languageMenu) {
        languageMenu.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const lang = item.dataset.lang;
                translatePage(lang); // Chama a função de tradução
                languageMenu.classList.remove('show');
                languageBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Para o dropdown mobile
    if (mobileLanguageMenu) {
        mobileLanguageMenu.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const lang = item.dataset.lang;
                translatePage(lang); // Chama a função de tradução
                mobileLanguageMenu.classList.remove('show');
                mobileLanguageBtn.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('open'); // Fecha o menu mobile após a seleção
            }
        });
    }

    // --- Traduzir a página na carga inicial ---
    translatePage(currentLanguage);
});