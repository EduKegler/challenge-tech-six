# Instalação

Após clonar o repositório, renomeie o arquivo .env.example para .env e
coloque o _TOKEN_ACCESS_ da sua conta do Github.

É _NECESSARIO_ que o token possua os seguintes privilégios para o sistema funcionar corretamente: 

```
[admin:org] -> read:org
[user] -> read:user
```

Siga os seguintes comandos:

```
npm install
npm start
```