# Micro-Blog Institucional - TAREA 3 | Programación Avanzada 202550

Este proyecto corresponde a la **Tarea 3** de la asignatura **Programación Avanzada 202550**, donde se implementa un ciclo DevOps completo para una aplicación web simple de Micro-Blogging institucional. La app permite a los usuarios publicar mensajes cortos (hasta 280 caracteres) y ver los mensajes publicados en orden cronológico inverso.

---

## 🎯 Objetivo del proyecto

Diseñar, construir, desplegar y monitorear una aplicación web simple que permita publicar y listar mensajes cortos, aplicando las prácticas del ciclo DevOps: integración continua (CI), despliegue continuo (CD) y monitoreo básico.

---

## 🧰 Tecnologías utilizadas

- **Frontend:** Angular (TypeScript, HTML, CSS)  
- **Backend:** Node.js con Express  
- **Base de datos:** MongoDB  
- **Autenticación:** OAuth 2.0 con Google  
- **Despliegue Backend:** Railway  
- **Despliegue Frontend:** Netlify  
- **Automatización CI/CD:** GitHub Actions  

---

## 🔥 Funcionalidades implementadas

- Publicar mensajes con límite de 280 caracteres  
- Listar todos los mensajes publicados, ordenados del más reciente al más antiguo  
- Autenticación con Google OAuth 2.0 para usuarios  
- Conteo dinámico de caracteres en el campo de publicación  
- Visualización inmediata del mensaje publicado en la lista  
- Backend RESTful para gestión de mensajes  
- Frontend responsive y amigable  

---

## 📁 Estructura del proyecto

micro-blog-institucional/
│
├── backend/ # API REST y lógica del servidor
├── frontend/ # Aplicación Angular
├── src/
│ └── capturas/ # Evidencias gráficas
│ ├── app desplegada.png
│ ├── backend.png
│ ├── despliegue del backend.png
│ ├── mensaje.png
│ ├── publicados.png
│ └── publi recibida.png
├── .github/ # Configuración GitHub Actions (CI/CD)
├── README.md
└── package.json

yaml
Copiar
Editar

---

## 📷 Capturas de pantalla

### Aplicación desplegada (frontend en Netlify)  
![App desplegada](src/capturas/app desplegada.png)

### Backend desplegado en Railway  
![Backend Railway](src/capturas/backend.png)

### Proceso de despliegue del backend en Railway  
![Despliegue backend Railway](src/capturas/despliegue del backend.png)

### Campo de texto con conteo de caracteres  
![Mensaje con conteo](src/capturas/mensaje.png)

### Vista de mensajes ya publicados  
![Mensajes publicados](src/capturas/publicados.png)

### Mensaje recibido tras publicar  
![Mensaje recibido](src/capturas/publi recibida.png)

---


http://localhost:4200
🌐 URLs públicas
Backend (Railway): https://tu-backend-railway-url.app

Frontend (Netlify): https://tu-frontend-netlify-url.netlify.app

### 📈 Plan de monitoreo básico
Se monitorean las siguientes métricas:

Tiempo de actividad (Uptime): usando UptimeRobot para chequear la URL cada 5 minutos

Tiempo de respuesta de la API

Tasa de errores 5xx

Evidencia del dashboard de UptimeRobot se encuentra en la carpeta src/capturas.

### 📚 Bibliografía
(S/f). Documentación oficial de OAuth 2.0 Google. Recuperado de: https://developers.google.com/identity

(S/f). Documentación oficial de Angular. Recuperado de: https://angular.io

(S/f). Documentación oficial de Railway. Recuperado de: https://railway.app

(S/f). Documentación oficial de Netlify. Recuperado de: https://netlify.com

### 🙋‍♀️ Autor: Adriana Pamela González Orellana
Correo: apgonzalez1@espe.edu.ec
GitHub: @Apgonzlez1

### 📚 Asignatura: Programación Avanzada 202550
Unidad 3 - Tarea 3 - Ciclo DevOps

