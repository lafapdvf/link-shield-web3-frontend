export default function Home() {
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
                LinkShield
              </h1>
              <p className="lead">Proteja seus links. Lucre com eles.</p>
              <hr />
              <p>
                Cole a sua URL abaixo, defina a taxa por clique e conecte sua
                carteira para proteger seu link com a tecnologia blockchain.
              </p>
              <div className="form-floating mb-3">
                <input type="text" id="url" className="form-control" />
                <label htmlFor="url">Link:</label>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input type="number" id="fee" className="form-control" />
                    <label htmlFor="fee">Taxa por clique (wei):</label>
                  </div>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-primary w-100 h-100">
                    <img src="/metamask.svg" width={32} className="me-2" />
                    Conectar e Criar Link
                  </button>
                </div>
              </div>
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
