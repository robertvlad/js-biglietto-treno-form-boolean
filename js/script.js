let genera = document.getElementById('genera');

genera.addEventListener('click', function() {

    let name_surname = document.getElementById('name_surname').value;
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    console.log(age);

    document.getElementById('name-on-ticket').innerHTML = name_surname;

    let price = km * 0.21;
    let end_price;

    let type_ticket = document.getElementById('ticket-type');
    let price_ticket = document.getElementById('price');

    if (age == 'maggiorenne') {
        end_price = price;
        type_ticket.innerHTML = 'Biglietto Standard';
        price_ticket.innerHTML = end_price.toFixed(2) + ' $';
    }
    else if (age == 'senior') {
        end_price = price * 0.6;
        type_ticket.innerHTML = 'Biglietto scontato 40%';
        price_ticket.innerHTML = end_price.toFixed(2) + ' $'; 
    }
    else{
        end_price = price * 0.8;
        type_ticket.innerHTML = 'Biglietto scontato 20%';
        price_ticket.innerHTML = end_price.toFixed(2) + ' $'; 
    }
});

