//Create variables here
var happyDog, dog, database, foodS, Dog,
 addFoodButton,feedButton, foodObj, fedTime, lastFed;

 var gameState, currentTime, readState;
 

var bedRoom, washRoom, garden, livingRoom

function preload()
{
  //load images here
  happyDog=loadImage("images/happy dog.png");
  dog=loadImage("images/Dog.png");

  bedRoom=loadImage("images/Bed Room.png");
  washRoom=loadImage("images/Wash Room.png");
  garden=loadImage("images/Garden.png");
  livingRoom=loadImage("images/Living Room.png");
  
} 

function setup() {
  createCanvas(1200, 800);
  database=firebase.database();
  console.log(database);

 Dog=createSprite(1050,300,10,10);
 Dog.addImage(dog);
 Dog.scale=0.2;

 foodObj=new Food();
 

 addFoodButton=createButton('Add food');
 addFoodButton.position(1050,70);
 addFoodButton.mousePressed(addFood);

 feedButton=createButton('Feed Dog');
 feedButton.position(900,70);
 feedButton.mousePressed(fedDog);

 foodStock=database.ref('Food');
 foodStock.on("value",function(data){
   foodS=data.val();
   foodObj.updateFoodStock(foodS);
 });

 fedTime=database.ref('FeedTime');
 fedTime.on("value", (data)=>{
   lastFed=data.val();
 })


 readState=database.ref('gameState');
 readState.on("value", (data)=>{
  gameState=data.val();
 });

}


function draw() {  
  //background("green");  
  

  textSize(24);
  fill("red");
  text("Scroll Right ->->", 150, 30)
  
  currentTime=hour();

  if(currentTime==(lastFed+1)){
    update("Playing");
      foodObj.Garden();
  }else if(currentTime==(lastFed+2)){
    update("Sleeping");
    foodObj.BedRoom();
  }else if(currentTime>(lastFed-2) && currentTime<=(lastFed-4)){
    update("Bathing");
    foodObj.WashRoom();
  }else{
    update("Hungry");
    foodObj.display();
  }

   if(gameState!="Hungry")
  {
    //alert("error");
    feedButton.hide();
    addFoodButton.hide();
    Dog.remove();
  }
  else{
    feedButton.show();
    addFoodButton.show();
    Dog.addImage(dog);
  } 

  fedTime=database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed=data.val();
  });

  
  


  console.log(gameState);
  

  drawSprites();

  

  }
  /*function readStock(data){
    foodS=data.val();
    foodObj.updateFoodStock(foodS);
  }*/

  function fedDog(){
    Dog.addImage(happyDog);

   
   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   
    

    database.ref("/").update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour(),  
      gameState:"Hungry"
    });
  }

  function addFood(){
    foodS++;
    database.ref('/').update({
      Food:foodS
    });   
  }

function update(state){
  database.ref('/').update({
    gameState:state
  });
}



 


