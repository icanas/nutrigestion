truncate table comida;
truncate table dia;
truncate table dieta;
truncate table alimento



SELECT c.*, a.nombre
FROM comida c, alimento a
WHERE c.id = 1