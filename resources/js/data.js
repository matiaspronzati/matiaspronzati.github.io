export const pages = [
    {
        section: "Portada",
        topic: null,
        onlyDesktop: true,
        content: `<div class="page page-empty full"></div>`
    },
    {
        section: "Portada",
        topic: null,
        content: `<img src="resources/content/portada.png" class="full full-img" style="filter: sepia(200%) brightness(0.3) saturate(100%) hue-rotate(-20deg);" />
        <div class="page-content content">
        <h1 class="title portfolio" style="
        writing-mode: vertical-rl;
        rotate: 180deg;
        text-align: end;
        justify-self: end;
        line-height: 16cqw;
        ">Portfolio</h1>
        <h1 class="subtitle firma" style="text-align: end;">Matías Pronzati</h1>
        <h3 class="indice" style="top: 70%;">Trabajos Académicos<br>
        Trabajos Realizados<br>
        Experimentaciones</h3>
        </div>`
    },
    {
        section: "Sobre Mí",
        topic: null,
        onlyDesktop: true,
        content: `<h1 class="section-num">0</h1>`
    },
    {
        section: "Sobre Mí",
        topic: null,
        content: `<div class="page-content">
        <h1 class="section-title">Sobre Mí</h1>
        <div style="grid-column: 1 / 6; grid-row: 3;">
        <p>Soy un estudiante avanzado de arquitectura que valora
        el <b>diseño eficiente</b> y el respeto por el <b>espacio público</b>.
        Busco crear <b>espacios de calidad</b> y, al mismo tiempo, optimizar los
        recursos para <b>lograr más con menos.</b></p>

        <p>Hago uso de una <b>estética minimalista</b>, poniendo en valor la <b>naturaleza de los
        materiales</b> y la <b>pureza de las formas</b>. Estoy terminando la carrera de arquitectura
        en la FAUD de la UNMdP. Durante la misma me orienté hacía el <b>diseño funcional</b>, el
        <b>paisaje urbano</b> y el <b>diseño industrial</b> de arquitectura.</p>
        </div>

        <div style="grid-column: 8 / 13; grid-row: 11;">
        <p><i>En mi tiempo libre me gusta investigar sobre los temas más variopintos, disfrutar
        videojuegos, programar o tocar el bajo.</i></p>
        </div>

        <div style="grid-column: 1 / 6; grid-row: 9;">
        <p>He usado una gran variedad de programas de dibujo, modelado 3D, BIM y renderizado.
        Mis preferidos son <b>AutoCAD</b> y <b>Blender</b><sup>1</sup>.</p>
        </div>
        <div class="footnote" style="grid-column: 2 / 13; grid-row: 12 / 13;">
        1. En lugar de SketchUp y a veces también para renderizado.
        </div>
        <div class="grid-image" style="grid-column: 8 / 13; grid-row: 2 / 6;">
        <img src="resources/content/IMG_2056.JPG" style="width: 100%;" />
        </div>
        </div>`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: null,
        onlyDesktop: true,
        content: `<h1 class="section-num">1</h1>`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: null,
        content: `<div class="page-content">
        <h1 class="section-title">Proyectos</h1>
        <h1 class="section-title-b">de Arquitectura</h1>
        <h3 class="indice"><span style="color:var(--yellow);">Trabajos Académicos</span><br>
        Trabajo Final de Carrera<br>
        Claustros con Torres</h3>
        </div>`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: "Trabajo Final de Carrera",
        content: `<img src="resources/content/2.jpg" class="full" style="max-inline-size: revert; position: relative; right: 20%;" />`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: null,
        content: `<img src="resources/content/2.jpg" class="full" style="max-inline-size: revert; position: relative; right: 120%;" />`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: "Claustros y Torres",
        content: `<img src="resources/content/5.png" class="full" style="max-inline-size: revert; position: relative; right: 100%;" />`
    },
    {
        section: "Proyectos de Arquitectura",
        topic: null,
        content: `<div class="page-content">
        <h1 class="section-title">Claustros y Torres</h1>
        <div style="grid-column: 1 / 6; grid-row: 4;">
        <b>Diseño 4 | 2026</b>
        <hr>
        <p>Anteproyecto diseñado en conjunto con <b>Dalila Furch</b>, para la ciudad deportiva de Mar del Plata.</p>
        <p>El proyecto consta de tres claustros unidos por una tira frontal de mayor altura, con una torre
        marcando el ritmo para cada uno.</p>
        </div>
        <div style="grid-column: 8 / 13; grid-row: 10;">
        <b>Programas utilizados:</b>
        <p>La volumetría se realizó en <b>SketchUp</b>, renderizada luego en <b>Twin Motion</b>.</p>
        <p>El dibujo técnico se hizo en <b>AutoCad</b> y se usó <b>Photoshop</b> para agregar fondos.</p>
        </div>
        </div>`
    },
    {
        section: "Dibujo Técnico",
        topic: null,
        onlyDesktop: true,
        content: `<h1 class="section-num">2</h1>`
    },
    {
        section: "Dibujo Técnico",
        topic: "Dibujo Técnico",
        content: `<div class="page-content">
        <h1 class="section-title">Dibujo Técnico</h1>
        <h3 class="indice"><span style="color:var(--yellow);">Trabajos Realizados</span><br>
        Edificio Corona<br>
        <span style="color:var(--yellow);">Trabajos Académicos</span><br>
        Trabajo Final de Carrera</h3>
        </div>`
    },
    {
        section: "Experimentaciones",
        topic: null,
        onlyDesktop: true,
        content: `<h1 class="section-num">3</h1>`
    },
    {
        section: "Experimentaciones",
        topic: "Materiales",
        content: `<div class="page-content">
        <h1 class="section-title">Experimentaciones</h1>
        <h3 class="indice"><span style="color:var(--yellow);">Materiales</span><br>
        Texturas Procedurales<br>
        Pasto 3D</h3>
        </div>`
    },
];
