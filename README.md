# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposa (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- REST (latência)
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix utilizam **Kafka**;

## O que podemos estudar
- COnsumer demorando para subir;
- Frameworks específicos para microservices (Molecular / Nest);
- _expectResponse_