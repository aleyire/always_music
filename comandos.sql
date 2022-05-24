-- Crear base de datos 'estudiante'
CREATE DATABASE estudiante_db;

-- Crear tabla 'estudiantes'
CREATE TABLE estudiantes (
  nombre VARCHAR(50) NOT NULL,
  rut VARCHAR(13) NOT NULL PRIMARY KEY,
  curso VARCHAR(50) NOT NULL,
  nivel INT NOT NULL
);

-- registrar un nuevo estudiante
 node index.js ingresar '789' kuzy pintar 4 

-- mostrar un estudiante por el rut
 node index.js consultar '789'

-- mostrar todos los estudiantes
node index.js 'consultar tabla'

-- actualizar los datos de un estudiante
node index.js editar '789' 3

-- eliminar un estudiante por el rut
node index.js eliminar '789'
