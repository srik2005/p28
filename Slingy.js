class Slingy{
constructor(A,B){



    var options = {
        bodyA : A,
        pointB : B,
        length : 10,
        stiffness : 0.05,
        
        
        
        
         }
         
        this.sh = Matter.Constraint.create(options)
        World.add (world,this.sh)





}
display(){
    console.log(this.sh.pointB.x)
   
   
   
   
   if(this.sh.bodyA!= null){
   
    line(this.sh.bodyA.position.x,this.sh.bodyA.position.y,this.sh.pointB.x,this.sh.pointB.y);
   }




}

 free(){

this.sh.bodyA = null




 }






}
//func