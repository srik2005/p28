class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("vaccine.jpg");
  }

  display() {
    super.display();
  }
}
