document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;

    const div = document.createElement("div");
    body.appendChild(div);

    const h1 = document.createElement("h1");
    h1.textContent="The input min and max attributes";
    let br = document.createElement("br");
    const p = document.createElement("p");
    p.textContent="The min and max attributes specify the minimum and maximum values for an input element.";
    const form = document.createElement("form");
    form.action = "/action_page.php";

    div.append(h1, br, p, br.cloneNode(), form);

    const labeldatemax = document.createElement("label");
    labeldatemax.for = "datemax";
    labeldatemax.textContent="Enter a date before 1980-01-01: ";
    const inputdatemax = document.createElement("input");
    inputdatemax.type = "date";
    inputdatemax.id = "datemax";
    inputdatemax.name = "datemax";
    inputdatemax.max = "1979-12-31";

    const labeldatemin = document.createElement("label");
    labeldatemin.for = "datemin";
    labeldatemin.textContent="Enter a date after 200-01-01: ";
    const inputdatemin = document.createElement("input");
    inputdatemin.type = "date";
    inputdatemin.id = "datemin";
    inputdatemin.name = "datemin";
    inputdatemin.min = "2000-01-02";

    const labelquantity = document.createElement("label");
    labelquantity.for = "quantity";
    labelquantity.textContent="Quantity (between 1 and 5): ";
    const inputquantity = document.createElement("input");
    inputquantity.type = "number";
    inputquantity.id = "quantity";
    inputquantity.name = "quantity";
    inputquantity.min = "1";
    inputquantity.max = "5";

    const inputsubmit = document.createElement("input");
    inputsubmit.type = "submit";
    inputsubmit.value = "Submit";
    
    form.append(labeldatemax, inputdatemax, br.cloneNode(), br.cloneNode(), labeldatemin, inputdatemin, br.cloneNode(), br.cloneNode(), labelquantity, inputquantity, br.cloneNode(), br.cloneNode(), inputsubmit);

    });