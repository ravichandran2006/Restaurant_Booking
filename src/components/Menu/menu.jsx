import './menu.css';

function Menu() {
    return (
        <div className="menu-page">
            <h1 className="menu-title">Our Menu</h1>


            <div class="row" className="menu-section">
                <div class="col-6">
                    <h2>Burgers</h2>
                    <ul>
                        <li>Cheeseburger <span>₹10.00</span></li>
                        <li>Bacon Burger <span>₹12.50</span></li>
                        <li>Veggie Burger <span>₹9.00</span></li>
                        <li>Chicken Burger <span>₹13.50</span></li>
                    </ul>

                </div>
                <div class="col-6"></div>
            </div>



            <section className="menu-section">
                <h2>Pizza</h2>
                <ul>
                    <li>Margherita Pizza <span>₹17.00</span></li>
                    <li>Pepperoni Pizza <span>₹19.00</span></li>
                    <li>Hawaiian Pizza <span>₹15.00</span></li>
                    <li>BBQ Chicken Pizza <span>₹16.50</span></li>
                </ul>
            </section>

            <section className="menu-section">
                <h2>Burrito</h2>
                <ul>
                    <li>Beef Burrito <span>₹14.00</span></li>
                    <li>Chicken Burrito <span>₹13.00</span></li>
                    <li>Combo Burrito <span>₹15.00</span></li>
                    <li>Shrimp Burrito <span>₹13.50</span></li>
                </ul>
            </section>

            <section className="menu-grid">
                <div>
                    <h2>Appetizers</h2>
                    <ul>
                        <li>Fruit Salad <span>₹13</span></li>
                        <li>Cocktails <span>₹12</span></li>
                        <li>Nuggets <span>₹14</span></li>
                        <li>French Fries <span>₹15</span></li>
                    </ul>
                </div>

                <div>
                    <h2>Beverages</h2>
                    <ul>
                        <li>Milk Shake <span>₹4</span></li>
                        <li>Iced Tea <span>₹3</span></li>
                        <li>Orange Juice <span>₹5</span></li>
                        <li>Lemon Tea <span>₹3</span></li>
                    </ul>
                </div>

                <div>
                    <h2>Desserts</h2>
                    <ul>
                        <li>Tiramisu <span>₹5.50</span></li>
                        <li>Cheesecake <span>₹6.00</span></li>
                        <li>Red Velvet Cake <span>₹6.00</span></li>
                    </ul>
                </div>

                <div>
                    <h2>Entrees</h2>
                    <ul>
                        <li>French Fries with Aoli <span>₹3.50</span></li>
                        <li>Mashed Potatoes <span>₹4.50</span></li>
                        <li>House Baked Roll <span>₹1.50</span></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Menu;
