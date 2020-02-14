# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API principal;
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposa;

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- REST (latência)
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix utilizam **Kafka**;

## O que podemos estudar
- Consumer demorando para subir;
- Frameworks específicos para microservices (Molecular / Nest);
- _expectResponse_
