# Estimación del Plan de Proyecto y Modelos de Proceso - Proyecto Prototipado CRM + ERP

## 1. Selección y Justificación del Modelo de Proceso

Para el desarrollo del **prototipo CRM + ERP para emprendedores** se ha seleccionado el modelo de proceso **Scrum (Marco Ágil)**. La elección se debe a que el proyecto integra diferentes módulos relacionados con la gestión comercial, operativa y financiera, por lo que durante el desarrollo pueden surgir cambios en los requisitos, ajustes en las reglas de negocio y nuevas necesidades de los usuarios.

El enfoque iterativo e incremental de Scrum permite desarrollar el sistema por partes funcionales, priorizando inicialmente las historias de usuario clasificadas como **Must Have** para construir un Producto Mínimo Viable (MVP). Esto permite contar primero con las funcionalidades fundamentales para la gestión de usuarios, contactos, proyectos, cotizaciones y procesos financieros, dejando para iteraciones posteriores las funcionalidades de menor prioridad.

Además, Scrum facilita la inspección periódica del avance del proyecto mediante los diferentes eventos del marco de trabajo, permitiendo identificar dificultades técnicas, revisar los incrementos desarrollados y realizar ajustes en los siguientes Sprints. Esto resulta especialmente útil para funcionalidades como el control de roles y permisos, la integración entre los módulos CRM y ERP y el manejo de información financiera.

Por estas características, Scrum se adapta al proyecto porque permite organizar el desarrollo de forma progresiva, priorizar las funcionalidades de mayor importancia y entregar incrementos funcionales del sistema al finalizar cada Sprint.

---

## 2. Parámetros de Planificación

* **Velocidad del Equipo ($V$):** 12 SP / Sprint.
* **Duración por Sprint:** 2 Semanas.
* **Factor de Conversión:** 1 SP = 8 Horas.
* **Tarifa de Desarrollo:** $45.000 COP/Hora.

* **Total Story Points del Backlog Completo:** 41 SP.

### Historias del MVP (Prioridad Must Have)

De acuerdo con la priorización MoSCoW establecida para el proyecto, el MVP está conformado por las siguientes historias de usuario:

* `HU01 - Gestión de Usuarios y Accesos`: **3 SP**
* `HU02 - Administración de Contactos`: **2 SP**
* `HU03 - Control de Proyectos por Etapas`: **3 SP**
* `HU04 - Generación de Cotizaciones HTML a PDF`: **3 SP**
* `HU05 - Configuración de Distribución Financiera`: **3 SP**
* `HU06 - Registro de Pagos e Ingresos`: **2 SP**
* `HU12 - Traductores de Asientos Contables PUC`: **3 SP**
* `HU15 - Directorio Centralizado de Contactos`: **2 SP**

**SP total del MVP:**

\[
SP_{MVP}=3+2+3+3+3+2+3+2
\]

\[
SP_{MVP}=\mathbf{21\ SP}
\]

**Número de Sprints para el MVP:**

\[
N_{\text{Sprints}}=\frac{21\ SP}{12\ SP/Sprint}=1.75
\]

Redondeando hacia arriba:

\[
\boxed{N_{\text{Sprints}}=2\ Sprints}
\]

**Duración Total del MVP:**

\[
T_{\text{MVP}}=2\ Sprints\times2\ Semanas/Sprint
\]

\[
\boxed{T_{\text{MVP}}=4\ Semanas}
\]

---

## 3. Planificación Detallada de Sprints

### Sprint 1 (Semanas 1 y 2) · Capacidad: 12 SP

* **[#1]:** `HU01 - Gestión de Usuarios y Accesos` (**3 SP - $1.080.000 COP**)
* **[#2]:** `HU02 - Administración de Contactos` (**2 SP - $720.000 COP**)
* **[#6]:** `HU06 - Registro de Pagos e Ingresos` (**2 SP - $720.000 COP**)
* **[#15]:** `HU15 - Directorio Centralizado de Contactos` (**2 SP - $720.000 COP**)

**Carga Total del Sprint 1:**

\[
3+2+2+2=9\ SP
\]

**Esfuerzo:**

\[
9\ SP\times8\ Horas/SP=72\ Horas
\]

**Costo Sprint 1:**

\[
72\ Horas\times45.000\ COP=\mathbf{\$3.240.000\ COP}
\]

---

### Sprint 2 (Semanas 3 y 4) · Capacidad: 12 SP

* **[#3]:** `HU03 - Control de Proyectos por Etapas` (**3 SP - $1.080.000 COP**)
* **[#4]:** `HU04 - Generación de Cotizaciones HTML a PDF` (**3 SP - $1.080.000 COP**)
* **[#5]:** `HU05 - Configuración de Distribución Financiera` (**3 SP - $1.080.000 COP**)
* **[#12]:** `HU12 - Traductores de Asientos Contables PUC` (**3 SP - $1.080.000 COP**)

**Carga Total del Sprint 2:**

\[
3+3+3+3=12\ SP
\]

**Esfuerzo:**

\[
12\ SP\times8\ Horas/SP=96\ Horas
\]

**Costo Sprint 2:**

\[
96\ Horas\times45.000\ COP=\mathbf{\$4.320.000\ COP}
\]

Con la finalización del Sprint 2 se completa el **MVP de 21 SP**, incluyendo las funcionalidades principales de gestión de usuarios, contactos, proyectos, cotizaciones y procesos financieros.

### Sprint 3 (Semanas 5 y 6 - Extensión del Proyecto Completo) · Capacidad: 12 SP

* **[#7]:** `HU07 - Gestión de Suscripciones y Alertas` (**3 SP - $1.080.000 COP**)
* **[#8]:** `HU08 - Desglose Financiero en Cotizaciones` (**2 SP - $720.000 COP**)
* **[#9]:** `HU09 - Conversión Automática de Cotización a Factura/Ingreso` (**3 SP - $1.080.000 COP**)
* **[#11]:** `HU11 - Tablero Unificado de Indicadores (Dashboard)` (**3 SP - $1.080.000 COP**)

**Carga Total del Sprint 3:**

\[
3+2+3+3=11\ SP
\]

**Esfuerzo:**

\[
11\ SP\times8\ Horas/SP=88\ Horas
\]

**Costo Sprint 3:**

\[
88\ Horas\times45.000\ COP=\mathbf{\$3.960.000\ COP}
\]

### Sprint 4 (Semanas 7 y 8 - Extensión del Proyecto Completo) · Capacidad: 12 SP

* **[#10]:** `HU10 - Canal Interno de Comunicación y Novedades` (**3 SP - $1.080.000 COP**)
* **[#13]:** `HU13 - Registro de Auditoría y Trazabilidad de Cambios` (**3 SP - $1.080.000 COP**)
* **[#14]:** `HU14 - Reporte de Medios Magnéticos y Facturación` (**3 SP - $1.080.000 COP**)

**Carga Total del Sprint 4:**

\[
3+3+3=9\ SP
\]

**Esfuerzo:**

\[
9\ SP\times8\ Horas/SP=72\ Horas
\]

**Costo Sprint 4:**

\[
72\ Horas\times45.000\ COP=\mathbf{\$3.240.000\ COP}
\]

---

## 4. Resumen Comercial de la Propuesta (Línea Base Final)

* **Tiempo de Entrega del MVP:** 4 Semanas (2 Sprints).
* **Esfuerzo Total del MVP:** 168 Horas/Hombre.
* **Inversión Financiera MVP:** $7.560.000 COP.
* **Tiempo de Entrega Proyecto Completo:** 8 Semanas (4 Sprints).
* **Esfuerzo Total Proyecto Completo:** 328 Horas/Hombre.
* **Inversión Financiera Proyecto Completo:** $14.760.000 COP.
