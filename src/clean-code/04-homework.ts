(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
       const  fruitArray = ['manzana', 'cereza', 'ciruela'];
       return fruitArray.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {
        switch (color) {
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
                break;
        }
    }

    // Simplificar esta función
    interface Steps{
        position: string;
        isStepWorking: boolean;
    }
    let stepArray : Steps[]  = [
                                         {
                                          position: 'First',
                                          isStepWorking: true
                                         },
                                         {
                                          position: 'Second',
                                          isStepWorking: false
                                         },
                                         {
                                          position: 'Third',
                                          isStepWorking: false
                                         },
                                         {
                                          position: 'Fourth',
                                          isStepWorking: false
                                         },
                                         {
                                          position: 'Fifth',
                                          isStepWorking: false
                                         },
                                         {
                                          position: 'Sixth',
                                          isStepWorking: false
                                         },
                                         {
                                          position: 'Seventh',
                                          isStepWorking: false
                                         },
                                        ];
    function workingSteps(stepsArray:Steps[]): string[]{
        let message: string[] = [];
       for (let index = 0; index < stepsArray.length; index++) {
            message.push(stepsArray[index].isStepWorking ?  
            ` ${stepsArray[index].position} Step is Working Properly!` :
            ` ${stepsArray[index].position} Step is Broken!`);
       }
       return message;
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps(stepArray) }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
