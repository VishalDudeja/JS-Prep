class FancyLogger {
    constructor(){

        if(FancyLogger.instance === null ){
            this.Logs = []
            FancyLogger.instance = this
        
        }
         
       return FancyLogger.instance
    }

    log(message){
        this.Logs.push(message)
        console.log("Message is", message)
    }

    logCount(){
        console.log("Log count is", this.Logs.length)
    }
}


let firstLogger = new FancyLogger()

console.log(firstLogger)
/* 
firstLogger.logCount()
firstLogger.log("First Log Message")
firstLogger.logCount() */

/* let secondLogger = new FancyLogger()

console.log("secondLogger", secondLogger) */
