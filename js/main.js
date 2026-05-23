const isPagesDir = window.location.pathname.includes("/pages/");
const BASE_PATH = isPagesDir ? ".." : ".";
const HOME_PATH = isPagesDir ? "../index.html" : "./index.html";
//const cookieBanner = await fetch(`${basePath}components/cookie-banner.html`);

function openLegal(type) {
  const modal = document.getElementById("legalModal");
  const content = document.getElementById("legalContent");

  if (!modal || !content) {
    console.warn("Modal ainda não carregado");
    return;
  }
  if (type === "privacy") {
    content.innerHTML = `

    <div class="space-y-6">
      <!-- TITLE -->
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-primary mb-3">
          Seus dados estão protegidos
        </h2>
        <p class="text-slate-600 leading-relaxed">
          Transparência e conformidade com a LGPD (Lei nº 13.709/2018).
        </p>
      </div>

      <!-- HIGHLIGHT -->
      <div class="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-5">

        <ul class="space-y-3 text-slate-700">

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Os dados pertencem à sua instituição
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Não comercializamos dados pessoais
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Uso exclusivo para fins educacionais
            </span>
          </li>
        </ul>
      </div>

      <!-- DESCRIPTION -->
      <p class="text-slate-600 leading-relaxed">
        A ESTUDANTE.IM atua como operadora de dados, tratando informações
        exclusivamente em nome das instituições de ensino, respeitando princípios
        de privacidade, segurança e governança institucional.
      </p>

      <!-- CTA -->
      <a 
        href="${BASE_PATH}/pages/privacy.html"
        target="_blank"
        class="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1E5BFF] to-[#22C55E] text-white font-semibold text-sm shadow-sm hover:brightness-105 motion-institutional">

        Ver política completa

        <span class="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </a>
    </div>

  `;
  }

  if (type === "lgpd") {
    content.innerHTML = `

    <div class="space-y-6">
      <!-- TITLE -->
      <div>

        <h2 class="text-3xl font-bold tracking-tight text-primary mb-3">
          Conformidade com a LGPD
        </h2>
        <p class="text-slate-600 leading-relaxed">
          Estrutura de tratamento de dados alinhada à legislação brasileira.
        </p>
      </div>

      <!-- HIGHLIGHT -->
      <div class="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-5">

        <ul class="space-y-3 text-slate-700">

          <li class="flex items-start gap-3">

            <span class="text-primary font-bold">•</span>
            <span>
              Papel definido: operador de dados
            </span>
          </li>

          <li class="flex items-start gap-3">

            <span class="text-primary font-bold">•</span>
            <span>
              Bases legais aplicadas
            </span>
          </li>

          <li class="flex items-start gap-3">

            <span class="text-primary font-bold">•</span>
            <span>
              Segurança e retenção controladas
            </span>
          </li>
        </ul>
      </div>

      <!-- DESCRIPTION -->
      <p class="text-slate-600 leading-relaxed">
        Nossa estrutura atende requisitos legais para operação com instituições
        de ensino e ambientes educacionais, respeitando diretrizes de privacidade,
        segurança e governança de dados.
      </p>

      <!-- CTA -->
      <a 
        href="${BASE_PATH}/pages/lgpd.html"
        target="_blank"
        class="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1E5BFF] to-[#22C55E] text-white font-semibold text-sm shadow-sm hover:brightness-105 motion-institutional">
        Ver documento completo
        <span class="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </a>
    </div>

  `;
  }

  if (type === "terms") {
    content.innerHTML = `
    <div class="space-y-6">
      <!-- TITLE -->
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-primary mb-3">
          Termos de uso da plataforma
        </h2>
        <p class="text-slate-600 leading-relaxed">
          Uso institucional com foco exclusivo em ambientes educacionais.
        </p>
      </div>

      <!-- HIGHLIGHT -->
      <div class="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-5">
        <ul class="space-y-3 text-slate-700">

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Uso mediante contratação institucional
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Responsabilidade da instituição sobre os dados
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">•</span>
            <span>
              Finalidade exclusivamente educacional
            </span>
          </li>

        </ul>

      </div>

      <!-- DESCRIPTION -->
      <p class="text-slate-600 leading-relaxed">
        A utilização da plataforma ocorre exclusivamente em contexto institucional,
        respeitando diretrizes pedagógicas, operacionais e legais aplicáveis ao ambiente educacional.
      </p>

      <!-- CTA -->
      <a 
        href="${BASE_PATH}/pages/terms.html"
        target="_blank"
        class="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1E5BFF] to-[#22C55E] text-white font-semibold text-sm shadow-sm hover:brightness-105 motion-institutional">

        Ver termos completos
        <span class="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </a>

    </div>

  `;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLegal() {
  const modal = document.getElementById("legalModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Header
async function loadHeader() {
  try {
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const isRoot = document.body.dataset.page === "root";

    let headerPath = "";

    if (isMobile) {
      headerPath = isRoot
        ? "./components/header-mobile.html"
        : "../components/header-mobile.html";
    } else {
      headerPath = isRoot
        ? "./components/header-desktop.html"
        : "../components/header-desktop.html";
    }

    const res = await fetch(headerPath);

    const html = await res.text();

    document.getElementById("header").innerHTML = html;

    fixNavigationPaths();
    fixLogoPath();
    initializeMobileMenu();
  } catch (err) {
    console.error("Erro ao carregar header:", err);
  }
}
document.addEventListener("DOMContentLoaded", loadHeader);

function fixNavigationPaths() {
  const links = document.querySelectorAll("[data-nav]");

  links.forEach((link) => {
    const section = link.dataset.nav;

    link.href = `${HOME_PATH}#${section}`;
  });
}

function fixLogoPath() {
  const logo = document.querySelector("[data-logo]");

  if (!logo) return;

  logo.src = isPagesDir
    ? "../img/logo/logo-estudante.png"
    : "./img/logo/logo-estudante.png";
}

// Footer
async function loadFooter() {
  try {
    const res = await fetch(`${BASE_PATH}/components/footer.html`);
    const html = await res.text();
    document.getElementById("footer").innerHTML = html;
  } catch (err) {
    console.error("Erro ao carregar footer:", err);
  }
}
document.addEventListener("DOMContentLoaded", loadFooter);

// Modal Legal
async function loadModalLegal() {
  try {
    const res = await fetch(`${BASE_PATH}/components/modal-legal.html`);
    const html = await res.text();
    document.getElementById("legalModalContainer").innerHTML = html;
  } catch (err) {
    console.error("Erro ao carregar modal-legal:", err);
  }
}
document.addEventListener("DOMContentLoaded", loadModalLegal);

// Cookie Banner
async function loadCookieBanner() {
  try {
    const res = await fetch(`${BASE_PATH}/components/cookie-banner.html`);
    const html = await res.text();

    document.getElementById("cookieBanner").innerHTML = html;

    initializeCookieBanner();
    fixLegalPaths();
  } catch (err) {
    console.error("Erro ao carregar cookie-banner:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadCookieBanner);

function initializeCookieBanner() {
  const banner = document.getElementById("cookieConsentBanner");

  if (!banner) return;

  const acceptAllBtn = document.getElementById("acceptAllCookies");
  const openPreferencesBtn = document.getElementById("openCookiePreferences");
  const preferencesPanel = document.getElementById("cookiePreferencesPanel");
  const savePreferencesBtn = document.getElementById("saveCookiePreferences");

  const analytics = document.getElementById("cookieAnalytics");
  const functionality = document.getElementById("cookieFunctionality");
  const communication = document.getElementById("cookieCommunication");

  const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    banner.classList.remove("hidden");
  }

  acceptAllBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");

    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        analytics: true,
        functionality: true,
        communication: true,
      }),
    );

    banner.classList.add("hidden");
  });

  openPreferencesBtn?.addEventListener("click", () => {
    preferencesPanel.classList.toggle("hidden");
  });

  savePreferencesBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "custom");

    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        analytics: analytics.checked,
        functionality: functionality.checked,
        communication: communication.checked,
      }),
    );

    banner.classList.add("hidden");
  });
}

function fixLegalPaths() {
  const legalLinks = document.querySelectorAll("[data-legal]");

  legalLinks.forEach((link) => {
    const page = link.dataset.legal;

    link.href = `${BASE_PATH}/pages/${page}.html`;
    link.target = "_blank";
  });
}

function initializeMobileMenu() {
  const button = document.getElementById("mobileMenuButton");

  const menu = document.getElementById("mobileMenu");

  if (!button || !menu) return;

  // Toggle menu
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Auto close after click
  const links = menu.querySelectorAll("[data-nav], [data-mobile-close]");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}
