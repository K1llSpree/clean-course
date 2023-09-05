
(() => {

    function getMovieById ( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById ( movieId: string ) {
        console.log({ movieId });
    }

    function getActorInfoById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie{
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }
    function createMovie({ title, description, rating, cast } : Movie ) {
        console.log({ title, description, rating, cast });
    }

    interface Actor{
        fullName: string,
        birthDate: Date
    }
    function createActor( {fullName, birthDate} : Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();

//WITHOUT REFACTORIZED
const getPayAmount2 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
    }
    
    return result;
}
//REFACTORIZED 
const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
} ) => {
  if (isDead) return 1500;
  if (isSeparated) return 2500;
  return isRetired ?  3000  :  4000;
};
