document.addEventListener("DOMContentLoaded", function (event) {
   console.log("ES file loaded");

   let esFile = "ES file: ";
   let functionName = "Function name: ";

   console.log(`${esFile}${arrowSyntax("Arrow syntax")} [${functionName}]`);
   console.log(`${esFile}${new FileLoad().getScopedVar()}`);
   console.log(`${esFile}${FileLoad.getNumArray()}`);
   console.log(`${esFile}${new FileLoad().ternaryFunction()}`);
   console.log(`${esFile}${new FileLoad().typeOf()}`);
   console.log(`${esFile}${new FileLoad().defaultValue()}`);
   console.log(`${esFile}${new FileLoad().restParams(1,2,3,4,5,6)}`);
   console.log(`${esFile}${new FileLoad().anonymousFunctionData}`);
   console.log(`${esFile}${new FileLoad().lambdaFunction}`);
   console.log(`${esFile}${new FileLoad().getMap()}`);
   console.log(`${esFile}${new FileLoad().getWeakSet()}`);
   new FileLoad().iterateSet();
   console.log(`${esFile}${new FileLoad().getParentClass()}`);
   console.log(`${esFile}${new FileLoad().getObjectKeys()}`);
   console.log(`${esFile}${new FileLoad().getObjectValues()}`);
   console.log(`${esFile}${new FileLoad().getObjectEntires()}`);
   console.log(`${esFile}${new FileLoad(). getObjectProperties()}`);
   console.log(`${esFile}${new FileLoad().getAsyncAwaitValue()}`);
});

var arrowSyntax = (x) =>  x;

class File {
    constructor(text){
        this.text = text;
    }

    parentClass(){
        return "Parent class is File";
    }
}

class FileLoad extends File {
    constructor(){
        super("Text");
        this.anonymousFunctionData = function(){ return "anonymousfunction"};
        this. lambdaFunction = ()=>  "lamba function";
    }
    
    getScopedVar(){
        let scopedVar = "This is a var in scope";
        var outOfScope = "This is a var not in scope";
        const constVar = "This var cannot change";

        return scopedVar;
    }

    static getNumArray(){
        return [10, 20, 60];
    }

    ternaryFunction(){
        return 1 + 1 === 2? "One plus one is 2" : "One plus one is not 2";
    }

    typeOf(){
        return typeof "";
    }

    defaultValue(value = 1){
        return value;
    }
    
    //a number of params with same type
    restParams(...data){
        return data.length;
    } 

    //like Dictionaries
    getMap(){
        let map = new Map();
        map.set('name','Lee');

        return map.get('name');
    }

    iterateSet(){
        var  set = new Set(['a','b','c','d','e']);  
        var iterator = set.entries(); 

        console.log(iterator.next());
    }

    getWeakSet(){
        const weakset = new WeakSet();
        weakset.add({val:1});
        weakset.add({val:1});

        return weakset;       
    }

    getInstanceOf(){
        return this;
    }

    getParentClass(){
        return super.parentClass();
    }

    getObjectKeys(){
        let values = {"Lee": "Cant"};
        return Object.keys(values);
    }

    getObjectValues(){
        let values = {"Lee": "Cant"};
        return Object.values(values);
    }

    getObjectEntires(){
        let values = {"Lee": "Cant"};
        return Object.entries(values);
    }

    getObjectProperties(){
        return Object.getOwnPropertyNames({a : "a", b : "b"});
    }

    async getAsyncAwaitValue(){
        try{var awaitValue = await (getAwaitedValue())
            return awaitValue;
        } catch(ex){
            return "An error occured";
        }  

        //can also do catch on the line or catch entire function
    }

    //can also do try, catch, finally on promises
     getAwaitedValue(){
        return new Promise( value => {
            setTimeout(value("Async Awaited value")), 1000;
        });
    }
}


