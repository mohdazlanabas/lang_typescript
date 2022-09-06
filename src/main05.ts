// CLASSES
// PRIVATE, PUBLIC, PROTECTED
// READONLY
// STATIC PROPERTIES

class User5 {
    public firstName: String;
    private lastName: String;
    readonly unchangeableName: string;
    static readonly maxAge = 50;
    constructor(firstName: string, lastName: string)  {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    } 
    changeUnchangeableName(): void {
       // this.unchangeableName = 'foo';
    }

    getFullName(): String {
        return this.firstName + " " + this.lastName 
    }
}

// INHERITANCE 
class Admin extends User5 {
    private editor: string

    setEditor(editor: string): void{
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const user5 = new User5("William", "lessons");
