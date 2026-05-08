const isPagesDir = window.location.pathname.includes('/pages/');
const BASE_PATH = isPagesDir ? '..' : '.';
const HOME_PATH = isPagesDir ? '../index.html' : './index.html';
//const cookieBanner = await fetch(`${basePath}components/cookie-banner.html`);

function openLegal(type) {

  const modal = document.getElementById('legalModal');
  const content = document.getElementById('legalContent');

  if (!modal || !content) {
    console.warn('Modal ainda não carregado');
    return;
  }
  if (type === 'privacy') {
  content.innerHTML = `
    <h2 class="text-xl font-bold mb-2">
      Seus dados estão protegidos
    </h2>

    <p class="text-sm text-gray-600 mb-4">
      Transparência e conformidade com a LGPD (Lei nº 13.709/2018)
    </p>

    <div class="bg-gray-50 p-4 rounded-lg mb-4">
      <p class="font-medium">
        ✔ Os dados pertencem à sua instituição
      </p>
      <p class="font-medium">
        ✔ Não comercializamos dados pessoais
      </p>
      <p class="font-medium">
        ✔ Uso exclusivo para fins educacionais
      </p>
    </div>

    <p class="text-sm text-gray-700">
      A ESTUDANTE.IM atua como operadora de dados, tratando informações
      exclusivamente em nome das instituições de ensino.
    </p>

    <a href="${BASE_PATH}/pages/privacy.html" target="_blank" 
       class="inline-block mt-4 font-semibold text-primary underline">
      Ver política completa →
    </a>
  `;
}

if (type === 'lgpd') {
  content.innerHTML = `
    <h2 class="text-xl font-bold mb-2">
      Conformidade com a LGPD
    </h2>

    <p class="text-sm text-gray-600 mb-4">
      Estrutura de tratamento de dados alinhada à legislação brasileira
    </p>

    <div class="bg-gray-50 p-4 rounded-lg mb-4">
      <p class="font-medium">✔ Papel definido: operador de dados</p>
      <p class="font-medium">✔ Bases legais aplicadas</p>
      <p class="font-medium">✔ Segurança e retenção controladas</p>
    </div>

    <p class="text-sm text-gray-700">
      Nossa estrutura atende requisitos legais para operação com instituições
      de ensino e ambientes educacionais.
    </p>

    <a href="${BASE_PATH}/pages/lgpd.html" target="_blank" 
       class="inline-block mt-4 font-semibold text-primary underline">
      Ver documento completo →
    </a>
  `;
}

if (type === 'terms') {
  content.innerHTML = `
    <h2 class="text-xl font-bold mb-2">
      Termos de uso da plataforma
    </h2>

    <p class="text-sm text-gray-600 mb-4">
      Uso institucional, com foco educacional
    </p>

    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700">
      <li>Uso mediante contratação institucional</li>
      <li>Responsabilidade da instituição sobre os dados</li>
      <li>Finalidade exclusivamente educacional</li>
    </ul>

    <a href="${BASE_PATH}/pages/terms.html" target="_blank" 
       class="inline-block mt-4 font-semibold text-primary underline">
      Ver termos completos →
    </a>
  `;
}
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLegal() {
  const modal = document.getElementById('legalModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Header
async function loadHeader() {
  try {
    const res = await fetch(`${BASE_PATH}/components/header.html`);
    const html = await res.text();
    document.getElementById('header').innerHTML = html;
    fixNavigationPaths();
    fixLogoPath();
  } catch (err) {
    console.error('Erro ao carregar header:', err);
  }
}
document.addEventListener('DOMContentLoaded', loadHeader);

function fixNavigationPaths() {
  const links = document.querySelectorAll('[data-nav]');

  links.forEach(link => {
    const section = link.dataset.nav;

    link.href = `${HOME_PATH}#${section}`;
  });
}

function fixLogoPath() {
  const logo = document.querySelector('[data-logo]');

  if (!logo) return;

  logo.src = isPagesDir
    ? '../img/logo/logo-estudanteim-brain.png'
    : './img/logo/logo-estudanteim-brain.png';
}

function applyHeaderOffset() {
  const header = document.querySelector("nav");
  if (!header) return;

  const height = header.offsetHeight;
  document.body.style.paddingTop = height + "px";
}

window.addEventListener("load", applyHeaderOffset);

// Footer
async function loadFooter() {
  try {
    const res = await fetch(`${BASE_PATH}/components/footer.html`);
    const html = await res.text();
    document.getElementById('footer').innerHTML = html;
  } catch (err) {
    console.error('Erro ao carregar footer:', err);
  }
}
document.addEventListener('DOMContentLoaded', loadFooter);

// Modal Legal
async function loadModalLegal() {
  try {
    const res = await fetch(`${BASE_PATH}/components/modal-legal.html`);
    const html = await res.text();
    document.getElementById('legalModalContainer').innerHTML = html;
  } catch (err) {
    console.error('Erro ao carregar modal-legal:', err);
  }
}
document.addEventListener('DOMContentLoaded', loadModalLegal);


// Cookie Banner
async function loadCookieBanner() {
  try {
    const res = await fetch(`${BASE_PATH}/components/cookie-banner.html`);
    const html = await res.text();

    document.getElementById('cookieBanner').innerHTML = html;

    initializeCookieBanner();
    fixLegalPaths();

  } catch (err) {
    console.error('Erro ao carregar cookie-banner:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadCookieBanner);

function initializeCookieBanner() {

  const banner = document.getElementById('cookieConsentBanner');

  if (!banner) return;

  const acceptAllBtn = document.getElementById('acceptAllCookies');
  const openPreferencesBtn = document.getElementById('openCookiePreferences');
  const preferencesPanel = document.getElementById('cookiePreferencesPanel');
  const savePreferencesBtn = document.getElementById('saveCookiePreferences');

  const analytics = document.getElementById('cookieAnalytics');
  const functionality = document.getElementById('cookieFunctionality');
  const communication = document.getElementById('cookieCommunication');

  const consent = localStorage.getItem('cookieConsent');

  if (!consent) {
    banner.classList.remove('hidden');
  }

  acceptAllBtn?.addEventListener('click', () => {

    localStorage.setItem('cookieConsent', 'accepted');

    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        analytics: true,
        functionality: true,
        communication: true
      })
    );

    banner.classList.add('hidden');
  });

  openPreferencesBtn?.addEventListener('click', () => {
    preferencesPanel.classList.toggle('hidden');
  });

  savePreferencesBtn?.addEventListener('click', () => {

    localStorage.setItem('cookieConsent', 'custom');

    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        analytics: analytics.checked,
        functionality: functionality.checked,
        communication: communication.checked
      })
    );

    banner.classList.add('hidden');
  });
}

function fixLegalPaths() {

  const legalLinks = document.querySelectorAll('[data-legal]');

  legalLinks.forEach(link => {

    const page = link.dataset.legal;

    link.href = `${BASE_PATH}/pages/${page}.html`;
    link.target = '_blank';

  });

}