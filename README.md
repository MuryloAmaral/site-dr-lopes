# Dr. Lopes Desentupidora — Site institucional

Site estático, responsivo e pronto para publicar no GitHub Pages.

## O que já está funcionando

- Layout responsivo para desktop, tablet e celular
- Menu mobile
- Botões de orçamento
- Ligação com 1 toque
- Integração com WhatsApp
- Integração com Instagram
- Formulário que monta a mensagem do orçamento e abre o WhatsApp
- Seções de serviços, sobre, processo, área de atendimento, Instagram e FAQ
- Animações leves ao rolar a página
- SEO básico + Schema.org de negócio local

## WhatsApp configurado

WhatsApp e número principal: **+55 11 99208-9170**

Telefone alternativo exibido no site: **+55 11 99150-3526**

O formulário e todos os botões de WhatsApp continuam direcionando para o número principal final **9170**. O número final **3526** aparece como telefone alternativo no rodapé. Se precisar trocar, altere a constante `WHATSAPP_NUMBER` no arquivo `script.js` e os links `tel:` / `wa.me` no `index.html`.

## Instagram configurado

https://www.instagram.com/dr.lopesdesentupidora/

## Como abrir no VS Code

1. Extraia o `.zip`.
2. Abra a pasta `dr-lopes-site` no VS Code.
3. Abra `index.html` no navegador ou use a extensão **Live Server**.

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No GitHub, abra **Settings > Pages**.
4. Em **Build and deployment**, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve. O GitHub vai gerar o endereço público do site.

## Arquivos principais

- `index.html` — estrutura e conteúdo
- `styles.css` — todo o visual e responsividade
- `script.js` — menu, animações e integração do orçamento com WhatsApp
- `assets/` — imagens do site

## Observação importante

As imagens atuais usam materiais visuais fornecidos/mostrados na conversa e mockups criados para o projeto. Antes de publicar para o cliente, vale substituir qualquer imagem temporária por fotos oficiais da própria empresa em alta resolução, caso ele tenha.

## Área de atendimento

O conteúdo foi atualizado para informar atendimento na **Capital, Grande São Paulo, Interior e Litoral de SP**, sempre com confirmação de disponibilidade para a cidade/endereço.


Atualização: esta versão corrige os ícones/mini-imagens das seções de serviços e do passo a passo, além de melhorar o comportamento responsivo no celular.

Revisão mobile: o título não é mais cortado em telas estreitas, o nome da marca permanece no cabeçalho, os cards e o formulário reorganizam o conteúdo sem apertar as letras, e o botão flutuante se oculta quando pode cobrir o formulário ou o rodapé. A imagem principal foi substituída por uma arte nova alinhada ao mascote e às cores da marca.
