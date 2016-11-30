// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs).
// The key will always be a string.
class MyMap<T> {
    private map: {[key: string]: T} = {};
    setItem(key: string, item: T) {
        return this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

// The map should be usable like shown below:
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Robbie");
stringMap.setItem('age', "27");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();