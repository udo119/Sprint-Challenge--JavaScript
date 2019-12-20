// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(object){
      this.length = object.length;
      this.width = object.width;
      this.height = object.height;
    }
    volume(){
    return length * width * height
  }

  surfaceArea(){
    return 2 * (length * width + length * height + width * height);
  }
}

let cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.