import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";
import TermosDialog from "./TermosDialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../@/components/ui/alert";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<User | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setErrors(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      setShowAlert(false);
      return;
    }
    setName("");
    setEmail("");
    setAgree(false);
    setShowAlert(true);
  };

  return (
    <form className="flex flex-col gap-3 flex-wrap" onSubmit={handleSubmit}>
      {showAlert && (
        <Alert className="bg-green-400">
          <AlertTitle className="flex gap-1 items-center">
            <CheckCircledIcon className="h-4 w-4" /> Bem-vindo!
          </AlertTitle>
          <AlertDescription>Inscrição concluida com sucesso!!</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="Name">
          Nome:
        </label>
        <input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          type="text"
          name="Name"
          placeholder="Digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail:
        </label>
        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          name="email"
          placeholder="Digite o seu email"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <TermosDialog />
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="accent-cyan-600"
            checked={agree}
            onChange={(ev) => setAgree(ev.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-500 hover:shadow-xl font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
}
