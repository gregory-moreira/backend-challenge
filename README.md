<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Parecer atual do desenvolvimento
```bash
# Conferir a conversa que eu tive com o ChatGPT. Recomendo ler cada prompt que solicitei para entender o contexto atual do desenvolvimento

$ [Conversa](https://chatgpt.com/share/6aeb8649-bf08-83e8-85d0-c82c333998bc)
```

## Project setup

```bash
# Instale o WSL (Virtualização da Distribuição Linux no Windows)
$ wsl --install

# Caso você já tenha o WSL instalado, apenas atualize
$ wsl --update

# Ativar a virtualização na sua BIOS. 
$ 1. Assim que estiver reiniciando ou ligando pressionar a tecla DEL ou F12.
$ 2. Procurar por 'SVM Mode' ou algo parecido dentro de 'Advanced CPU Settings' ou algo parecido e deixar como 'enabled'
$ 3. Pressione F10, confirme e deixe o Computador inicializar normalmente
$ 4. Como confirmar no Windows:
$   4.1. Pressione Ctrl + Shift + Esc.
$   4.2. Abra Desempenho → CPU.
$   4.3. Procure por Virtualização.

# Baixar versão mais recente do Docker
$ Baixar o [Docker](https://docs.docker.com/desktop/setup/install/windows-install/)
```

```bash
# Abrir o powershell em Modo Desenvolvedor
$ powershell -c "irm bun.sh/install.ps1|iex" 
# Verificar se foi instalado corretamente
$ bun --version

# Configurar pacote NestJS
$ bun add -g @nestjs/cli
$ nest new distributed-wallet --package-manager bun

$ bun add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql @mikro-orm/decorators @mikro-orm/migrations dotenv
$ bun add -d @mikro-orm/cli
$ bun add -d @mikro-orm/cli@7.2.7 @oxc-node/core

$ bun run db:migration:create
$ bun run db:migration:up

$ bun run build

# Navegação
$ Entre na pasta correta. Por exemplo: "C:\Users\SeuUsuario\distributed-wallet"

# No Powershell em Modo Desenvolvedor
$ winget install OpenJS.NodeJS.LTS
# Verifique
$ node -v
$ npm -v

# Configurar localstack
$ npm install -g @localstack/lstk
#Inicialize
$ lstk start
```

## Useful Commands for Docker

```bash
# Traz todos os Containers e seus estados
$ docker compose ps

# Faz os containers saírem do ar
$ docker compose down

# Faz os containers subirem
$ docker compose up -d
```

## Useful Commands for Git
```bash
# Navegação
$ Entre na pasta correta. Por exemplo: "C:\Users\SeuUsuario\distributed-wallet"

# Configuração geral
$ git config --global user.name "Seu Nome"
$ git config --global user.email "seuEmail@dominioDoEmail.com"

# Inicializa um repositório local
$ git init

# Adiciona todas as changes locais para push no git
$ git add .

# Verifica o status atual do commit
$ git status

# Configura o seu repositório
$ 1. Crie um usuário no Git se não tiver
$ 2. Crie um novo repositório
$ 3. No botão "<> Code", selecionar HTTPS e copiar a URL
$ 4. usar git remote add origin colarURLaqui

$ git remote add origin https://github.com/seuUsuario/nomeDoRepositorio.git

# Muda o nome da branch principal para main
$ git branch -M main

# Realiza o Commit
$ git commit -m 'Test: First Commit'

# Verifica se tem algo no repositório
$ git pull origin main --allow-unrelated-histories

# Envia os metadados para o repositório
$ git push -u origin main  
```

## Compile and run the project

```bash
# build
$ bun run build

# development
$ bun run start

# watch mode
$ bun run start:dev

# production mode
$ bun run start:prod
```

## Run tests

```bash
# unit tests. Exemplo: bun test domain/shared/money.spec.ts  
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ bun install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

To add it to this project, run this and approve the code it prints at [observe.nestjs.com/link](https://observe.nestjs.com/link) - signing up for free if you have no account:

```bash
$ npx @nestjs/observe link
```

It installs `@nestjs/observe`, wires it into `AppModule` and `main.ts`, and writes the app key and secret into `.env`, which every `nest start` script (`start`, `start:dev`, `start:debug`) then loads. In production, set `OBSERVE_APP_KEY` and `OBSERVE_APP_SECRET` in the environment instead.

Or do it by hand:

```bash
$ bun install @nestjs/observe
```

Then follow the [setup guide](https://docs.nestjs.com/observability/sdk) - it takes a single import and an app key.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
