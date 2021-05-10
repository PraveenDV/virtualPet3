class Food{
    constructor(){
        this.image=loadImage("milk.png");
         this.foodStock=0;
         this.lastFed;

    
    }

    
    getFoodStock(){
        return this.foodStock;
        
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
   

    updateFoodStock(foodStock){
        
            this.foodStock=foodStock; 
    }

   /* deductFood(){
       if(this.foodStock>0){
           this.foodStock=this.foodStock-1;
       }

         
    }*/

    Garden(){
        background(garden,500, 500);
    }

    BedRoom(){
        background(bedRoom,500, 500);
    }

    LivingRoom(){
        background(livingRoom, 500, 500);
    }

    WashRoom(){
        background(washRoom, 500, 500);
    }
    
   

    display(){
        var x=80,y=100;
        background("green");
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        fill(255);
        textSize(20);
        if(lastFed>=12){
          text("Last fed: "+lastFed%12+"PM", 400, 20);
        }else if(lastFed===0){
          text("Last fed: "+lastFed+"AM", 400, 20);
        }

        if(this.foodStock!==0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }

                image(this.image,x,y,70,70);
                x=x+30;
            }
        }
       textSize(15)
       fill("white");
       text("Food remaining:"+this.foodStock, 500,100);

      
    }

}

