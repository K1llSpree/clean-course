(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, needEvaluation: false },
        { id: 2, needEvaluation: false },
        { id: 3, needEvaluation: true },
        { id: 4, needEvaluation: false },
        { id: 5, needEvaluation: false },
        { id: 7, needEvaluation: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const files = filesToEvaluate.map( f => f.needEvaluation );

    
     class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    // días transcurridos - elapsed time in days
    const elapseTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

})();
