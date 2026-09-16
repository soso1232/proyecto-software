### *2.1. Matriz de Priorización y Estimación Empírica*

| ID Issue | Historia de Usuario | Categoría MoSCoW | Criterio de Impacto (Valor de Negocio) | Justificación Estratégica | Estimación Empírica (Cualitativa) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | **HU01 - Gestión de Usuarios y Accesos** | **Must Have** (M) | Impacto de Seguridad | Es la base del control del sistema. Garantiza la restricción de información sensible según roles. | Complejidad baja (CRUD estándar y gestión de sesiones). |
| **#2** | **HU02 - Administración de Contactos** | **Must Have** (M) | Impacto Operativo | Sin una base unificada de clientes no es posible operar el CRM ni asociar cobros o facturas. | Complejidad baja (CRUD de entidades y motor de búsqueda). |
| **#3** | **HU03 - Control de Proyectos por Etapas** | **Must Have** (M) | Impacto Operativo | Permite sustituir el seguimiento informal en hojas de cálculo por un flujo visual claro. | Complejidad media (interfaz visual Kanban o por estados). |
| **#4** | **HU04 - Generación de Cotizaciones HTML a PDF** | **Must Have** (M) | Impacto Comercial | Esencial para la prospección comercial y el cierre de ventas del emprendimiento. | Complejidad media (renderizado HTML a motor PDF). |
| **#5** | **HU05 - Configuración de Distribución Financiera** | **Must Have** (M) | Impacto Financiero | Automatiza el reparto de utilidades y reservas entre socios de forma transparente. | Complejidad baja-media (lógica de validación matemática). |
| **#6** | **HU06 - Registro de Pagos e Ingresos** | **Must Have** (M) | Impacto Financiero | Vital para el control de caja. Sin el registro de ingresos no existe trazabilidad contable. | Complejidad baja (formulario de registro y tablas dinámicas). |
| **#7** | **HU07 - Gestión de Suscripciones y Alertas** | **Should Have** (S) | Impacto Financiero | Evita la pérdida de servicios por olvidos, pero la caja básica opera sin el automatismo en Fase 1. | Complejidad media (programación de tareas cron y notificaciones). |
| **#8** | **HU08 - Desglose Financiero en Cotizaciones** | **Should Have** (S) | Impacto Financiero | Permite proyectar ingresos recurrentes vs. pagos únicos desde la fase de venta. | Complejidad baja (cálculos estructurados en el cotizador). |
| **#9** | **HU09 - Conversión Automática de Cotización a Factura/Ingreso** | **Should Have** (S) | Impacto Operativo | Elimina la doble digitación entre CRM y ERP, conectando la venta con la finanza. | Complejidad media (mapeo de datos y cambio de estados). |
| **#10** | **HU10 - Canal Interno de Comunicación y Novedades** | **Could Have** (C) | Impacto Organizacional | Fomenta la alineación de los socios, aunque puede suplirse temporalmente con canales externos. | Complejidad media (feed de publicaciones y notificaciones). |
| **#11** | **HU11 - Tablero Unificado de Indicadores (Dashboard)** | **Should Have** (S) | Impacto Estratégico | Centraliza las métricas clave para la toma de decisiones rápidas por parte de los socios. | Complejidad media-alta (agregación de datos y gráficos dinámicos). |
| **#12** | **HU12 - Traductores de Asientos Contables PUC** | **Must Have** (M) | Impacto Financiero | Traduce la operación diaria a un lenguaje contable estandarizado sin conocimientos técnicos. | Complejidad media-alta (mapeo automático de cuentas contables). |
| **#13** | **HU13 - Registro de Auditoría y Trazabilidad de Cambios** | **Could Have** (C) | Impacto de Seguridad | Permite rastrear ediciones y modificaciones clave para evitar fraude o pérdidas de datos. | Complejidad baja-media (middleware de log de eventos). |
| **#14** | **HU14 - Reporte de Medios Magnéticos y Facturación** | **Won't Have** (W) | Impacto Legal | Requerido para cierres fiscales/tributarios avanzados; postergable para iteraciones posteriores. | Complejidad media (generación de formatos estructurados CSV/Excel). |
| **#15** | **HU15 - Directorio Centralizado de Contactos** | **Must Have** (M) | Impacto Operativo | Garantiza que la información de un cliente sea la misma para el comercial y el contador. | Complejidad baja (arquitectura de datos unificada). |

----

## 2.2. Alcance del Producto Mínimo Viable (MVP)

El Producto Mínimo Viable (MVP) para el lanzamiento de la plataforma ERP + CRM se compondrá únicamente de las historias clasificadas como **Must Have** (`#1`, `#2`, `#3`, `#4`, `#5`, `#6`, `#12` y `#15`).

* **Justificación de Selección:** Se cubren las tres dimensiones críticas del negocio (seguridad e identidades, gestión comercial/operativa centralizada y contabilidad automatizada PUC)[cite: 1]. Con este núcleo, el emprendimiento elimina la dependencia de hojas de cálculo arcaicas y garantiza el flujo continuo desde la prospección hasta el registro financiero[cite: 1].

* **Funcionalidades Postergadas:** 
  * La automatización de alertas de suscripciones (`#7`), el desglose recurrente en cotizaciones (`#8`), la conversión automática a factura (`#9`) y el Dashboard gráfico (`#11`) se posponen para la siguiente fase, gestionándose de forma manual dentro de los módulos básicos del ERP/CRM.
  * El canal de comunicación interno (`#10`) y la bitácora de auditoría (`#13`) se sustituirán temporalmente por herramientas de mensajería externas y logs estándar del sistema.
  * La exportación de medios magnéticos (`#14`) queda fuera del ciclo de lanzamiento inicial hasta la siguiente iteración de actualización tributaria.
