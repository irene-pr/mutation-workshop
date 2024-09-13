## Requisitos

- Node 20>
- Instalar proyecto:
```
npm i
```

## Comandos
Puedes encontrar scripts básicos en el `package.json`
```bash
npm run <nombre_del_script>
```
O usar los comandos de los frameworks de tests

```bash
# unit tests
npx jest
--watchAll        # modo
--collectCoverage # dar estadisticas de coverage

# mutation tests
npx stryker run
```