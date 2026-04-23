# 🚀 Clean Architecture: o que separa Júnior de Sênior

Aprendizado prático de arquitetura de software para backend, com foco em organização de código, separação de responsabilidades e evolução de projeto por etapas.

---

## 📚 Sobre este repositório

Este repositório centraliza os exemplos e implementações do curso conforme o avanço das aulas.

A proposta é mostrar, na prática, como sair de uma estrutura mais simples para um código mais organizado, limpo e preparado para crescer.

## 🧱 O que tem no repositório hoje

### `1-solid`

Módulo com exemplos de evolução de design aplicando princípios SOLID e redução de acoplamento.

- `src/initial-index.ts`: versão inicial, mais acoplada;
- `src/oli-index.ts`: etapa intermediária de refatoração;
- `src/index.ts`: versão mais evoluída com separação de responsabilidades e uso de abstrações.

### `3-cleanarch`

Módulo com API backend em evolução arquitetural, incluindo camadas iniciais de entrada HTTP, controller e persistência.

- `src/index.ts`: inicialização da aplicação e rotas;
- `src/controllers/userController.ts`: regras de entrada/saída para operações de usuário;
- `src/database/migrations`: versionamento estrutural de dados.

---

## 🌿 Branches do curso

O repositório será organizado em 4 branches para acompanhar a progressão das aulas:

- `main` → código inicial da aula;
- `solid` → código explicando SOLID;
- `ddd` → código explicando DDD;
- `cleanarch` → código explicando Clean Architecture.

### 🔄 Como trocar de branch

```bash
git fetch --all
git checkout <nome-da-branch>
```

Exemplo:

```bash
git checkout solid
```

---

## ⚙️ Como executar localmente

Cada módulo possui seu próprio `package.json`. Execute os comandos dentro da pasta desejada.

### Executar o módulo `1-solid`

```bash
cd "1-solid"
npm install
npm run dev
```

### Executar o módulo `3-cleanarch`

```bash
cd "3-cleanarch"
npm install
npm run knex:migrate
npm run dev
```

---

## 🎯 Objetivos de aprendizado

Ao longo do curso, você vai praticar:

- organização de projeto por responsabilidade;
- redução de acoplamento entre regras de negócio e detalhes de infraestrutura;
- evolução de código orientada a clareza e manutenção;
- estruturação de backend com foco em crescimento sustentável.

## 📈 Evolução do conteúdo

O repositório será atualizado com novos módulos e etapas conforme o avanço das aulas.

Se você está começando agora, siga a ordem dos diretórios para acompanhar a progressão didática do curso.
