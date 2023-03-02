FROM node:18-alpine 
RUN apk --no-cache add --virtual .builds-deps build-base python3

WORKDIR /app
COPY /comps ./comps
COPY /pages ./pages
COPY /styles ./styles
COPY /next.config.js ./next.config.js
COPY /package.json ./package.json

RUN npm install --legacy-peer-deps
RUN npm run build

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]