FROM rafakato/alpine-node-media:latest

RUN apk add --virtual .build-dependencies --no-cache --update alpine-sdk git python

WORKDIR /code

EXPOSE 3000

CMD ["node", "index.js"]