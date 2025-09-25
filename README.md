# Aniversario 2 Años 🥰

Este es un proyecto especial diseñado como regalo de aniversario para una persona muy especial ✨️.
Combina una **entrada romántica interactiva** ♥️, un **video sorpresa** 😊 y una **página temática con juegos inspirados en películas y ajedrez** 🥰.

Está realizado con **React + Vite + TailwindCSS**. 

# ✨ Características principales

- 🌸 **Pantalla inicial romántica**  
  - Texto decorado: *“Feliz 2 años de aniversario”*.  
  - Pregunta interactiva: *“¿Quieres saber el regalo que te doy?”*.  
  - Botón **No** que se escapa cada vez que se intenta presionar.  
  - Botón **Sí** que abre un **video sorpresa**.  
  - Tras el video aparece un botón **Continuar** → abre la página principal.  

- 🎮 **Secciones de juegos por películas**  
  - **Romance** → Memory game con fotos personalizadas.  
  - **Suspenso** → Puzzle de piezas que desbloquea un mensaje.  
  - **Ciencia Ficción** → Juego clicker futurista con frases románticas.  
  - **Superhéroes** → Juego de esquivar obstáculos, estilo arcade.  

- ♟️ **Ajedrez interactivo**  
  - Integrado con [chess.js](https://github.com/jhlywa/chess.js) para validar movimientos.  
  - Tablero con [react-chessboard](https://github.com/Clariity/react-chessboard).  
  - Cada movimiento desbloquea una frase romántica como parte de la historia.  

- 💕 **Diseño visual profesional**  
  - Estilo **romántico kawaii** con gradientes, partículas de corazones y glassmorphism.  
  - Transiciones suaves, sombras y tipografía decorativa.  

# 🚀 Instalación y uso

### 1. Clonar repositorio
```bash
git clone https://github.com/TU-USUARIO/aniversario-web.git
cd aniversario-web
```

#Estructura
```bash
aniversario-web/
│
├── public/               # Archivos estáticos (ej: música, video sorpresa)
├── src/
│   ├── components/
│   │   └── AniversarioGameShowcase.jsx  # Componente principal
│   ├── App.jsx            # Punto de entrada de la app
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

