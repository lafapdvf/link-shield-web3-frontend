"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getLink, payLink } from "@/services/Web3Service";

export default function Home() {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState({ fee: "0" });

  const params = useParams();

  useEffect(() => {
    setMessage("Buscando dados do link...");
    getLink(params.linkId)
      .then((link) => {
        setMessage("");
        if (link.url) {
          window.location.href = link.url;
        } else {
          setLink(link);
        }
      })
      .catch((err) => setMessage(err.message));
  }, []);

  function btnAccessClick() {
    setMessage("Pagando pelo acesso ao link...");
    payLink(params.linkId, link.fee)
      .then(() => {
        setMessage("Pagamento realizado! Redirecionando...");
        return getLink(params.linkId);
      })
      .then((link) => (window.location.href = link.url))
      .catch((err) => setMessage(err.message));
  }

  return (
    <>
      <main>
        <div className="container px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-6">
              <img
                src="https://fastcompanybrasil.com/wp-content/uploads/2022/10/Web3.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Hero Image"
                width="700"
                height="500"
              />
            </div>
            <div className="col-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Link Protegido
              </h1>
              <p className="lead">Este link está protegido pela LinkShield.</p>
              <hr />
              <p>
                Para acessar o conteúdo original, conecte sua carteira abaixo e
                confirme o pagamento da taxa de
                <strong> {link.fee} wei</strong>.
              </p>
              <div className="row mb-3">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-primary w-100 h-100"
                    onClick={btnAccessClick}
                  >
                    <img src="/metamask.svg" width={32} className="me-2" />
                    Pagar e Acessar Link
                  </button>
                </div>
              </div>
              {message ? (
                <div
                  className="alert alert-success p-3 col-12 mt-3"
                  role="alert"
                >
                  {message}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-4">
        <p className="mb-0">
          ©{new Date().getFullYear()} LPVF Serviços de Marketing e TI - Todos os
          direitos reservados.
        </p>
      </footer>
    </>
  );
}
