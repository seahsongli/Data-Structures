class LinkedList {
    constructor(head = null, tail = null, length = 0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }

    append(value){
        this.length++;
        let newNode = new Node(value);
        if (this.tail){
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode, this.head;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
    }

    prepend(value){
        this.length++;
        let newNode = new Node(value);
        if(this.head){
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            return newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }

    }

    print(){
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    
    size(){
        console.log(`Current Size of Linked List = ${this.length}`);
        return this.length;
    }

    getHead(){
        console.log(`Value of head of Linked List = ${this.head.value}`);
        return this.head;
    }

    getTail(){
        console.log(`Value of tail of Linked List = ${this.tail.value}`);
        return this.tail;
    }

    at(indexToFind){
        let currentIndex = 0;
        let currentNode = this.head;
        while(currentNode){
            if(currentIndex == indexToFind){
                return currentNode;
            }
            else{
                currentIndex++;
                currentNode = currentNode.next;
            }
        }
    }

    pop(){
        if(this.tail){
            const tailNode = this.tail;
            let prev = this.head;
            let curr = this.head.next;
            while(curr.next){
                prev = curr;
                curr = curr.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return tailNode;
        }
        return undefined;
    }

    contains(valueToFind){
        let currentNode = this.head;
        while(currentNode){
            if (currentNode.value == valueToFind) {
                console.log("Value is present!");
                return true;
            }
            else currentNode = currentNode.next;
        }
        console.log("Value is not present!");
        return false;
    }

    find(valueToFind) {
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode){
            if (currentNode.value == valueToFind) {
                console.log(`Value is present at index ${currentIndex}!`);
                return currentIndex;
            }
            else {
                currentNode = currentNode.next;
                currentIndex+=1;
            }
        console.log("Value is not present!");
        return false;
        }
    }

    toString(){
        let current = this.head;
        let linkedListString = "";
        while(current) {
            linkedListString+= `${current.value} -> `;
            current = current.next;
        }
        linkedListString+= "null";
        console.log(linkedListString);
        return linkedListString;
    }

    insertAt(value,indexToInsert){
        if(indexToInsert >= this.length){
            throw new Error ("Index to insert is out of bound!")
        }
        let prev = null;
        let curr = this.head;
        let newNode = new Node(value);
        for(let i=0;i<indexToInsert;i++){
            prev = curr;
            curr = curr.next;
        }
        prev.next = newNode;
        newNode.next = curr;
        this.length++;
        return newNode;
    }

    removeAt(indexToRemove){
        if(indexToRemove >= this.length){
            throw new Error ("Index to remove is out of bound!")
        }
        let prev = null;
        let curr = this.head;
        for(let i=0;i<indexToRemove;i++){
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.length--;
        return curr;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList();
const head = linkedList.head;

console.log("Building Linked List...")
linkedList.append(7);
linkedList.append(8);
linkedList.prepend(6);
linkedList.append(10);
linkedList.append(11);

console.log("Linked List completed, printing details..");
linkedList.print();
linkedList.size();
linkedList.getHead()
linkedList.getTail();
const secondNode = linkedList.at(1);
console.log(`The second node of the list = ${secondNode}`);
console.log("Printing details completed!")

console.log("Removing last Element..");
let removedElement = linkedList.pop();
console.log(removedElement);
linkedList.size();
linkedList.print();
console.log("Last Element removed!");

linkedList.contains(8);
linkedList.find(6);
linkedList.toString();
linkedList.insertAt(9,3);
linkedList.print();
console.log("Removing...")
linkedList.removeAt(3);
linkedList.toString();
