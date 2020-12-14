class Queue{
    constructor(){
        this.length = 0;
        this.queue = [];
    }
    
    enqueue(item)
    {
        this.queue.push(item)
        this.length++
    }

    print(){
        console.log(this.queue)
    }

    dequeue(){
        if (this.length == 0){
            return -1
        }
        this.length--;
        return this.queue.splice(0,1)
        
    }


    peek(){
        if(this.length == 0){
            return null
        }
        return this.queue[0];
    }

    isEmpty(){
        return !this.length
    }



}


let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true
