class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
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

    deductFood(){
       if(this.foodStock>0){
           this.foodStock=this.foodStock-1;
       }

         
    }

    Garden(){
        background(garden, 1200, 800);
    }

    BedRoom(){
        background(bedRoom, 1200, 800);
    }

    LivingRoom(){
        background(livingRoom, 1200, 800);
    }

    WashRoom(){
        background(washRoom, 1200, 800);
    }
    
   

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

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

