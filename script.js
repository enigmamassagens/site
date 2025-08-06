// Função para mostrar/ocultar a seção de profissionais
function toggleProfessionals() {
    const professionalsSection = document.getElementById('professionalsSection');
    const button = document.querySelector('.professionals-btn');
    
    if (professionalsSection.classList.contains('show')) {
        // Ocultar seção
        professionalsSection.classList.remove('show');
        button.textContent = 'Conheça nossas profissionais';
        
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
        button.textContent = 'Ocultar profissionais';
        
        // Scroll suave para a seção de profissionais
        setTimeout(() => {
            professionalsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
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
