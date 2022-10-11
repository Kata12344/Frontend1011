class Kmodel{
    #konyvekTomb = [];
    constructor(){

    }

    adatBe(vegpont, myCallBack){
        fetch(vegpont, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                myCallBack(this.#konyvekTomb)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}


export default Kmodel

