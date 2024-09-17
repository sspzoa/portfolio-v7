FROM oven/bun:latest
WORKDIR /app

COPY package.json ./
RUN bun install

COPY . .
RUN bun run build

ARG NOTION_API_KEY
ENV NOTION_API_KEY=${NOTION_API_KEY}

EXPOSE 3000
CMD [ "bun", "run", "start" ]