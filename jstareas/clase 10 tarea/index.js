let soyUnDiv = document.getElementById("miDiv");
        let botonElement = document.getElementById("miBoton");

        soyUnDiv.addEventListener("mousedown", (elMouse) => {
            let elMouse = new MouseEvent("custommousedown", {
                bubbles: true,
                cancelable: true,
                view: window
            });
            
            
            elMouse.mouseSource = "mouse";

            
            this.dispatchEvent(elMouse);
        });

        esUnDiv.addEventListener("custommousedown", (event) => {
            console.log(`Presionaste el DIV con el ${event.mouseSource}`);
        });

        botonElement.addEventListener("mousedown", (event) => {
            event.stopPropagation();
            console.log(`Presionaste el DIV con el ${event.mouseSource}`);
        });