export default class Input {
    className       : string;
    fonta           : string
    handleChange    : Function;
    placeholder     : string;
    name            : string;
    required        : boolean;
    type            : string;
    title           : string;
    value           : string;

    constructor(className : string = " ", fonta : string = " ", 
                handleChange : Function, name : string, 
                placeholder : string, required : boolean = false, 
                type : string, title : string, value : string) {
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