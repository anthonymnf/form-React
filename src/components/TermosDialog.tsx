import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export default function TermosDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm underline mb-2 text-left">
        Leia os termos
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>TERMOS DE USO PARA INSCRIÇÃO NA NEWSLETTER</DialogTitle>
          <DialogDescription>
            <div>
              <p>
                Bem-vindo à nossa newsletter! Ao se inscrever, você concorda com
                os seguintes termos de uso:
              </p>

              <ol>
                <li>
                  <strong>Aceitação dos Termos:</strong> Ao se inscrever em
                  nossa newsletter, você concorda com todos os termos e
                  condições estabelecidos neste documento. Se não concordar com
                  algum aspecto destes termos, por favor, não prossiga com a
                  inscrição.
                </li>

                <li>
                  <strong>Uso Responsável:</strong> A newsletter destina-se
                  apenas a fins informativos e promocionais relacionados aos
                  nossos produtos, serviços e conteúdo. Você concorda em usar as
                  informações recebidas de forma ética e responsável.
                </li>

                <li>
                  <strong>Privacidade e Segurança:</strong> Comprometemo-nos a
                  proteger sua privacidade. Suas informações pessoais serão
                  tratadas de acordo com nossa política de privacidade, a qual
                  pode ser revisada em
                  <a href="#">link para a política de privacidade</a>.
                </li>

                <li>
                  <strong>Cancelamento de Inscrição:</strong> Você pode cancelar
                  sua inscrição a qualquer momento, utilizando o link de
                  cancelamento fornecido no rodapé de cada newsletter. Após o
                  cancelamento, você deixará de receber futuras comunicações.
                </li>

                <li>
                  <strong>Atualização de Informações:</strong> É
                  responsabilidade do inscrito garantir que as informações de
                  contato fornecidas estejam corretas e atualizadas. Manteremos
                  suas informações de acordo com nossa política de privacidade.
                </li>

                <li>
                  <strong>Propriedade Intelectual:</strong> Todo o conteúdo da
                  newsletter, incluindo textos, imagens e design, é protegido
                  por direitos autorais e outras leis de propriedade
                  intelectual. Não é permitido reproduzir, distribuir ou
                  utilizar o conteúdo sem autorização prévia por escrito.
                </li>

                <li>
                  <strong>Alterações nos Termos:</strong> Reservamo-nos o
                  direito de modificar estes termos a qualquer momento.
                  Notificaremos os inscritos sobre alterações significativas,
                  mas é responsabilidade de cada usuário revisar periodicamente
                  os termos de uso.
                </li>

                <li>
                  <strong>Comunicações:</strong> Ao se inscrever, você concorda
                  em receber comunicações periódicas por e-mail relacionadas à
                  newsletter. Isso pode incluir atualizações, ofertas especiais
                  e informações relevantes.
                </li>

                <li>
                  <strong>Jurisdição e Resolução de Conflitos:</strong> Estes
                  termos são regidos pelas leis vigentes no Brasil. Qualquer
                  disputa decorrente ou relacionada a estes termos será
                  resolvida por meio de negociações de boa-fé.
                </li>
              </ol>

              <p>
                Ao continuar com a inscrição, você confirma que leu, compreendeu
                e concorda com estes termos de uso. Obrigado por se juntar à
                nossa newsletter!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
