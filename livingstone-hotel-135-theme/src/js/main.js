// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});

// Quando o Liferay terminar de carregar todos os portlets
Liferay.on('allPortletsReady', function() {
    initializeNavigation();
});

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    const body = document.body;
    const header = document.querySelector('.header-main');
    const sections = document.querySelectorAll('section[id]');
    
    // Verificar se os elementos existem antes de continuar
    if (!hamburger || !navLinks || !header) {
        console.warn('Elementos necessários para navegação não encontrados');
        return;
    }
    
    // Criar overlay se não existir
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }
    
    // Controle do menu mobile
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
        if (navLinks.classList.contains('active')) {
            navItems.forEach(item => {
                item.classList.remove('visible');
                void item.offsetWidth;
                // Reflow - força o navegador a recalcular o layout
                item.classList.add('visible');
            });
        }
    });
    
    // Fecha menu ao clicar em links ou overlay
    const closeMenu = function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    };
    
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
    
    overlay.addEventListener('click', closeMenu);
    
    // Adicionar classe 'scrolled' ao header quando rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ADICIONAR AQUI: Controle da visibilidade do header durante rolagem
    let lastScrollTop = 0;
    
    function handleNavVisibility() {
        const currentScrollTop = window.scrollY;
        
        // Não aplicar o efeito quando o menu mobile está aberto
        if (navLinks.classList.contains('active')) return;
        
        // Aplicar efeito apenas após rolar uma certa distância
        if (currentScrollTop > 200) {
            if (currentScrollTop > lastScrollTop) {
                // Rolando para baixo - esconder o header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Rolando para cima - mostrar o header
                header.style.transform = 'translateY(0)';
            }
        } else {
            // Próximo ao topo - sempre mostrar o header
            header.style.transform = 'translateY(0)';
        }
        
        // Atualizar posição de rolagem para próxima verificação
        lastScrollTop = currentScrollTop;
    }
    
    window.addEventListener('scroll', handleNavVisibility);
    
    // Destaca o link de navegação correspondente à seção atual
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            // Ajustar offset para melhor detecção da seção atual
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Verificar se a posição de rolagem está dentro da seção atual
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover classe 'active' de todos os links de navegação
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Adicionar classe 'active' ao link correspondente à seção atual
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Inicializar carrossel do Bootstrap, se existir
    const carousels = document.querySelectorAll('.carousel');
    if (carousels.length > 0 && typeof bootstrap !== 'undefined') {
        carousels.forEach(carousel => {
            new bootstrap.Carousel(carousel, {
                interval: 5000
            });
        });
    } else {
        console.warn('Bootstrap não encontrado ou não há carrosséis na página');
    }

}