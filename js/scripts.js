$(document).ready(function () {

    'use strict';

    for (let i = 0; i < productos.length; i++) {

        $('#productos').append(
            '<div class="col-6 col-md-4">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            '<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡El carrito de compras está vacío!'
        }
    });
});

//whatsapp

$('#logowpp').venomButton({
    phone: '+5491133583326',
    popupMessage: 'Hola, ¿Cómo puedo ayudarte?',
    message: "Hola, tengo una consulta...",
    position:"left",
    size: '50px',
    showPopup: true,
    linkButton: true,
    showOnIE: false,
    headerTitle: 'Bienvenido!',
    buttonImage: '<img src="vendors/jquery.whatsapp/whatsapp.svg"/>'
});


$(function() {
    $("#scroll-to-top").illBeBack();
});

