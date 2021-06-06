class Info { console() { return console.info } }
class Warn { console() { return console.warn } }
class Error { console() { return console.error } }
class Table {
    console() {
        return console.table(
            [{ name: 'Kisanet', profession: "student", age: 28 },
            { name: 'Luwam', age: 27 }
            ]
        )
    }
}

class Strategy {
    strategy = null;
    setStrategy(stra) {
        this.strategy = stra
    };

    console(value) {
        let output = this.strategy.console();
        output(value);
    }
}

const info = new Info()
const warn = new Warn()
const err = new Error()
const table = new Table()

const display = new Strategy();
display.setStrategy(table);
display.console("Kisanet")