# Contador en React + Vite

Este es un proyecto simple de contador desarrollado con **React** y **Vite**.  
La aplicación permite incrementar y decrementar un valor numérico mediante botones y muestra el conteo en pantalla de forma dinámica.

## 🚀 Tecnologías usadas
- [React 19](https://react.dev/)  
- [Vite 7](https://vite.dev/)  
- [ESLint](https://eslint.org/) para reglas de estilo y buenas prácticas  

## 📂 Estructura básica
- `src/` → Código fuente de la aplicación (componentes y lógica).  
- `index.html` → Punto de entrada principal.  
- `vite.config.js` → Configuración de Vite.  
- `eslint.config.js` → Reglas de ESLint.  

## ⚙️ Instalación y uso
1. Clona este repositorio:
   ```bash
   git clone <https://github.com/jOAGARMOJ/jorgeapp.git>
   cd jorgeapp
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. Para crear una build de producción:
   ```bash
   npm run build
   ```

5. Para previsualizar la build:
   ```bash
   npm run preview
   ```

## 🖥️ Funcionalidad
- Botón **➕ Incrementar** → aumenta el contador.  
- Botón **➖ Decrementar** → disminuye el contador.  
- Visualización en tiempo real del valor actual del conteo.  

## 🧾 Scripts disponibles
En `package.json` encontrarás:
- `npm run dev` → Ejecuta la app en modo desarrollo.
- `npm run build` → Genera la build de producción.
- `npm run preview` → Sirve la build generada.
- `npm run lint` → Ejecuta ESLint.

## 📦 Dependencias principales
- `react` ^19.1.1  
- `react-dom` ^19.1.1  

## 📌 Notas
Este proyecto es un ejemplo sencillo para practicar los **hooks de React** (`useState`) y la integración con **Vite**.
