class Logger {
  public static instance: Logger
  public static count: number = 0

  private constructor() {
    Logger.count++
    console.log('Logger instance has been created')
  }

  public static createLogger() {
    if (!Logger.instance) Logger.instance = new Logger()
    return Logger.instance
  }

  public static newMessage(message: string) {
    if (!Logger.instance) {
      throw new Error("missing 'Logger' instance")
    }
    const date = new Date().toDateString()
    console.log(`${message} \n logged: ${date}`)
  }

  public static check() {
    if (!Logger.instance) {
      console.log('none')
    } else {
      console.log('existing')
    }
  }
}

Logger.check()
console.log(Logger.count)
// Logger.newMessage("Hello World") this will throw an error if uncommented
Logger.createLogger()
Logger.check()
Logger.newMessage("I'm trying again!")

const logger1 = Logger.createLogger()
const logger2 = Logger.createLogger()

console.log(Logger.count)
// still has one count which means that there is really only one instanece of logger when it is created
