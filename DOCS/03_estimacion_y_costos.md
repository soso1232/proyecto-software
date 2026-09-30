# DOCS/03_estimacion_y_costos.md: Estimación Formal y Presupuesto

## 1. Integrantes y Asignación de Roles

* **Product Owner:** Santiago Cordoba Diaz
* **Líder Técnico:** Santiago Cordoba Diaz
* **Desarrollador(a) 1:** Carlos Gomez Burbano

## 2. Parámetros Base de Estimación

* **Historia Pivote Seleccionada:** 
* **Puntaje Pivote Asignado:** [2 SP o 3 SP]
* **Factor de Conversión ($F_c$):** 1 SP = 8 Horas.
* **Tarifa Hora ($T_h$):** $45.000 COP/Hora.


---

## 3. Matriz Detallada de Estimación Formal y Presupuesto

| ID Issue | Historia de Usuario | Story Points ($SP$) | Factor ($F_c$) | Esfuerzo ($E_i = SP \times F_c$) | Tarifa ($T_h$) | Costo Total ($C_i = E_i \times T_h$) | Justificación Técnica Juicio de Expertos |
| :-: | :--- | :-: | :-: | :-: | :-: | :-: | :--- |
| **#1** | **HU01 - Gestión de Usuarios y Accesos** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Se considera de mayor complejidad porque, además de las operaciones CRUD, requiere diseño y manejo de tablas SQL, autenticación, sesiones, roles, permisos y restricciones de acceso a los diferentes módulos del sistema. Al ser una funcionalidad transversal, debe integrarse correctamente con CRM, ERP y gestión de proyectos. |
| **#2** | **HU02 - Administración de Contactos** | **2 SP** | 8 hrs/SP | **16 hrs** | $45.000 | **$720.000 COP** | Se selecciona como historia pivote por presentar una complejidad baja y claramente delimitada. Incluye CRUD de clientes y prospectos, almacenamiento en base de datos y búsqueda por criterios básicos como nombre, correo o empresa. |
| **#3** | **HU03 - Control de Proyectos por Etapas** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere manejar proyectos, responsables, estados y etapas personalizables. Además del almacenamiento en SQL, demanda lógica para cambiar de etapa y una interfaz visual que facilite el seguimiento del proyecto, por lo que supera la complejidad de un CRUD básico. |
| **#4** | **HU04 - Generación de Cotizaciones HTML a PDF** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere construir una estructura de cotización, manejar información de clientes y productos o servicios, realizar cálculos y convertir el contenido HTML a un documento PDF con formato adecuado para su posterior envío al cliente. |
| **#5** | **HU05 - Configuración de Distribución Financiera** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | La funcionalidad requiere almacenar porcentajes definidos por los socios, validar que la distribución sea exactamente del 100 % y aplicar reglas de negocio para realizar posteriormente el cálculo de utilidades y reservas. |
| **#6** | **HU06 - Registro de Pagos e Ingresos** | **2 SP** | 8 hrs/SP | **16 hrs** | $45.000 | **$720.000 COP** | La complejidad es baja porque se basa principalmente en un formulario y operaciones de almacenamiento y consulta. Debe registrar datos como valor, pagador, fecha, tipo de pago y canal de entrada. |
| **#7** | **HU07 - Gestión de Suscripciones y Alertas** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere gestionar registros recurrentes, fechas de cobro o vencimiento y generar alertas preventivas. La lógica temporal y la automatización hacen que su implementación sea superior a un CRUD convencional. |
| **#8** | **HU08 - Desglose Financiero en Cotizaciones** | **2 SP** | 8 hrs/SP | **16 hrs** | $45.000 | **$720.000 COP** | Se considera de menor complejidad porque se centra en diferenciar dentro de la cotización los valores correspondientes a pagos únicos y cargos recurrentes. Principalmente requiere cálculos y almacenamiento estructurado de la información. |
| **#9** | **HU09 - Conversión Automática de Cotización a Factura/Ingreso** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere integrar la información del CRM con el módulo financiero del ERP. La cotización aprobada debe transformarse en un registro financiero conservando la información relevante y actualizando los estados correspondientes. |
| **#10** | **HU10 - Canal Interno de Comunicación y Novedades** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere implementar almacenamiento y consulta de publicaciones, identificación del usuario que genera la novedad y mecanismos de actualización o notificación para los demás integrantes de la organización. |
| **#11** | **HU11 - Tablero Unificado de Indicadores (Dashboard)** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Debe consolidar datos provenientes de diferentes áreas del sistema, como oportunidades comerciales, proyectos e información financiera. También requiere transformar dichos datos en indicadores y representarlos mediante componentes visuales. |
| **#12** | **HU12 - Traductores de Asientos Contables PUC** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Implica definir reglas para relacionar los movimientos financieros del sistema con las cuentas correspondientes del Plan Único de Cuentas. Requiere lógica de clasificación, relaciones entre tablas y generación de información contable comprensible. |
| **#13** | **HU13 - Registro de Auditoría y Trazabilidad de Cambios** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Aunque puede apoyarse en mecanismos de registro estándar, debe capturar las acciones realizadas por los usuarios, fechas, módulos afectados y cambios ejecutados. Además, debe integrarse con diferentes operaciones del sistema para mantener la trazabilidad. |
| **#14** | **HU14 - Reporte de Medios Magnéticos y Facturación** | **3 SP** | 8 hrs/SP | **24 hrs** | $45.000 | **$1.080.000 COP** | Requiere consultar y estructurar información financiera para posteriormente generar archivos en formatos organizados como CSV o Excel. Esto implica procesamiento adicional y validación de la información generada. |
| **#15** | **HU15 - Directorio Centralizado de Contactos** | **2 SP** | 8 hrs/SP | **16 hrs** | $45.000 | **$720.000 COP** | Se considera de baja complejidad porque su objetivo principal es centralizar y consultar la información de contactos para que pueda ser utilizada por los diferentes módulos del CRM y ERP, apoyándose en estructuras de datos ya definidas. |

---

## 4. Consolidado Total del Proyecto
* **Total Story Points ($SP_{\text{total}}$):** 41 SP.
* **Esfuerzo Total ($E_{\text{total}}$):** 328 Horas.
* **Presupuesto Comercial Total ($C_{\text{total}}$):** $14.760.000 COP.
