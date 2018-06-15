export class Recipe {

  constructor(private name: string, private description: string, private imagePath: string){

  }

  getName() : string{
    return this.name
  }

  getDescription() : string{
    return this.description
  }

  getImagePath() : string{
    return this.imagePath
  }

}