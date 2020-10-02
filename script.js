class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        setInterval (() => {
            ++this.age;
        }, 1000)
    } 
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function generateInput() {
    let names = ["Arman", "Eric", "Vigen", "Gor", "Karen", "Arthur", "George", "Areg", "Hayk", "Martiros"]
    let arr = []

    for (let i = 0; i < 4; i++) {
        const randomIndex = getRandomInt(0, names.length)
        const randomAge = getRandomInt(10, 40)
        const person = new Person(names[randomIndex], randomAge)
    
        names.splice(randomIndex, 1)
    
        arr.push(person)
    }

    return arr
}

function setupTimerForSequence(arr) {
    let time = setInterval( () => {
        for (element of arr) {
            if (element.age >= 40) { 
                arr.splice(arr.indexOf(element),1)
            }
            if(arr.length === 0) {clearInterval(time)}
            console.table([element])
        }
        console.log("------------------------------------")
    }, 2000)
}

let arr = generateInput()
setupTimerForSequence(arr)
