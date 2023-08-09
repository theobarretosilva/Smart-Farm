# Rodando o projeto em um container docker

- Pra rodar o projeto em modo dev num container, primeiro construa uma imagem usando o dockerfile do projeto:

```bash
docker build -t [nome-da-imagem] .
```

- Depois rode a imagem

```bash
docker run -d --rm -p 5173:5173 --name [nome-do-container] [nome-da-imagem]
```

- Lembrando que, pra que ele funcione, é necessário estar rodando o back na porta 3000 do localhost
