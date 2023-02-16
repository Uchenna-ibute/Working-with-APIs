const countcoments = (arr) => {
     const comments = arr;
     let count = 0;
     comments.forEach((item) =>{ 
       if(item.comment !== "") { 
         count += 1     
       }
     }) 
     return count;
  };

  module.exports = countcoments;