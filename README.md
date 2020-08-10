# server-driven-ui

Lib para renderizar uma página Web a partir de um JSON buscado em um servidor.

## Detalhes da solução

A solução foi desenvolvida em javascript. Os componentes foram criados com web components e
são renderizados com as APIs web para criação e edição de elementos HTML(document.createElement(), appendChild(), etc).

## Instalação

Para instalar a lib utilize o comando: `npm i server-driven-ui`.

## Uso

Importe no projeto: `import 'node_modules/server-driven-ui/src'`

Adicione no HTML a tag `magic-zone` de renderização com o atributo src com o endpoint da api que retorna o JSON de configuração:
`<magic-zone src="http://[endpoint-configuracao]"></magic-zone>`

[Exemplo](https://github.com/ArthurFR/angular-server-driven-ui) de uso em uma aplicação angular .
