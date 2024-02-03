export default function Form() {
  return (
    <form className="flex flex-col gap-3 flex-wrap">
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="Name">
          Nome:
        </label>
        <input
          type="text"
          name="Name"
          placeholder="Digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="email">
          E-mail:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Digite o seu email"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div>
          <input type="checkbox" />
          <label className="text-xs" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
}
