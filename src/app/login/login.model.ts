
export class User{
    private userName : string;
    private password : string;


    constructor(data: any) {
        this.userName = data.username;
        this.password = data.password;
    }

    public get _userName()
    {
        return this.userName;
    }

    public set _userName(_userName:string)
    {
        this.userName = _userName;
    }


    public get _password()
    {
        return this.password;
    }

    public set _password(_password:string)
    {
        this.password = _password;
    }
}

