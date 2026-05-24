let user = {
    name: "Alice",
    age: 30,

    saludar: () => {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}


const saludar = (bundle) => {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    return bundle;
}

console.log(saludar(user))

