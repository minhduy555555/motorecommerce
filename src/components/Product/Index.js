import { FaShoppingCart } from "react-icons/fa";

function Prodcuct() {
    return (  
        <li className="home_product_items" >
            <img className="home_img" src="https://s3-alpha-sig.figma.com/img/0de4/1b79/13ce515c23cc9e47b8a1ddaef836a8d7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TIt4G~fD~FjkonqH1i03hI9E-Qs0C85e~wUjmq2Ubv9VoJzLsZ5i559vgVFNjBWz8ZUVRqAG0A33ixdonidJhRrQRLfwxeTz1cS-duvnNQ3iVieSHasqB3~Pv-v7dIIG2OyvbcqRbQdxi55I8iBzMhyWkbFXJXU1LBWpTCLtApVHpJWgAGfx197duEGSgTGipMFfdoh21nnGTJCLBwtyLtsH6im9R6q-Q-SqE~dk4DUyUK9Op~7Wv99iAp-JUXvE-jgPz88b9F1tyBuRRYNLST~Tm5pW8W91cbVUkEI~A49571OOAuXS8y~JDuVA5RKkYoBzitCQjAwONu5PyqttcQ__" />
            <h1 className="home_name" > Benelli 302s </h1>
            <p className="home_price" > Từ 118.000.000 </p>
            <p className="home_priceSale" > Từ 106.200.000 </p>
            <FaShoppingCart className="home_icon_cart" />
            <span className="home_discount" >30%</span>
        </li>
    );
}

export default Prodcuct;