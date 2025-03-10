document.querySelectorAll('.toggle-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(button.getAttribute('data-target'));
    const isOpen = target.classList.contains('show');

    // Aplica animação antes de abrir ou fechar
    target.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out';

    if (isOpen) {
      // Animação de fechamento (move para baixo e desaparece)
      target.style.transform = 'translateY(100%)'; // Muda para translateY
      target.style.opacity = '0';
      target.style.visibility = 'hidden';

      setTimeout(() => {
        target.classList.remove('show');
      }, 300); // Tempo correspondente à duração da transição
    } else {
      // Adiciona a classe primeiro, depois ativa a transição
      target.classList.add('show');
      setTimeout(() => {
        target.style.transform = 'translateY(0)'; // Muda para translateY
        target.style.opacity = '1';
        target.style.visibility = 'visible';
      }, 10); // Pequeno atraso para garantir que a classe seja aplicada antes da animação
    }
  });
});


// Funcionalidade de "Ler mais"
document.addEventListener('DOMContentLoaded', function () {
  // Adiciona evento de clique para "Ler mais"
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link

      // Encontra o card de depoimento mais próximo
      const testimonialCard = this.closest('.testimonial-card');

      // Elementos do card
      const fullText = testimonialCard.querySelector('.testimonial-full');
      const shortText = testimonialCard.querySelector('.testimonial-text');
      const readMoreButton = testimonialCard.querySelector('.read-more');
      const readLessButton = testimonialCard.querySelector('.read-less');

      // Recolhe todos os outros comentários abertos
      document.querySelectorAll('.testimonial-full').forEach(text => {
        if (text !== fullText) {
          text.style.display = 'none';
        }
      });
      document.querySelectorAll('.testimonial-text').forEach(text => {
        if (text !== shortText) {
          text.style.display = 'block';
        }
      });
      document.querySelectorAll('.read-more').forEach(button => {
        if (button !== readMoreButton) {
          button.style.display = 'inline';
        }
      });
      document.querySelectorAll('.read-less').forEach(button => {
        if (button !== readLessButton) {
          button.style.display = 'none';
        }
      });

      // Alterna entre expandir e recolher o comentário clicado
      if (fullText.style.display === 'none' || !fullText.style.display) {
        // Expande o texto completo
        fullText.style.display = 'block';
        shortText.style.display = 'none';
        readMoreButton.style.display = 'none';
        readLessButton.style.display = 'inline';
      } else {
        // Recolhe o texto completo
        fullText.style.display = 'none';
        shortText.style.display = 'block';
        readMoreButton.style.display = 'inline';
        readLessButton.style.display = 'none';
      }
    });
  });

  // Adiciona evento de clique para "Ler menos"
  document.querySelectorAll('.read-less').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link

      // Encontra o card de depoimento mais próximo
      const testimonialCard = this.closest('.testimonial-card');

      // Elementos do card
      const fullText = testimonialCard.querySelector('.testimonial-full');
      const shortText = testimonialCard.querySelector('.testimonial-text');
      const readMoreButton = testimonialCard.querySelector('.read-more');
      const readLessButton = testimonialCard.querySelector('.read-less');

      // Recolhe o texto completo
      fullText.style.display = 'none';
      shortText.style.display = 'block';
      readMoreButton.style.display = 'inline';
      readLessButton.style.display = 'none';
    });
  });
});

 // Funcionalidade de "Ver mais"
document.getElementById('load-more').addEventListener('click', function () {
    const hiddenTestimonials = document.querySelectorAll('.testimonials-list .d-none');
    hiddenTestimonials.forEach((testimonial, index) => {
      if (index < 4) { // Mostra 4 comentários por vez
        testimonial.classList.remove('d-none');
      }
    });
  
    // Exibe o botão "Ver menos" e oculta o botão "Ver mais" se não houver mais comentários ocultos
    document.getElementById('load-less').classList.remove('d-none');
    if (document.querySelectorAll('.testimonials-list .d-none').length === 0) {
      this.classList.add('d-none');
    }
  });
  
  // Funcionalidade de "Ver menos"
  document.getElementById('load-less').addEventListener('click', function () {
    const visibleTestimonials = document.querySelectorAll('.testimonials-list .col-md-3:not(.d-none)');
    visibleTestimonials.forEach((testimonial, index) => {
      if (index >= 4) { // Oculta todos os comentários além dos 4 primeiros
        testimonial.classList.add('d-none');
      }
    });
  
    // Exibe o botão "Ver mais" e oculta o botão "Ver menos"
    document.getElementById('load-more').classList.remove('d-none');
    this.classList.add('d-none');
  });