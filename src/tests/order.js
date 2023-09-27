(()=>{
    let array = ['y1o','mo3','k2o','5ko','7ko','mo6'];

    function sortingArray(array){
            let sorted = [];
            sorted =  array.sort((a,b)=>{
                return a.replace(/\D+/g,'') - b.replace(/\D+/g,'')
            });
            console.log(sorted);
            return sorted;
    }


    sortingArray(array);

})();