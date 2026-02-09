const person = {
    name: "Mahbuba",
    id: 121,
    address: "Bangladesh",
    annoy: function () {
        console.log("brothers do annoy sisters for no reason")
    },
    car: {
        brand: "lamborgini",
        founded: 1963,
        founder: "Ferruccio Lamborghini",
        country: "Italy",
        siblings: [{ name: "Mamun", age: 18 }, { name: 'Mahbub', age: 28 }, { name: 'Shathy', age: 32 }],
        manufacture: {
            factory: ['Sant’Agata Bolognese', 'Italy'],
            "Parent company": "Volkswagen Group"
        }
    }
}
console.log(person.car);
person.annoy();