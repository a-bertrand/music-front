export default class Input {
    constructor(className, fonta, 
                handleChange, name, 
                placeholder, required = false, 
                type , title , value ) {
        this.className      =  className;
        this.fonta          =  fonta;
        this.handleChange   =  handleChange;
        this.name           =  name;
        this.placeholder    =  placeholder;
        this.required       =  required;
        this.type           =  type;
        this.title          =  title;
        this.value          =  value;
    }
}