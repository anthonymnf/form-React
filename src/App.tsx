import Form from "./components/Form";

function App() {
  return (
    <div className="bg-cyan-600 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Inscreva-se</h1>
      <p className="text-white ">
        Assine nossa Newsletter e mantenha-se informado
      </p>
      <div className="w-96 bg-stone-200 mt-4 px-4 py-5 rounded-lg shadow-lg">
        <Form />
      </div>
      <p className="text-xs text-center text-slate-100 w-96 mt-2">
        Ao se inscrever, você passará a receber os nossos e-mails com as
        melhores dicas, novidades e ofertas.
      </p>
    </div>
  );
}

export default App;
