//factory 

class Regular {
    constructor() {
        this.range = [50, 100];
        this.age = 1;
    }
}

class Energy {
    constructor() {
        this.range = [5, 40];
        this.age = 10;
    }
}

class Factory {
    createBulb(type) {
        let bulb;

        if (type.toLowerCase() === "regular") {
            bulb = new Regular();
        } else if (type.toLowerCase() === "energy") {
            bulb = new Energy();
        }

        return bulb;
    }
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy"));

//todo - iterate bulbs factory info using forEach or for loop

bulbs.forEach(e => {
    console.log(e);
});