(async function (){
    const response = await fetch ("./data.json");
    const data = await response.json();

    // function gettingVal1(){
    //     const selectedOption = selectElement1.options[selectElement1.selectedIndex];
    //     const selectedText1 = selectedOption.textContent;
    //     const query1 = selectedText1;
    //     const result1 = data.filter(function (elem) {
    //         return elem.genres.includes(query1);    
    //         }
    //     )
    //     console.log(result1);
    // };

    // // const selectElement1 = document.getElementById("select1");
    // selectElement1.addEventListener("change",gettingVal1);

    // function gettingVal2(){
    //     const selectedOption = selectElement2.options[selectElement2.selectedIndex];
    //     const selectedText2 = selectedOption.textContent;
    //     const query2 = selectedText2;
    //     const result2 = data.filter( function (elem){
    //         return elem.release_date.includes(query2);
    //     })
    //     console.log(result2);
    // };
    // // const selectElement2 = document.getElementById("select2");
    // selectElement2.addEventListener("change",gettingVal2);

    // function gettingVal3(){
    //     const selectedOption = selectElement3.options[selectElement3.selectedIndex];
    //     const selectedText3 = selectedOption.textContent;
    //     const query3 =  selectedText3;
    //     const result3 = data.filter(function(elem){
    //         return elem.original_language.includes(query3);
    //     });
    //     console.log(result3);
    // };
    // // const selectElement3 = document.getElementById("select3");
    // selectElement3.addEventListener("change",gettingVal3);

    // function gettingVal4(){
    //     const selectedOption = selectElement4.options[selectElement4.selectedIndex];
    //     const selectedText4 = selectedOption.textContent;
    //     const query4 =  +selectedText4;
    //     const result4 = data.filter(function(elem){
    //         return elem.vote_average === query4;
    //     })
    //     console.log(result4);
    // };
    // // const selectElement4 = document.getElementById("rating");
    // selectElement4.addEventListener("change",gettingVal4);


    const selectElement1 = document.getElementById("select1");
    const selectElement2 = document.getElementById("select2");
    const selectElement3 = document.getElementById("select3");
    const selectElement4 = document.getElementById("rating");
    const movieElem = document.getElementById("movieDisplay"); 
    const yearElem = document.getElementById("yearDisplay");
    const rankElem = document.getElementById("increment");

    
    
    
    
    
    
    function displayResult(finalResult){
        movieElem.innerHTML = "";
        finalResult.forEach(function(result1){
            const li1 = document.createElement("li");
            const movieItem = `
                <div class = "title">${result1.title}</div>
            `;
            li1.innerHTML = movieItem;
            movieElem.appendChild(li1);
        }); 



        yearElem.innerHTML = "";
        finalResult.forEach(function(result2){
            const li2 = document.createElement("li");
            const date = new Date (result2.release_date);
            console.log(date)
            const year = date.getFullYear();
            console.log(year);
            const yearItem = `
                <div class = "title">${year}</div>
            `;
            li2.innerHTML = yearItem;
            yearElem.appendChild(li2);
        });
        function rank(finalResult){
            rankElem.innerHTML = "";
            for (let i = 1; i<=finalResult.length;i++){
                const li = document.createElement("li");
                li.innerHTML = i;
                rankElem.appendChild(li)    
            }        
        };
        rank(finalResult);
    }; 
    // function callingFunction(){
    //     gettingResult();
    // };
    function searchResult(q1,q2,q3,q4){
        const finalResult = data.filter(function(elem){
            const dateNew = new Date (elem.release_date)
            const yearNew = dateNew.getFullYear(); 
            
            return (elem.genres.includes(q1) || (yearNew === q2 )|| elem.original_language.includes(q3) || (+elem.vote_average === q4))
        });
        displayResult(finalResult)
    };
    



    function gettingResult(){
        let selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
        let selectedText1 = selectedOption1.textContent;
        let query1 = selectedText1;


        let selectedOption2 = selectElement2.options[selectElement2.selectedIndex];
        let selectedText2 = selectedOption2.textContent;
        let query2 = +selectedText2;



        let selectedOption3 = selectElement3.options[selectElement3.selectedIndex];
        let selectedText3 = selectedOption3.textContent;
        let query3 =  selectedText3;

    
    
        let selectedOption = selectElement4.options[selectElement4.selectedIndex];
        let selectedText4 = selectedOption.textContent;
        let query4 =  +selectedText4;


        searchResult(query1,query2,query3,query4);
    };

    // function searchResult(q1,q2,q3,q4){
    //     const finalResult = data.filter(function(elem){
    //         const dateNew = new Date (elem.release_date)
    //         const yearNew = dateNew.getFullYear(); 
            
    //         return elem.genres.toString().includes(q1) && (yearNew === q2 )&& elem.original_language.includes(q3) && (+elem.vote_average === q4)
    //     });
    //     finalResult;
    //     displayResult(finalResult)
    // };
    
      


    (selectElement1 && selectElement2 && selectElement3 && selectElement4).addEventListener("change",gettingResult);
    // selectElement1.addEventListener("change",callingFunction);
    // selectElement2.addEventListener("change",callingFunction);
    // selectElement3.addEventListener("change",callingFunction);
    // selectElement4.addEventListener("change",callingFunction);


})();