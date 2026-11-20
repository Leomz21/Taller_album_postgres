# Album API

API REST para gestionar un álbum de fotos, construida con **NestJS**, **TypeORM** y **PostgreSQL**.

Proyecto de la Sesión 3 — PostgreSQL y TypeORM.

## Tecnologías

- NestJS (framework de Node.js)
- TypeORM (ORM)
- PostgreSQL (base de datos)
- @nestjs/config (variables de entorno)

## Requisitos

- Node.js
- PostgreSQL con una base de datos llamada `album`

## Configuración

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear un archivo `.env` en la raíz del proyecto con los datos de conexión:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=album
   ```

3. (Opcional) Cargar 10 fotos de prueba:

   ```bash
   npm run seed
   ```

4. Levantar el servidor en modo desarrollo:

   ```bash
   npm run start:dev
   ```

El servidor queda disponible en `http://localhost:3000`.

## Entidad `Foto`

Cada foto tiene los campos: `id`, `titulo`, `descripcion`, `calificacion`, `ruta`, `fotografo`, `creadoEn` y `actualizadoEn`.

## Endpoints

Todas las rutas usan el prefijo `/api`.

| Método | Ruta           | Descripción             |
|--------|----------------|-------------------------|
| GET    | /api/fotos     | Lista todas las fotos   |
| GET    | /api/fotos/:id | Obtiene una foto por id |
| POST   | /api/fotos     | Crea una foto           |
| PATCH  | /api/fotos/:id | Actualiza una foto      |
| DELETE | /api/fotos/:id | Elimina una foto        |

### Ejemplo de body (POST / PATCH)

```json
{
  "titulo": "Atardecer",
  "descripcion": "Foto del malecón",
  "calificacion": 4.5,
  "ruta": "https://picsum.photos/id/10/600/400",
  "fotografo": "Leonor Molina"
}
```

## Nota sobre `synchronize`

El proyecto usa `synchronize: true` en TypeORM para crear y actualizar las tablas automáticamente. Es cómodo para aprender, pero **no debe usarse en producción**, porque un cambio en la estructura (por ejemplo, renombrar una columna) puede borrar datos. En producción se usan **migraciones**.