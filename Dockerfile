FROM oven/bun:latest
WORKDIR /app

COPY package.json ./
RUN bun install

ARG NOTION_API_KEY
ENV NOTION_API_KEY=${NOTION_API_KEY}

COPY . .
RUN bun run build

EXPOSE 3000
CMD [ "bun", "run", "start" ]