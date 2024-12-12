# Proyecto IoT Multiplataforma - Gestión de Dispositivos y Mediciones

## Descripción del Proyecto

Este proyecto es una solución completa para la gestión de dispositivos IoT, incluyendo monitoreo y control de válvulas, registro de mediciones y una interfaz de usuario moderna y personalizable. Utiliza un backend en Node.js con Express y MySQL, junto con un frontend desarrollado en Ionic Framework para ofrecer una experiencia interactiva.

---

## Funcionalidades Principales

1. **Gestión de Dispositivos:**
   - Visualización de una lista de dispositivos con detalles como nombre, ubicación y última medición registrada.
   - Acceso a la vista de detalles de cada dispositivo.

2. **Control de Válvulas:**
   - Apertura y cierre de válvulas con botones dedicados en la vista de detalle del dispositivo.
   - Indicador visual del estado de la válvula (abierta/cerrada).

3. **Registro y Consulta de Mediciones:**
   - Visualización de todas las mediciones registradas para cada dispositivo.
   - Generación automática de nuevas mediciones simuladas cada 60 segundos en el backend.

4. **Estética Mejorada:**
   - Personalización con colores específicos según la ubicación de cada dispositivo.
   - Interfaz responsiva y moderna utilizando componentes de Ionic Framework.

5. **Manejo de Errores:**
   - Mensajes amigables para el usuario en caso de errores en las operaciones.
   - Indicadores de carga mientras se obtienen datos del backend.

---

## Requisitos Previos

### Herramientas Necesarias
- Docker y Docker Compose instalados.
- Node.js  para desarrollo y pruebas locales.
- Editor de código (recomendado: Codespace).

---

## Pasos para Levantar el Proyecto

### 1. Preparar el Entorno
   - Clonar el repositorio:
     ```bash
     git clone <url-repositorio>
     cd app-dam
     ```
   - Asegurarse de estar en la carpeta `app-dam`.

### 2. Levantar el Proyecto con Docker
   - Ejecutar el comando para construir y levantar los contenedores:
     ```bash
     docker-compose up 
     ```
   - Esto iniciará:
     - **Backend** en el puerto `8000`.
     - **Frontend (Ionic)** en el puerto `8100`.
     - **MySQL** en el puerto `3306`.
     - **phpMyAdmin** en el puerto `8001`.

### 3. Actualizar la Configuración del Frontend
   - En el archivo `src/frontend/dam/src/app/services/dispositivo.service.ts`:
     - Reemplazar la ruta del backend por la del servidor donde esté alojado. Por ejemplo:
       ```typescript
       const BACKEND_URL = 'http://<IP-del-servidor>:8000';
       ```
   - Guardar los cambios y reiniciar el frontend si es necesario.

### 4. Acceder a las Interfaces
   - Frontend (Ionic): [http://localhost:8100](http://localhost:8100)
   - Backend (API): [http://localhost:8000](http://localhost:8000)
   - phpMyAdmin: [http://localhost:8001](http://localhost:8001)

---

## Estructura del Proyecto

### 1. Backend
- Carpeta: `src/backend`
- Principales archivos y directorios:
  - `index.js`: Configuración principal del servidor.
  - `routes/dispositivo/`: Endpoints relacionados con dispositivos y mediciones.
  - `mysql-connector.js`: Conexión a la base de datos MySQL.

### 2. Frontend
- Carpeta: `src/frontend/dam`
- Principales archivos y directorios:
  - `src/app/home/`: Vista principal que muestra la lista de dispositivos.
  - `src/app/dispositivo/`: Vista de detalles de un dispositivo.
  - `src/app/mediciones/`: Vista de mediciones históricas de un dispositivo.
  - `src/app/services/dispositivo.service.ts`: Servicio para consumir la API del backend.

### 3. Base de Datos
- Carpeta: `src/backend/db/dumps/`
- Archivo: `smart_home.sql`
  - Contiene la estructura y datos iniciales para la base de datos.

---

## Notas Importantes

1. **Simulación de Mediciones Automáticas:**
   - El backend genera nuevas mediciones cada 5 minutos.
   - Estas se almacenan en la tabla `Mediciones` y están disponibles en el frontend.

2. **Control de Válvulas:**
   - Las acciones de apertura y cierre se registran en la tabla `Log_Riegos`.

3. **Cambio de Servidor Backend:**
   - Si se despliega en un servidor distinto, actualizar la URL del backend en el frontend como se describe en la sección de configuración.

4. **phpMyAdmin:**
   - Usuario: `root`
   - Contraseña: `userpass`

---

## Documentación de Cambios y Funcionalidades Implementadas

1. **Se agregó el control de válvulas:**
   - Botones para abrir y cerrar válvulas en la vista de detalles del dispositivo.

2. **Mejoras estéticas:**
   - Iconos personalizados según la ubicación.
   - Interfaz responsiva con componentes de Ionic.

3. **Manejo de errores:**
   - Indicadores de carga y mensajes de error amigables.

4. **Vista de mediciones:**
   - Nueva pantalla para visualizar mediciones históricas.

5. **Última medición:**
   - Indicador de última medición en la vista principal (Home).

6. **Despliegue Dockerizado:**
   - Configuración para iniciar todos los servicios con Docker Compose.

---

