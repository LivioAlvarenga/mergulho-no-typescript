<h1 align="center"> 
	Um mergulho no TypeScript
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;

![Capa](https://github.com/LivioAlvarenga/mergulho-no-typescript/blob/master/files/capa.png?raw=true#vitrinedev)

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 Com objetivo de aprofundar em desenvolvimento Front-end, um dos passos importantes é aprender TypeScript. Esse superconjunto baseado em JavaScript permite que você tenha uma experiência mais fluida ao lidar com tipos e orientações a objetos, e pode ser combinado com diferentes frameworks para atingir um resultado super-poderoso.

Este repositório lide de como configurar seu ambiente utilizando TypeScript e quais as vantagens de utilizar a tipagem estática, verá como configurar o seu compilador TS e as melhores práticas para utilizar os recursos do TS. Por fim, vamos organizar e adicionar tipo em seu código ao consumir uma API REST, além de outros conceitos mais avançados de uma das linguagens mais amadas pelos desenvolvedores nos últimos anos.

Vamos criar processos básicos de um banco para dar contexto as implementações em TS.

Optei por não usar nenhuma ferramente de inicialização de projeto como Vitejs, pois o proposito aqui é construir na mão uma compilação de Ts para Js. Também não me preocupei em usar Tailwindcss para abstrair o css, utilizei o bootstrap, para focar totalmente no TypeScript.

```bash
# Com concurrently rodamos dois scripts ao mesmo tempo no Nodejs
npm install concurrently --save-dev

# Com o lite-server criamos um servidor para subirmos no aplicação
npm install lite-server --save-dev

# Instalando o TypeScript
npm install typescript --save-dev
```

> [Github concurrently](https://github.com/open-cli-tools/concurrently#readme)

> [Github lite-server](https://github.com/johnpapa/lite-server#readme)

&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/mergulho-no-typescript?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/mergulho-no-typescript/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/mergulho-no-typescript" alt="issue site alurabooks" /></a>
  <a href="https://github.com/LivioAlvarenga/mergulho-no-typescript"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/mergulho-no-typescript" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/mergulho-no-typescript"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/mergulho-no-typescript" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/mergulho-no-typescript"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/mergulho-no-typescript" alt="repository size" /></a>
<p>

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                                            |
| --------------------- | ---------------------------------------------------------- |
| :sparkles: Nome       | **Um mergulho no TypeScript**                              |
| :label: Tecnologias   | typescript, javascript, html5, css3, nodejs, bootstrap     |
| :rocket: URL          | https://mergulho-no-typescript-livio-alvarenga.vercel.app/ |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://html5.org/"><img alt="html 5 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E34F26&logo=HTML5&label=Markup Language&message=HTML5&color=E34F26"></a>
  <a href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img alt="CSS 3 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1572B6&logo=CSS3&label=Style&message=CSS3&color=1572B6"></a>
  <a href= "https://getbootstrap.com/"><img alt="Bootstrap CSS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=7952b3&logo=Bootstrap&label=Style&message=Bootstrap&color=7952b3"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
</p>

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

### tsconfig.json

```bash
{
  "compilerOptions": {
    "outDir": "dist/js", // diretório que irá transformar .ts em .js
    "target": "ES6", // informa a versão do javascript que o compilador irá transformar .ts em .js
    "noEmitOnError": true, // Somente compila ts p js se não tiver erros.
  },
  "include": ["app/**/*"], // onde irei ler os arquivos para fazer a transformação (tudo que estiver dentro de app)
}
```

### Script server

```bash
# Configurando script para lite-server
"server": "lite-server --baseDir=dist",
# --baseDir=dist Apontando a pasta para lite-server
# Inicializando lite-server em http://localhost:3000/
npm run server
```

### Script compile

```bash
# Configurando script para compilar ts em js
"compile": "tsc",
# Inicializando copilação
npm run compile
```

### Script watch

```bash
# Configurando script para compilar ts em js em hot reload
"watch": "tsc -w"
# Inicializando copilação
npm run watch
```

### Script start

```bash
# Configurando script para compilar ts em js em hot reload e lite-server com concurrently
"start": "concurrently \"npm run watch\" \"npm run server\"",
# Inicializando start
npm run start
```

---

&nbsp;

#### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
$ git clone https://github.com/livioalvarenga/mergulho-no-typescript.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd mergulho-no-typescript
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000/
```

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
