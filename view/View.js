class View {
  #szuloElem;
  #index;
  constructor(szuloElem, index) {
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.kattinthato = true;
    this.#letrehoz(this.#szuloElem);
    this.elem = $("#jatekter > .negyzet:last-child");
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
        if(this.kattinthato){this.#sajatEsemenyKezelo("elemreKattintas"); this.kattinthato = false;}
        
    });
  }

  #letrehoz() {
    let txt = "";
    txt += "<div class='negyzet'><p></p></div>";
    this.#szuloElem.append(txt);
  }

  setErtek(jel) {
    this.pElem.html(jel);
  }

  getIndex(){
    return this.#index;
  }

  #sajatEsemenyKezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {detail:this});
    window.dispatchEvent(esemenyem);
  }
}

export default View;