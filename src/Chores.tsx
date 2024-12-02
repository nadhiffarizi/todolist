export class Chores {
    private myChores:string[] = []
    public myDoneChores: string[] = []

    constructor(chores:string[]){
        this.myChores = chores
    }

    public removeChore(index:number){
        this.myChores.splice(index, 1);
    }

    public getMyChores(){
        return this.myChores
    }

    public setMyChores(arr:string[]){
        this.myChores = [...arr]
    }

    public getMyDoneChores(){
        return this.myDoneChores
    }

    public setMyDoneChores(arr:string[]){
        this.myDoneChores = [...arr]
    }
}