# estudanteim.github.io (github pages)
# ESTUDANTE.IM — Plataforma de Avaliação Educacional com IA + Validação Humana

## 📌 Visão Geral

O **ESTUDANTE.IM** é uma plataforma SaaS B2B voltada para escolas e cursinhos, que transforma a correção de redações em um processo escalável, padronizado e orientado por dados.

Nosso modelo central:

> **IA corrige → Tutor humano valida → Aluno recebe devolutiva pedagógica**

---

## 🎯 Objetivo da Fase Atual

Validar narrativa, gerar confiança institucional e viabilizar as primeiras conversões B2B.

**Status atual:**

* Presença digital criada (LinkedIn + Instagram + domínio)
* Landing Page funcional publicada
* Estrutura legal implementada
* Arquitetura frontend organizada

---

## 🧱 Arquitetura do Projeto

```
./assets
./components
  ├── header.html
  ├── footer.html
  ├── modal-legal.html
./css
  └── base.css
./js
  ├── main.js
  └── tailwind-config.js
./files
  └── AVISO_DE_PRIVACIDADE_ESTUDANTE.IM.pdf
./img
./pages
  ├── privacy.html
  ├── lgpd.html
  ├── terms.html
index.html
README.md
```

---

## ⚙️ Stack Tecnológico

* HTML + TailwindCSS (CDN)
* JavaScript Vanilla
* Componentização via JS (header/footer/modal)
* Deploy estático (GitHub Pages)

---

## 🧩 Componentização

### Header

* Fixo (fixed)
* Fundo branco sólido (evita problemas de renderização)
* Navegação com âncoras para index

### Footer

* Estruturado com links institucionais e legais

### Modal Legal

* Exibe versão resumida:

  * Privacidade
  * LGPD
  * Termos
* Redireciona para páginas completas

---

## 📄 Estrutura Legal (LGPD Ready)

### 1. privacy.html

**Função:** resumo executivo (confiança e transparência)

* Linguagem acessível
* Explica:

  * papel da plataforma
  * tratamento de dados
  * modelo IA + humano
* CTA para PDF institucional

---

### 2. lgpd.html

**Função:** documento técnico/jurídico

* Estrutura formal:

  * definições
  * bases legais
  * retenção
  * segurança
  * direitos do titular
* Sem narrativa comercial

---

### 3. terms.html

**Função:** regras de uso da plataforma

* Modelo B2B institucional
* Responsabilidades claras
* Escopo educacional

---

### 4. PDF Oficial

Arquivo:

```
./files/AVISO_DE_PRIVACIDADE_ESTUDANTE.IM.pdf
```

Uso:

* Material para jurídico/compliance
* Download e visualização padronizada:

```
#page=1&zoom=page-width
```

---

## 🎨 Decisões de UX Críticas

### 1. Header sólido (decisão chave)

* Removido blur/transparência
* Motivo: evitar “granulação” e melhorar percepção de qualidade

---

### 2. Fundo da página (index)

```
bg-white → aplicado
bg-surface → removido
```

Impacto:

* Melhor contraste
* Melhor legibilidade
* Percepção mais premium

---

### 3. Separação de responsabilidades legais

| Página  | Papel       |
| ------- | ----------- |
| Privacy | Comunicação |
| LGPD    | Jurídico    |
| Terms   | Contratual  |

---

## 🚀 Evolução Realizada

### Antes (BKP)

* Estrutura monolítica
* Sem separação legal
* Sem padrão visual consistente
* Sem componentização

### Depois (Atual)

* Arquitetura modular
* Páginas legais separadas
* Header e Footer reutilizáveis
* Padrão visual consistente
* Preparado para escala

---

## 🧠 Princípios de Produto Aplicados

* Clareza > estética exagerada
* Confiança > efeitos visuais
* B2B exige previsibilidade
* LGPD não é opcional — é diferencial

---

## 📊 Status do Produto

```
MVP de presença institucional: ✅
Base legal estruturada:        ✅
Frontend organizado:           ✅
Pronto para abordagem B2B:     ✅
```

---

## 🎯 Próximos Passos (Stage 2)

### Produto

* Evoluir dashboard (visão institucional)
* Simulação de correção real
* Demonstração guiada

### Comercial

* Script de abordagem para escolas
* Proposta institucional
* Onboarding piloto

### Técnico

* Evoluir componentização
* Modularizar assets
* Preparar backend (futuro)

---

## ⚠️ Observação Estratégica

A landing page **não é mais o gargalo**.

O foco agora é:

> **validação com instituições reais**

---

## 🏁 Conclusão

O ESTUDANTE.IM deixou de ser uma ideia e passou a ser um **produto apresentável e confiável**.

A base construída permite:

* Vender
* Validar
* Evoluir

Sem retrabalho estrutural.

---

**Pronto para o próximo nível.**
