﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    showQuantiyCart();
});
let showQuantiyCart = () => {
    $.ajax({
        url: "/customer/cart/SoLuong",
        success: function (data) {
            //hien thi so luong san pham trong gio trong _FrontEnd.cshtml
            $(".showcart").text(data.qty);
        }
    });
}
$(document).on("click", ".addtocart", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-productid");
    console.log(id);
    $.ajax({
        url: "/customer/cart/addtocartapi",
        data: { "productId": id },
        success: function (data) {
            Swal.fire({
                title: "Product added to cart",
                text: "You clicked the button!",
                icon: "success"
            });
            $(".showcart").text(data.qty);
        }
    });
});