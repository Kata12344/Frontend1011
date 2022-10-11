import Kmodel from "../Model/KModel.js";
import Konyvekview from "../View/KonyvekView.js"


class Kcontroller{
    constructor(){
        console.log("halo")
        new Konyvekview();
        const konyvmodel = new Kmodel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);
    }

    konyvAdatok(tomb){
        console.log(tomb)
    }
}

export default Kcontroller