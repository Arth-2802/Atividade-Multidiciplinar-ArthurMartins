# Projeto de Cadastro - Node.js + MongoDB

Sistema de cadastro com frontend em HTML/CSS/JS e backend Node.js com MongoDB Atlas.

## 🚀 Tecnologias

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv

## 📦 Instalação Local

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGODB_URI=sua_connection_string_aqui
PORT=3000
NODE_ENV=development
```

## 🌐 Deploy na Vercel

### Passo 1: Preparar o Projeto
- ✅ Verificar se `vercel.json` está configurado
- ✅ Verificar se `server.js` exporta o app com `module.exports`
- ✅ Verificar se `.gitignore` inclui `.env` e `.vercel`

### Passo 2: Fazer Deploy

**Opção A - Via Site da Vercel:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório
4. Configure as variáveis de ambiente
5. Deploy automático!

**Opção B - Via CLI:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

### Passo 3: Configurar Variáveis de Ambiente na Vercel
No painel da Vercel:
1. Vá em **Settings** → **Environment Variables**
2. Adicione:
   - `MONGODB_URI`: sua connection string do MongoDB Atlas
   - `NODE_ENV`: production

### Passo 4: Configurar MongoDB Atlas
1. Acesse [MongoDB Atlas](https://cloud.mongodb.com)
2. Vá em **Network Access**
3. Adicione o IP: `0.0.0.0/0` (permite todas as conexões da Vercel)
   - ⚠️ Ou adicione IPs específicos da Vercel para maior segurança

## 📝 Endpoints da API

- `GET /` - Página principal (index.html)
- `GET /api` - Status da API
- `GET /api/health` - Health check
- `POST /api/cadastro` - Criar novo usuário

## ✅ Checklist de Deploy

- [ ] `vercel.json` criado
- [ ] `server.js` atualizado com `module.exports`
- [ ] `.env` no `.gitignore`
- [ ] `package.json` com scripts corretos
- [ ] Testar localmente antes do deploy
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] MongoDB Atlas configurado para aceitar conexões da Vercel
- [ ] Fazer push para GitHub
- [ ] Deploy na Vercel

## 🔒 Segurança

- Nunca commite o arquivo `.env`
- Use variáveis de ambiente para dados sensíveis
- Configure Network Access no MongoDB Atlas
- Use HTTPS em produção (Vercel faz isso automaticamente)

## 📚 Recursos

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação MongoDB Atlas](https://docs.atlas.mongodb.com)
- [Express.js](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
