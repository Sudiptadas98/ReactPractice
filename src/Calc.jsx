

function Calc() {



    function add(a, b) {
        let add = a + b;
        return add;
    }

    function sub(a, b) {
        let sub = a - b;
        return sub;
    }

    function mult(a, b) {
        let mult = a * b;
        return mult;
    }

    function div(a, b) {
        let div = a / b;
        div = div.toFixed(2);
        return div;
    }



    return (
        <ul>
            <li>{add(5, 3)}</li>
            <li>{sub(5, 2)}</li>
            <li>{mult(5, 2)}</li>
            <li>{div(5, 2)}</li>
        </ul>
    );
}

export default Calc;