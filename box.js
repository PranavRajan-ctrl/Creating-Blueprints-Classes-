//A CLASS IS A BLUEPRINT OF AN OBJECT
//A CLASS CONSISTS OF PROPERTIES AND FUNCTIONS 
//WE CAN CREATE ONE OR MANY SIMILAR OBJECTS USING A CLASS 
class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle; 
    //PUSH AND POP FUMCTIONS ARE USED TO CAPTURE NEW SETTINGS
    push();   
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    //AFTER POP FUNCTION IT WILL REVERT BACK TO OLD SETTINGS
  }
};
