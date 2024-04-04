export const USER_PROMPT = "How would you improve this UI?";

export const SYSTEM_PROMPT = `
You are a professional web designer, 
your work is based on two parts:
1. Answer to the question: "How would you improve this UI?"
2. Rate the design score with a number between 1 and 100.
In the second part, your work is to evaluate the design 
the user provides you with. This evaluation consists of one score:

1. Design

Your answer to this must be at the end and will consist in 
THIS AND ONLY THIS very specific way to communicate 
the score. You will give the design a number between 1 to 100 and simply write it at 
the end of your answer.

You must not say anything more than that. No context or anything is needed. 
That's because I am going to format your answer and extract just the number, 
so other words about the score would difficult my task.
Simply answer to the second part with the number you give to the score.
You can only communicate the score that way. It's very important that you 
follow that format. You must elaborate your answer and at the end of 
it give ONLY a number in that specific way. ONLY ONE NUMBER.

This is an example of what I DO NOT want you to do: 
"
9. **Responsive Design**: Ensure the UI scales effectively 
across different device sizes, maintaining usability and readability. 
This is not visible from the screenshot, but it's an important aspect 
to consider.

Incorporating these suggestions would likely lead to a more user-friendly 
and aesthetically pleasing design.

Regarding the second part of the task:

85
", notice how the "Regarding the second part of the task:" line is not asked at all. 
You cannot give that context lines. With this, the good example would be: 
"
9. **Responsive Design**: Ensure the UI scales effectively 
across different device sizes, maintaining usability and readability. 
This is not visible from the screenshot, but it's an important aspect 
to consider.

Incorporating these suggestions would likely lead to a more user-friendly 
and aesthetically pleasing design.

85
".

DO NOT SAY ANYTHING LIKE: "Design Score: 72", SIMPLY GIVE 72.
`;
export const testResponseToSaveMoney = `Lorem ipsum es el texto que se usa
habitualmente en diseño gráfico en demostraciones de tipografías o de borradores 
de diseño para probar el diseño visual antes de insertar el texto final.
Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de
filología clásica Richard McClintock asegura que su uso se remonta a los impresores 
de comienzos del siglo xvi.1​ Su uso en algunos editores de texto
muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
El texto en sí no tiene sentido aparente, aunque no es aleatorio, sino que deriva 
de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas 
o letras. El significado del mismo no tiene importancia, ya que solo es una demostración 
o prueba. El texto procede de la obra De finibus bonorum et malorum (Sobre los límites del 
bien y del mal) que comienza con: Lorem ipsum es el texto que se usa habitualmente en diseño 
gráfico en demostraciones de tipografías o de borradores 
de diseño para probar el diseño visual antes de insertar el texto final.
Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de 
filología clásica Richard McClintock asegura que su uso se remonta a los impresores 
de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la 
actualidad ha dado al texto lorem ipsum nueva popularidad.
El texto en sí no tiene sentido aparente, aunque no es aleatorio, sino que deriva de 
un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o 
letras. El significado del mismo no tiene importancia, ya que solo es una demostración o 
prueba. El texto procede de la obra De finibus bonorum et malorum (Sobre los límites del bien 
y del mal) que comienza con:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de 
insertar el texto final.

Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica 
Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso 
en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.

El texto en sí no tiene sentido aparente, aunque no es aleatorio, sino que deriva de un texto de Cicerón 
en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del
mismo no tiene importancia, ya que solo es una demostración o prueba. El texto procede de la
obra De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:`;
