import Konyvview from "./KonyvView.js";

class Konyvekview{
    constructor(tomb, parent){
        parent.append(`<table><tr>
        <td>id</td>
        <td>cim</td>
        <td>szerző</td>
        <td>ár</td>
        </tr></table>`);
        this.tabla = parent.children("table:last-child");

        tomb.forEach(konyv => {
            new Konyvview(konyv, this.tabla);
        });
    }
}

export default Konyvekview