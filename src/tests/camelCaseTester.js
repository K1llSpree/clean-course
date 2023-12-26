(()=>{


    function solution(string) {
        let finalString ='';
        for (let index = 0; index < string.length; index++) {
            string[index] == string[index].toUpperCase() ? finalString += ` ${string[index]}` : finalString += string[index];
        }
        return finalString;
    }
    
//Easier Solution
// function solution(string) {
//     return string.split(/(?=[A-Z])/).join(' ');
// }

//Best Solution in CodeWars
// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }


    solution('camelCasingTest');
    solution('camelCasing');

})();
