class UniqueArray{

    constructor(){
        this.dictPart = {}
        this.index = 0
        this.orderdArray = []
    }

    add(item)
    {
        if (this.dictPart[item] == null)
        {
            this.orderdArray.push(item)
            this.dictPart[item] = this.index
            this.index ++
        }
    }

    showAll(){
        for (let item in this.dictPart){
            console.log(item)
        }
    }

    exists(item){
        if (this.dictPart[item] == null){
            return false
        }
        return true
    }

    get(index){
        if (index <= this.index){
            return this.orderdArray[index]
        }
        return -1
    }

}



const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toyyy")//returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
uniqueStuff.showAll()
console.log(uniqueStuff.get(2)) //prints "hydrogen"
