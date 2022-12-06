
const counter = (function(){
  let privateCounter = 0;

  function changeBy(value){
    privateCounter += value
  }

  // the interface provide to user 
  return{
    increment:function(){
       changeBy(1); 
    },
    decrement: function(){
        changeBy(-1);
    },
    value:function(){
        return privateCounter;
    }
  };

}) ();

 console.log(counter.value());
 counter.increment();
 console.log(counter.value());
 counter.decrement();
 console.log(counter.value());
 counter.increment();

