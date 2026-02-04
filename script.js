// Função para mostrar/ocultar a seção de profissionais
function toggleProfessionals() {
    const professionalsSection = document.getElementById('professionalsSection');
    const button = document.querySelector('.professionals-btn');
    
    if (professionalsSection.classList.contains('show')) {
        professionalsSection.classList.remove('show');
        button.textContent = 'Conhecer nossas terapeutas (WhatsApp)';
        setTimeout(() => {
            button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    } else {
        professionalsSection.classList.add('show');
        button.textContent = 'Ocultar terapeutas';
        setTimeout(() => {
            professionalsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

// Função para o botão de contato
function contactUs() {
    // Configuração do WhatsApp com o número e mensagem especificados
    const phoneNumber = "5511911829860"; // Número fornecido
    const message = "Gostaria de mais informações por favor";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
}

// Botão para WhatsApp focado nas terapeutas
function contactTherapistsWhatsApp() {
    const phoneNumber = "5511911829860";
    const message = "Olá! Gostaria de mais informações sobre as terapeutas.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Função para abrir o endereço no Google Maps
function openAddress() {
    const addressUrl = "https://maps.app.goo.gl/ipboG2C2Gjuov1qN8";
    window.open(addressUrl, '_blank');
}

// Função para abrir o Instagram
function openInstagram() {
    const instagramUrl = "https://www.instagram.com/enigmamassagens_osasco?igsh=MTliaDNhaXd3eXgxcg==";
    
    // Abre o Instagram em uma nova aba
    window.open(instagramUrl, '_blank');
}

// Função para abrir o Telegram
function openTelegram() {
    const phoneNumber = "5511947067343";
    const message = "Olá, gostaria de mais informações.";
    const telegramUrl = `https://t.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o Telegram em uma nova aba
    window.open(telegramUrl, '_blank');
}

// Adicionar efeito de entrada suave aos cartões quando a seção aparecer
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1}s`;
                entry.target.classList.add('animate-in');
            }
        });
    });

    // Observar todos os cartões de profissionais
    const cards = document.querySelectorAll('.professional-card');
    cards.forEach(card => observer.observe(card));

    // Ligar botão de WhatsApp das terapeutas pelo ID, mantendo o texto
    const therapistsBtn = document.getElementById('therapistsWhatsappBtn');
    if (therapistsBtn) {
        therapistsBtn.addEventListener('click', contactTherapistsWhatsApp);
    }

    // Garantir que o widget do Tawk.to esteja sempre visível quando carregado
    window.Tawk_API = window.Tawk_API || {};
    try {
        window.Tawk_API.onLoad = function() {
            if (typeof window.Tawk_API.showWidget === 'function') {
                window.Tawk_API.showWidget();
            }
        };
    } catch (e) {}

    // Reforçar visibilidade quando a aba voltar ao foco
    const ensureTawkVisible = function() {
        if (window.Tawk_API && typeof window.Tawk_API.showWidget === 'function') {
            window.Tawk_API.showWidget();
        }
    };
    window.addEventListener('focus', ensureTawkVisible);
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) ensureTawkVisible();
    });

    // Iniciar carrossel automático
    // startCarousel(); // Removido conforme instrução
});

// Adicionar estilos de animação dinamicamente
const style = document.createElement('style');
style.textContent = `
    .professional-card {
        opacity: 0;
        transform: translateY(30px);
        animation: none;
    }
    
    .professional-card.animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);



