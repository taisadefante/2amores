import { useContext, useState } from "react";
import BotoesFiltro from "../components/BotoesFiltro/botoesFiltro";
import Navbar from "../components/Navbar/navbar";
import produtos from "../dados";
import "./style.css";
import { CartContext } from "../contexts/cart-context";
import Footer from "../components/footer/footer";
import uberentrega from "../assets/uberentrega.jpg";
import ifood from "../assets/ifood.png";

import picpayLogo from "../assets/picpay.png";
import mercadoPagoLogo from "../assets/mercadopago.jpeg";
import pixLogo from "../assets/pix.png";
import cartao1 from "../assets/cartao1.jpg";
import cartao from "../assets/cartão.jpg";

export default function Home() {
  const [filtro, setFiltro] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState(null);
  const { cartItems } = useContext(CartContext);

  const cartQuantidadeItems = cartItems.reduce(
    (total, produto) => total + produto.qtd,
    0
  );

  return (
    <>
      <Navbar itemsCount={cartQuantidadeItems} />
      <div className="home-container">
        <BotoesFiltro
          setFiltro={setFiltro}
          filtroAtivo={filtroAtivo}
          setFiltroAtivo={setFiltroAtivo}
          produtos={produtos}
        />
        <div className="congelamento">
          <p>
            Todos os nossos produtos são cuidadosamente congelados para garantir
            frescor e qualidade em cada refeição.
          </p>
        </div>
        <section className="payment-section">
          <h2>Pagamento</h2>
          <div className="payment-methods">
            <img src={picpayLogo} alt="PicPay" />
            <img src={mercadoPagoLogo} alt="Mercado Pago" />
            <img src={pixLogo} alt="Pix" />
            <img src={cartao1} alt="Pix" />
          </div>
          <img src={cartao} alt="cartão" width={"300px"} />
        </section>
        <section className="shipping-section">
          <h2>Entrega</h2>
          <div className="payment-methods">
            <img src={uberentrega} />
            <img src={ifood} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
