export class Frutas{
    private nombre : string;
        
    public constructor (pNombre:string){
      this.nombre = pNombre;
    }
    
    public setNombre(pNombre:string):void{
            this.nombre = pNombre;
    }
    public getNombre():string{
            return this.nombre;
    }
}