// Função para mostrar/ocultar a seção de profissionais
function toggleProfessionals() {
    const professionalsSection = document.getElementById('professionalsSection');
    const button = document.querySelector('.professionals-btn');
    
    if (professionalsSection.classList.contains('show')) {
        // Ocultar seção
        professionalsSection.classList.remove('show');
        button.textContent = 'Clique aqui para conhecer as terapeutas';
        
        // Scroll suave para o botão
        setTimeout(() => {
            button.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 300);
        
    } else {
        // Mostrar seção
        professionalsSection.classList.add('show');
        button.textContent = 'Ocultar terapeutas';
        
        // Scroll suave para a seção de profissionais
        setTimeout(() => {
            professionalsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
}

// Função para o botão de contato
function contactUs() {
    // Configuração do WhatsApp com o número e mensagem especificados
    const phoneNumber = "5511993695530"; // Número fornecido
    const message = "Gostaria de mais informações por favor";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
}

// Função para abrir o Instagram
function openInstagram() {
    const instagramUrl = "https://www.instagram.com/enigmamassagens_osasco?igsh=MTliaDNhaXd3eXgxcg==";
    
    // Abre o Instagram em uma nova aba
    window.open(instagramUrl, '_blank');
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
