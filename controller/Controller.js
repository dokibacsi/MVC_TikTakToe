import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
  constructor() {
    const JATEKTER = $("#jatekter");
    this.MODELL = new Model();
    for (let index = 0; index < 9; index++) {
      new View(JATEKTER, index);
    }

    $(window).on("elemreKattintas", (event) => {
      this.MODELL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODELL.getErtek());
      if(this.MODELL.getVegeVaneE()){
        console.log("Örökre végeztünk!")
      }
    });
  }
}

export default Controller;
