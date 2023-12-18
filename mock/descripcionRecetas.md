1. **Nombre de la Receta:**
   - Tipo: Cadena de texto
   - Descripción: El nombre de la receta de cerveza.

2. **Autor:**
   - Tipo: Cadena de texto
   - Descripción: El autor o creador de la receta.

3. **Imagen:**
   - Tipo: URL de imagen
   - Descripción: La URL de la imagen asociada a la receta.

4. **Tipo:**
   - Tipo: Cadena de texto
   - Descripción: El tipo de método de elaboración de la cerveza, como "All Grain".

5. **ABV (Alcohol por Volumen):**
   - Tipo: Número decimal
   - Descripción: El contenido de alcohol de la cerveza, en porcentaje.

6. **OG (Gravedad Original):**
   - Tipo: Número decimal
   - Descripción: La gravedad original de la cerveza antes de la fermentación.

7. **FG (Gravedad Final):**
   - Tipo: Número decimal
   - Descripción: La gravedad final de la cerveza después de la fermentación.

8. **IBU (Unidades Internacionales de Amargor):**
   - Tipo: Número entero
   - Descripción: La medida del amargor de la cerveza en unidades internacionales.

9. **Color:**
   - Tipo: Número decimal
   - Descripción: El color de la cerveza, en unidades Lovibond.

10. **Tamaño del Lote:**
    - Tipo: Número decimal
    - Descripción: El tamaño total del lote de cerveza producido por la receta.

11. **Volumen de Agua de Maceración:**
    - Tipo: Número decimal
    - Descripción: La cantidad de agua utilizada durante la maceración.

12. **Volumen de Agua de Lavado:**
    - Tipo: Número decimal
    - Descripción: La cantidad de agua utilizada durante el proceso de lavado.

13. **Tamaño del Hervor:**
    - Tipo: Número decimal
    - Descripción: El tamaño del lote antes de la ebullición.

14. **Tiempo de Hervor:**
    - Tipo: Número entero
    - Descripción: La duración del proceso de ebullición en minutos.

15. **Estilo de Cerveza:**
    - Tipo: Objeto con atributos detallados
    - Descripción: Detalles específicos sobre el estilo de cerveza, incluyendo información como ABV mínimo y máximo, color máximo y mínimo, etc.

16. **Notas:**
    - Tipo: Cadena de texto
    - Descripción: Cualquier nota o comentario adicional sobre la receta.

17. **Fermentables (Ingredientes de Fermentación):**
    - Tipo: Lista de objetos
    - Descripción: Detalles específicos de cada tipo de fermentable utilizado, incluyendo nombre, cantidad, y color.

18. **Lúpulos (Ingredientes de Lúpulo):**
    - Tipo: Lista de objetos
    - Descripción: Detalles específicos de cada tipo de lúpulo utilizado, incluyendo nombre, cantidad, alfa ácidos, tiempo de adición, y amargor.

19. **Levadura (Tipo de Levadura):**
    - Tipo: Lista de objetos
    - Descripción: Detalles específicos de la levadura utilizada, incluyendo nombre, tipo, y cantidad.

20. **Ingredientes Adicionales (Misceláneos):**
    - Tipo: Lista de objetos
    - Descripción: Ingredientes adicionales utilizados, como especias y cáscaras de naranja, con detalles sobre nombre, tipo, cantidad y unidad.

21. **Maceración:**
    - Tipo: Lista de objetos
    - Descripción: Pasos de maceración, incluyendo nombre del paso, temperatura, y tiempo.

22. **Fermentación:**
    - Tipo: Lista de objetos
    - Descripción: Pasos de fermentación, incluyendo tipo, temperatura, y tiempo.