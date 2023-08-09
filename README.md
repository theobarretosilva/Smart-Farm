# 🌾 Smart Farm 🌾

Este é um dashboard para acompanhar dados de sensores 🌡️ em uma fazenda 🚜. Ele permite a adição e edição de sensores, locais 📍 e do perfil do usuário 👤, além de possibilitar o cadastro 🔐 e o reset de senha 🔓. O sistema também traz as médias de temperatura e umidade do solo 💧, gráficos 📊 com esses dados e um mapa 🗺️ do local.
Tecnologias 💻

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- TypeScript 🔷
- React ⚛️
- Vite ⚡
- React Query 📈
- Leaflet 🍃
- React Router DOM 🚦
- Radix 📚
- Styled Components 💅
- Material UI 🎨

## 🏁 Executando o projeto 🏁

```
✌️ Duas formas foram configuradas para uso no Projeto, escolha a que for mais conveniente para você 🤔:
```

## i. Utilizando Docker 🐳

- Pra rodar o projeto em modo dev ⚙️ num container, primeiro construa uma imagem usando o Dockerfile do projeto:

```bash
docker build -t [nome-da-imagem] .
```

- Depois rode a imagem 🚀

```bash
docker run -d --rm -p 5173:5173 --name [nome-do-container] [nome-da-imagem]
```

- Lembrando que, pra que ele funcione 🌐, é necessário estar rodando o back 🔙 na porta 3000 do localhost.

### ii. Rodando localmente 🖥️

1. Faça o clone deste repositório 🔄:

```
git clone https://github.com/DEVin-Intelbras/M3P2-FrontEnd-Squad2.git
```

2. Instale as dependências 📦:

```
cd smart-farm
npm install
```

3. Baixe e execute o backend do projeto 🌐, disponível em https://github.com/DEVin-Intelbras/M3P2-BackEnd-Squad2

Execute o projeto 🚀:

```
npm start
```

O servidor será iniciado em http://localhost:5173 🌐.

## Gráficos com dados mocados

Caso queira renderizar os gráficos sem esperar os sensores produzirem dados, basta utilizar o seguinte snippet no componenente `LineCharts.tsx`:

```ts
function getRandomNumberInRange(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

const mockData = [
  '2023-03-24',
  '2023-03-25',
  '2023-03-26',
  '2023-03-27',
  '2023-03-28',
  '2023-03-29',
  '2023-03-30',
].map((dateString) => {
  const date = new Date(dateString)

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    month: 'numeric',
    day: 'numeric',
  }).format(date)

  return { date: formattedDate, medida: getRandomNumberInRange(0, 100) }
})
```

E depois passar `mockData` pro componente `LineChartComponent`:

```ts
<LineChartComponent
        width={500}
        height={300}
        data={mockData} //assim
        margin={{
          top: 10,
          right: 10,
          left: -30,
          bottom: -10,
        }}
      >
```

## 💡 Contribuições 💡

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ❗ ou enviar um pull request 🔄.

## Apresentação

[Acesse nossa apresentação aqui](https://www.canva.com/design/DAFhNBvpYAU/rVRJDP_RtE25C9a3_jnPlQ/view)
