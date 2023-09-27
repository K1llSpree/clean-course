(()=>{


    function countBits(n){
       return n.toString(2).replace('0','').length;
    }

    // console.log(countBits(1234))
    console.log(countBits(7))
    console.log(countBits(4))

})();