// botoesFiltro.jsx
import { useState } from "react";
import "./botoesFiltro.css";
import ProdutoVitrine from "../ProdutosVitrine/produtosVitrine";
import logoMassas from "../../assets/massas/lasanha_bolonhesa.png";
import logoRefeicao from "../../assets/refeições-fit-tradicional/panqueca_arrozbrocolis.png";
import logoSopa from "../../assets/sopa/ervilha.png";
import logoEmpadas from "../../assets/empadas/frango_azeitona.png";
import logoEmpadao from "../../assets/empadao/empadao.jpg";
import logoEmpadinhas from "../../assets/empadinhas/frango.jpg";
import logoQuiche from "../../assets/quiche/alho_poro.png";
import logoPizza from "../../assets/pizza/mucarela.png";
import logoSalgados from "../../assets/salgados/IMG_2669.jpg";
import logoBolos from "../../assets/bolos/laranja.webp";
import logoDonuts from "../../assets/donuts/churros.png";
import logoFestas from "../../assets/outros/pirulito-mar.png";
import logoBebida from "../../assets/bebida/pepsi.jpg";
import logoDoces from "../../assets/doces e sobremesas/arroz doce.jpg";
import logoPanqueca from "../../assets/panqueca/panqueca_carne.png";
import geladinho from "../../assets/geladinho/ninho_nutella.jpg";

function BotoesFiltro({ setFiltro, filtroAtivo, setFiltroAtivo, produtos }) {
  const categorias = [
    "Refeições (Fit, Tradicionais, Low carb)",
    "Sopas",
    "Massas",
    "Panquecas",
    "Empadas",
    "Empadão",
    "Empadinhas",
    "Quiche",
    "Pizza",
    "Salgados",
    "Bolos",
    "Donuts",
    "Doces e sobremesas",
    "Geladinho / Sacole Gourmet",
    "Festa",
    "Bebidas",
  ];

  const handleFiltro = (categoria) => {
    if (filtroAtivo === categoria) {
      setFiltro(null);
      setFiltroAtivo(null);
    } else {
      setFiltro(categoria);
      setFiltroAtivo(categoria);
    }
  };

  return (
    <div className="container-buttons-filtro">
      {categorias.map((categoria) => (
        <div key={categoria} className="categoria-container">
          <button
            className={`button-filtro ${
              filtroAtivo === categoria ? "ativo" : ""
            }`}
            onClick={() => handleFiltro(categoria)}
          >
            <img
              src={
                categoria === "Empadas"
                  ? logoEmpadas
                  : categoria === "Empadão"
                  ? logoEmpadao
                  : categoria === "Empadinhas"
                  ? logoEmpadinhas
                  : categoria === "Quiche"
                  ? logoQuiche
                  : categoria === "Pizza"
                  ? logoPizza
                  : categoria === "Salgados"
                  ? logoSalgados
                  : categoria === "Bolos"
                  ? logoBolos
                  : categoria === "Donuts"
                  ? logoDonuts
                  : categoria === "Doces e sobremesas"
                  ? logoDoces
                  : categoria === "Geladinho / Sacole Gourmet"
                  ? geladinho
                  : categoria === "Refeições (Fit, Tradicionais, Low carb)"
                  ? logoRefeicao
                  : categoria === "Sopas"
                  ? logoSopa
                  : categoria === "Massas"
                  ? logoMassas
                  : categoria === "Panquecas"
                  ? logoPanqueca
                  : categoria === "Festa"
                  ? logoFestas
                  : categoria === "Bebidas"
                  ? logoBebida
                  : ""
              }
              width={"40px"}
              alt={categoria}
            />
            {categoria}
          </button>
          {filtroAtivo === categoria && (
            <div className="produtos-categoria">
              {produtos
                .filter((produto) => produto.categoria === categoria)
                .map((produto) => (
                  <ProdutoVitrine
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    foto={produto.foto}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BotoesFiltro;
