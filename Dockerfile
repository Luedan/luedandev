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

# Instala solo dependencias de producción
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --prod --frozen-lockfile

# Copia los archivos de la app ya construida
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ARG PORT=3020
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["npm", "start"]
