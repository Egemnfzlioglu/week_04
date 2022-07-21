    import React from "react";
    import { useActions, useAppState } from "../../hooks";
    import { AddToCart } from "../add-to-cart";

    function Cart() {
    const state = useAppState();
    const { getCartCount, getTotalPrice, removeItemFromCart } = useActions();

    const renderItem = (item) => {
        return (
        <div key={item.id} className="cart-item">
            <img src={item.image_url} />
            <div>
            <p>{item.name}</p>
            <p>Fiyat: {item.price.toFixed(2)}</p>
            <AddToCart item={item} />
            </div>
            <div className="remove-cart">
            <button
                onClick={() => removeItemFromCart(item)}
                type="button"
                className="btn-close"
            ></button>
            </div>
        </div>
        );
    };

    return (
        <>
        <div className=" container col-md-8" style={{ marginBottom: "10%" }}>
            <div className="card mb-5">
            <div className=" card-body ">
                <h2
                className="container me-auto text-secondary"
                style={{
                    textAlign: "center",
                    fontSize: "2.5em",
                    fontWeight: "bold",
                    margin: "1% 0",
                    backgroundColor: "#f1f1f1",
                }}
                >
                SEPET
                </h2>
<div className="container">

                {Object.keys(state.cart).map((x) => renderItem(state.cart[x]) )}
</div>
            </div>
            </div>
            <div className=" container cart-footer mt-5 me-auto fixed-bottom ">
            <div className="row mb-1">
                <div
                className="card  bg-success bg-gradient"
                style={{ borderRadius: "25%" }}
                >
                <div
                    className="cart-footer-right "
                    style={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                    color: "#ffffcc",
                    padding: ".5%",
                    }}
                >
                    <p>Toplam Tutar: {getTotalPrice()}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
    }

    export default Cart;
