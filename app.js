class LinkedList{
    
    init(){
        this.head = null;
    };

    search( target){
        let current = this.head;
        while(current){
            if (current.data == target){
                return current;
            }
            current = current.next;
        }
        return null;
    };

    prepend( node){
        node.next = this.head;
        if (this.head){
            this.head.prev = node;
        }
        this.head = node;
        node.prev = null;
        if (node.next == null){
            this.tail = node;
        }
    };

    append(node){
        if (this.head == null){
            this.prepend(node);
            return;
        }
        let current = this.head;
        while (current.next != null){
            current = current.next;
        }
        node.prev = current;
        current.tail = null;
        this.tail = node;
        current.next = node;
    }

    delete( node){
        if (node.prev != null){
            node.prev.next = node.next;
        }
        else{
            this.head = node.next;
        }

        if (node.next != null){
            node.next.prev = node.prev;
        }
        else{
            this.tail = node.prev;
        }
    }

    pop(){
        this.delete(this.tail);
    }

    size(){
        let current = this.head;
        let counter = 0;
        while (current){
            counter++;
            current = current.next;
        }
        if(current == null){
            console.log(counter);
        }
    }
    
    listHead(){
        console.log(this.head);
    }

    listTail(){
        console.log(this.tail);
    }

    at(index){
        let current = this.head;
        let counter = 0;
        while (current){
            counter++;
            if (counter == index){
                return console.log(current);
            }
            current = current.next;
        }
        if (current == null){
            console.log("List is empty");
        }
    }

    contains(value){
        let current = this.head;
        while (current){
            if (value == current.data){
                return (console.log(true));
            }
            current = current.next;
        }
        if (current == null){
            return console.log(false);
        }
    }

    find(value){
        let current = this.head;
        while (current){
            if (value == current.data){
                return console.log(current);
            }
            current = current.next;
        }
        if (current == null){
            return console.log(null);
        }
    }

    printList(){
        let current = this.head;
        while (current){
            console.log(current.data);
            current = current.next;
        }
        if (current == null){
            console.log("none");
        }
    }

    toString(){
        let current = this.head;
        let stringToPrint = " ";

        while (current){
            stringToPrint += `(${current.data}) -> `;
            current = current.next;
        }
        if (current == null){
            stringToPrint += 'null';
        }
        console.log(stringToPrint);
    }
}


class Node{
    
    constructor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    init(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    };
}


function main(){
    const ll = new LinkedList();
    ll.printList();
    
    ll.prepend(new Node(5));
    ll.printList();

    ll.prepend(new Node(4));
    ll.prepend(new Node(3));
    ll.prepend(new Node(2));
    ll.prepend(new Node(1));
    ll.append(new Node(34));
    ll.prepend(new Node(12));
    ll.append(new Node(8));
    ll.printList();

    ll.size();

    ll.listHead();

    ll.listTail();

    ll.at(6);

    ll.pop();
    ll.pop();

    ll.printList();

    ll.contains(2);

    ll.find(2);

    ll.toString();
}


main();