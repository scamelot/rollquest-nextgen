export default class Character {
    constructor(blob) {
      this.character = blob['character'][0]
  
      this.name = this.character['character_name']
      this.race = this.character['race']
      this.class = Object.keys(this.character['classes'])[0]

      this.className = this.class.split('')
      this.className[0] = this.className[0].toUpperCase()
      this.className = this.className.join('')
      //multiclass = array of classes
      this.level = this.character['classes'][this.class]['class-level']
  
      console.log(this.class)
      this.ac = this.character['ac']
      this.hp = this.character['hp']
    }

    sayHi() {
        return (<div>
            <h2 key={`${this.name}`}>{`hi ${this.name}`}</h2>
            </div>)
      }

    //combat

    //levelling UP

    //heal

    //damage
    //etc...
}