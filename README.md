# Cronômetro e Estatísticas

Este repositório contém um projeto web desenvolvido com Next.js, React, e outras tecnologias modernas para oferecer funcionalidades de cronômetro e exibição de estatísticas. Abaixo, você encontrará informações sobre como executar o projeto, descrição dos componentes e explicação das principais escolhas técnicas.

---

## 📌 Instruções para Execução do Projeto

### Pré-requisitos

- Node.js versão 18 ou superior.
- npm (gerenciador de pacotes do Node) ou yarn.

### Passos para execução local

1. **Clone este repositório**

   ```bash
   git clone https://github.com/seu-usuario/cronometro-e-estatisticas.git

Instale as dependências

Navegue até a pasta do projeto e execute:

npm install
ou, se preferir usar o yarn:
yarn install
Inicie o servidor de desenvolvimento

Após a instalação das dependências, inicie o servidor de desenvolvimento:

npm run dev
ou com yarn:

yarn dev
Acesse o projeto no navegador

O servidor estará rodando em http://localhost:3000.

## 🧩 Descrição das Bibliotecas

Este projeto utiliza uma série de bibliotecas e componentes que proporcionam uma experiência de desenvolvimento mais fluida e eficiente. Abaixo estão os componentes e bibliotecas principais utilizadas:

### Bibliotecas Principais:

- **React Hook Form**  
  Usado para gerenciar formulários de forma eficiente e com validação de dados.

- **Zod**  
  Biblioteca de validação e tipagem de objetos, integrada com React Hook Form para validações avançadas.

- **Framer Motion**  
  Biblioteca para animações e transições no React, permitindo criar experiências interativas.

- **Radix UI**  
  Fornece componentes acessíveis e sem estilos, como `Dialog`, `Label`, e `Select`, para construir interfaces customizadas e interativas.

- **Tailwind CSS**  
  Framework de CSS utilitário para estilização rápida e responsiva, permitindo a criação de interfaces sem escrever CSS customizado.

- **clsx**  
  Utilizado para condicionalmente adicionar classes CSS aos elementos de forma simples e legível, facilitando a manipulação de classes dinamicamente.

- **zustand**  
  Gerenciamento de estado leve e intuitivo para o React, ideal para aplicações pequenas e médias, oferecendo uma API simples e performática.

---

## ⚙️ Escolhas Técnicas

A seguir, explicamos as principais escolhas técnicas adotadas no projeto:

- **Next.js**  
  Framework React que permite a renderização do lado do servidor (SSR) e a criação de páginas estáticas (SSG). A escolha pelo Next.js facilita o SEO e melhora a performance das páginas, além de oferecer uma ótima experiência de desenvolvimento.

- **Tailwind CSS**  
  Optamos por usar o Tailwind CSS devido à sua capacidade de criar interfaces responsivas e estilizadas rapidamente. Ele permite o uso de classes utilitárias, o que elimina a necessidade de escrever CSS customizado, tornando a base de código mais limpa e fácil de manter.

- **Zod**  
  Utilizado para validação de dados de forma fortemente tipada. Zod se integra bem com o React Hook Form, proporcionando validações de formulários fáceis, seguras e eficientes. A tipagem forte ajuda a prevenir erros e facilita o desenvolvimento.

- **React Hook Form**  
  Facilitando a manipulação de formulários, o React Hook Form foca na performance e em minimizar a quantidade de renderizações. Ele se integra perfeitamente com bibliotecas de validação como Zod, oferecendo uma abordagem simples e eficaz para validações e controle de formulários.

- **Framer Motion e Radix UI**  
  Essas bibliotecas foram escolhidas para criar animações e interações ricas, com foco na acessibilidade e usabilidade. O **Framer Motion** permite criar transições suaves e controladas, enquanto o **Radix UI** oferece componentes acessíveis e personalizáveis.

- **TypeScript**  
  Usado para garantir que o código seja mais seguro e previsível. A verificação estática de tipos do TypeScript ajuda a detectar erros antes da execução, oferecendo maior confiança no desenvolvimento e melhor manutenção a longo prazo.
