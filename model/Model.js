class Model {
  #lista;
  #index; 
  #lepesek;
  #allapot;
  constructor() {
    this.#allapot = "X";
    this.#lepesek = 0;
    this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  }

  setAllapot(index) {
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
    this.#lista[index] = this.#allapot;
    this.#lepesek++;
  }

  getVegeVaneE(){
    this.#visszintesGyozelem()
    if(vell.indexOf("OOO") >= 0){
        return "O nyert!"}
    if(vell.indexOf("XXX") >= 0){
        return "X nyert!"}
    if(this.#lepesek === 9){
        return "Döntetlen!"
    }
    return false
  }

  getErtek() {
    return this.#allapot;
  }

  #visszintesGyozelem(){
    let vell = "";
    for (let i = 0; i < 9; i++) {
       vell += this.#lista[i];
       if(i % 3 == 2){
        vell += "@";
       }
    }
    vell += "@";
    console.log(vell)
  }
}
export default Model;
