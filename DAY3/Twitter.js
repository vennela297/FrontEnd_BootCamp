class twitter {
    #password
    #myTweets=[]
    constructor(name, password) {
        this.name = name
        this.#password = this.encryptMe(password)
      }

      encryptMe(str) {
        
        return (this.#password);
      }

      checkPassword(candidate) {
        return this.encryptMe(candidate) == this.#password
      }

      set tweet(data) {
        this.#myTweets.push(data)
      }
      get tweets() {
        return [...this.#myTweets]
      }
     
    
    
    
}

let user1=new twitter("Vennela",123)

console.log(user1.checkPassword(123))

user1.tweet="first tweet"
user1.tweet="second tweet"
user1.tweet="third tweet"

console.log(user1.tweets);