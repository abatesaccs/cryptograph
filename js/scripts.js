
$(document).ready(function(){

  $("#sentence").submit(function(event){
    event.preventDefault();


    var firstArray = $("#inputSentence").val().split(" ");
    console.log(firstArray);

    var secondArray = firstArray.toString().split("");
    var charNumbers = secondArray.length;

    var columns = Math.floor(Math.sqrt(charNumbers));
    var rows = Math.ceil(Math.sqrt(charNumbers));
    if((rows*columns) < (charNumbers)){
      columns++;
    }
    var table = new Array(rows);
    for (i = 0; i < table.length; i++){
      table[i] = new Array(columns);
    }

      for(x=0; x < rows.length; x++){
        for(y=0; y < columns.length; y++){
          if(y < 4 && table[x][y] != undefined){
            
          }
        }
      }

  });


});
