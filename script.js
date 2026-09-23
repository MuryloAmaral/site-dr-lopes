const WHATSAPP_NUMBER = '5511992089170';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', event => {
    if (menuToggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

document.querySelectorAll('.service-icon img, .step-icon img').forEach(image => {
  image.addEventListener('error', () => image.remove(), { once: true });
});

// Preenche o serviço automaticamente quando a pessoa clica em um card.
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#servico');
    if (!select) return;
    select.value = link.dataset.service || '';
  });
});

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const regiao = document.querySelector('#regiao').value.trim();
    const servico = document.querySelector('#servico').value;
    const urgencia = document.querySelector('#urgencia').value;
    const detalhes = document.querySelector('#detalhes').value.trim();

    const message = [
      'Olá! Vim pelo site da Dr. Lopes e gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome}`,
      `Bairro/Cidade: ${regiao}`,
      `Serviço: ${servico}`,
      `Urgência: ${urgencia}`,
      `Detalhes: ${detalhes}`
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

// Entrada suave das seções sem prejudicar navegadores antigos.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const floatingQuote = document.querySelector('.floating-quote');
if (floatingQuote && 'IntersectionObserver' in window) {
  const coveredSections = new Set();
  const quoteObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) coveredSections.add(entry.target);
      else coveredSections.delete(entry.target);
    });
    floatingQuote.classList.toggle('is-hidden', coveredSections.size > 0);
  }, { threshold: 0.04 });

  document.querySelectorAll('#orcamento, .site-footer').forEach(section => quoteObserver.observe(section));
}
