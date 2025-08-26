# Dockerfile para Next.js app en producción
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Producción: solo archivos necesarios
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia solo lo necesario
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

ARG PORT=3020
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["npm", "start"]
