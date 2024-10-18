export class Book {
    /*private _id :number;
    private _title: string;
    private _author:string;
    private _price:number;
    constructor(id: number, title:string, author:string, price:number){
        this._id=id;
        this._author=author;
        this._price=price;
        this._title=title;
    }*/
   constructor(private _id :number,
    private _title: string,
    private _author:string,
    private _price:number){

    }
    public get price():number{
        return this._price;
    }
    public set price(v:number){
        this._price=v;}
    public get author():string{
        return this._author;
    }
    public set author(s:string){
        this._author=s;
    }
    public get title():string{
        return this._title;
    }
    public set title(t:string){
        this._title=t;
    }
    public get id():number{
        return this._id;
    }
    public set id(v:number){
        this._id=v;}

}
