  var recyclable, nonrecyclable;
  var player,court,score=0;
  var item;
  var gameState=1;
  var name= "Basketball";


  function preload(){

    courtimage=loadImage("Court.png");
    // Recyclable
    itemimage=loadImage("Basketball.png");
    // Non-Recyclable
    item2image=loadImage("bubblewrap.png");
    // Recyclable
    item3image=loadImage("Cheerios.png");
    // Recyclable
    item4image=loadImage("CD.png");
    // Non-Recylable
    item5image=loadImage("battery.png");
    // Non-Recylable
    item6image=loadImage("plant.png")
    // Non-Recylable
    item7image=loadImage("CHIPS.png");
    // Recylable
    item8image=loadImage("Magazine.png");
    // Recylable
    item9image=loadImage("Pepsi.png");
    // Recylable
    item10image=loadImage("Crayons.png");
    
    leftimage=loadImage("left.png");
    rightimage=loadImage("right.png");
    upimage=loadImage("up.png");
    downimage=loadImage("down.png");
    buzzersound=loadSound("buzzer.mp3");
    tingsound=loadSound("ting.mp3");

  }
  function setup(){
    createCanvas(576,433);
    court=createSprite(288,216);
    court.addImage(courtimage);
    court.depth=1;

    item=createSprite(280,220,60,40);
    item.addImage(itemimage);
    item.scale=0.075;
    item.depth=2;
    
    


    up=createSprite(280,270,30,30);
    up.addImage(upimage);
    up.scale=0.1;
    down=createSprite(280,310,30,30);
    down.addImage(downimage);
    down.scale=0.1;
    left=createSprite(220,295,30,30);
    left.addImage(leftimage);
    left.scale=0.1;
    right=createSprite(340,295,30,30);
    right.addImage(rightimage);
    right.scale=0.1;


    upboulder=createSprite(300,100,1000,10);
    upboulder.visible=false;
    leftboulder=createSprite(40,220,20,240);
     leftboulder.visible=false;
    rightboulder=createSprite(550,220,20,240);
    rightboulder.visible=false;
    bottomboulder=createSprite(380,340,1000,10);
     bottomboulder.visible=false;

   hoopleftboulder=createSprite(120,265,10,150);
    hoopleftboulder.visible=false;
    
   hoopleftbehindboulder=createSprite(14,165,30,10);
    hoopleftbehindboulder.visible=false;
    
    hoopleftbasket=createSprite(75,220,30,10);
   hoopleftbasket.visible=false;
    
     hooprightboulder=createSprite(460,265,10,150);
    hooprightboulder.visible=false;
    
   hooprightbehindboulder=createSprite(560,165,30,10);
   hooprightbehindboulder.visible=false;
    
    
    hooprightbasket=createSprite(495,220,30,10);
    hooprightbasket.visible=false;


  }
  function draw(){
    //background();

    if(mousePressedOver(up)){
      item.y=item.y-3;
    }
     if(mousePressedOver(down)){
      item.y=item.y+3;
    }
     if(mousePressedOver(left)){
      item.x=item.x-3;
    }
     if(mousePressedOver(right)){
      item.x=item.x+3;
    }


    if(item.isTouching(hoopleftbasket)&&gameState===1){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      name="Bubble Wrap"
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===1){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();


    }
    if(gameState===2){
      item.addImage(item2image);
      
      


      if(item.isTouching(hooprightbasket)&&gameState===2){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);


      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hoopleftbasket)&&gameState===2){
      score=score-1;
      
      
      
      item.x=280;
      item.y=220;
      buzzersound.play();


    }
    }

      if(gameState===3){
         
        
      item.addImage(item3image);
      name="Cereal Box"

      

      if(item.isTouching(hoopleftbasket)&&gameState===3){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===3){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
     if(gameState===4){
         
        
      item.addImage(item4image);
     name="CD disk"

      

      if(item.isTouching(hoopleftbasket)&&gameState===4){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===4){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    if(gameState===5){
         
        
      item.addImage(item5image);
     name="Battery"

      

      if(item.isTouching(hooprightbasket)&&gameState===5){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hoopleftbasket)&&gameState===5){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    if(gameState===6){
         
        
      item.addImage(item6image);
     name="Plants"

      

      if(item.isTouching(hooprightbasket)&&gameState===6){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hoopleftbasket)&&gameState===6){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    
    if(gameState===7){
         
        
      item.addImage(item7image);
     name="Chips Packet"

      

      if(item.isTouching(hooprightbasket)&&gameState===7){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hoopleftbasket)&&gameState===7){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    
    if(gameState===9){
         
        
      item.addImage(item9image);
     name="Pepsi Can"

      

      if(item.isTouching(hoopleftbasket)&&gameState===9){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===9){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    
    if(gameState===8){
         
        
      item.addImage(item8image);
     name="Magazine"

      

      if(item.isTouching(hoopleftbasket)&&gameState===8){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===8){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
    
    if(gameState===10){
         
        
      item.addImage(item10image);
     name="Crayons"

      

      if(item.isTouching(hoopleftbasket)&&gameState===10){
      score=score+1;
      gameState=gameState+1;
      console.log(gameState);
      item.x=280;
      item.y=220;
      tingsound.play();


    }
    if(item.isTouching(hooprightbasket)&&gameState===10){
      score=score-1;
      item.x=280;
      item.y=220;
      buzzersound.play();

      
      


    }

    }
     if(gameState===11){
         
        
      item.x=5000000000000000000000000000000000000;
     name="Game Over";


    }
    
    
    item.collide(upboulder);
    item.collide(bottomboulder);
    item.collide(rightboulder);
   item.collide(leftboulder);
    item.collide(hooprightboulder);
    item.collide( hooprightbehindboulder);
    item.collide(hooprightbasket);
    item.collide(hoopleftboulder);
    item.collide( hoopleftbehindboulder);
    item.collide(hoopleftbasket);


    drawSprites();

    fill("yellow");
    textSize(20);
    text("Score: "+score,30,320);

    fill("blue");
    textSize(20);
    text("Recyclable",20,120);

    fill("blue");
    textSize(20);
    text("Non-Recyclable",430,120);
    
    fill("red")
    text(""+name,225,120);
    textSize(20)
    
}