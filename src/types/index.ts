export {}

function Person(this: Window,name:string){
    this.name = name
}

window.Person = Person

window.Person("aa")