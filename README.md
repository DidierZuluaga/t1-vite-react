# T1 – Vite + React + TypeScript (Plantilla) ![CI](https://github.com/DidierZuluaga/t1-vite-react/actions/workflows/ci.yml/badge.svg)

Plantilla minimal y profesional con:

- Vite + React + TS
- Vitest + Testing Library
- Prettier + EditorConfig
- Husky + lint-staged (pre-commit)
- CI (GitHub Actions): install + test + build

## Requisitos

- Node 22.x
- pnpm 10.x

## Uso

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm test
pnpm build
```

## Scripts disponibles

- `pnpm dev`: arranca el servidor de desarrollo
- `pnpm build`: genera build de producción
- `pnpm preview`: sirve la build localmente
- `pnpm test`: corre todas las pruebas
- `pnpm lint`: chequea errores de estilo
- `pnpm lint:fix`: corrige errores de estilo automáticamente

## Licencia

Este proyecto está bajo la licencia MIT.
Consulta el archivo [LICENSE](./LICENSE) para más información.
