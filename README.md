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

🧩 Descrição dos Componentes
Este projeto utiliza uma série de bibliotecas e componentes que proporcionam uma experiência de desenvolvimento mais fluida e eficiente:

Componentes e Bibliotecas Principais
React Hook Form: Usado para gerenciar formulários de forma eficiente e com validação de dados.

Zod: Biblioteca de validação e tipagem de objetos, integrada com React Hook Form para validações avançadas.

Framer Motion: Biblioteca para animações e transições no React.

Radix UI: Fornece componentes acessíveis e sem estilos, como Dialog, Label, e Select, para construir interfaces customizadas e interativas.

Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.

clsx: Utilizado para condicionalmente adicionar classes CSS aos elementos de forma simples e legível.

zustand: Gerenciamento de estado leve e intuitivo para o React.

⚙️ Principais Escolhas Técnicas
Next.js: Framework React que permite a renderização do lado do servidor (SSR) e a criação de páginas estáticas. A escolha pelo Next.js facilita o SEO e melhora a performance.

Tailwind CSS: Optamos por usar o Tailwind CSS devido à sua capacidade de criar interfaces responsivas e estilizadas rapidamente, com o uso de classes utilitárias, sem a necessidade de escrever CSS customizado.

Zod: Utilizado para validação de dados de forma fortemente tipada. Zod se integra bem com o React Hook Form, proporcionando validações de formulários fáceis e seguras.

React Hook Form: Facilitando a manipulação de formulários, com foco na performance e integração perfeita com bibliotecas de validação como Zod.

Framer Motion e Radix UI: Estas bibliotecas são usadas para criar animações e interações ricas, com foco na acessibilidade e usabilidade.

TypeScript: Usado para garantir que o código seja mais seguro e previsível, com verificação estática de tipos.

🛠️ Tecnologias Utilizadas

Dependências:

next (versão 13.5.11)

react (versão 18)

react-dom (versão 18)

tailwindcss

framer-motion

zustand

zod

@radix-ui/react-dialog

@radix-ui/react-select

clsx

lucide-react

react-hook-form

tailwind-merge

DevDependencies:

eslint

typescript

@types/node, @types/react, @types/react-dom

postcss, autoprefixer
