export class Assurance
{
    private dateExpiration : string;
    private prixAchat : number;
    private typeAssurance : string;

    constructor(_prixAchat:number,_dateExpiration:string,_typeAssurance:string)
    {
       this.prixAchat = _prixAchat;
       this.dateExpiration = _dateExpiration;
       this.typeAssurance = _typeAssurance;
    }
    
    public get _dateExpiration()
    {
        return this.dateExpiration;
    }

    public get _prixAchat()
    {
        return this.prixAchat;
    }

    public set _prixAchat(_prixAchat : number)
    {
        this.prixAchat = _prixAchat;
    }

    public set _dateExpiration(_dateExpiration:string)
    {
        this.dateExpiration = _dateExpiration;
    }

    public set _typeAssurance(_typeAssurance:string)
    {
        this.typeAssurance = _typeAssurance;
    }

    public get _typeAssurance()
    {
        return this.typeAssurance;
    }

}