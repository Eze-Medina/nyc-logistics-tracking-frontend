import { useEffect, useRef, useState } from 'react';

import type { ClientFilter, ClientSummaryDto } from '../../../../../../interfaces';

import { InputSelect, InputText } from '../../../../../../shared/components/input';

import { useForm } from '../../../../../../shared/hooks/useForm';
import { getClientList } from '../../../../helpers/get-client-list';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import style from './clientModal.module.css'

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  role: string
}

const clientFilter: ClientFilter = {
  id_number: '',
  id_type: '',
  name: '',
  email: '',
  phone: '',
};

const id_types = ['DNI', 'CUIL', 'CUIT']

export const ClientModal = (data: Props) => {

  const modalElement = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(1)
  const [index, setIndex] = useState<number | undefined>()
  const [list, setList] = useState<ClientSummaryDto[]>([]);
  const [client, setClient] = useState<ClientSummaryDto | null>();

  const { formState, onInputChange, onResetForm } = useForm(clientFilter);

  const closeModal = () => {
    data.setModal(false);
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      modalElement.current &&
      !modalElement.current.contains(event.target as Node)
    ) {
      closeModal();
    }
  };

  const loadClients = async (pageNumber: number) => {
    const data = await getClientList({
      filter: formState,
      page: pageNumber,
    });

    setList(data);
  };

  const handleSearch = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setClient(null)
    setIndex(undefined)

    if (page === 1) {
      await loadClients(1);
      return;
    }

    setPage(1);
  };

  useEffect(() => {
    loadClients(page);
  }, [page]);

  const handleReset = () => {
    onResetForm()
    setPage(1)
    setClient(null)
    setIndex(undefined)
  }

  const nextPage = () => {
    setPage(page + 1)
    setClient(null)
    setIndex(undefined)
  }

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1)
    setClient(null)
    setIndex(undefined)
  }

  const onSelectClient = (client: ClientSummaryDto, idx: number) => {

    if (idx == index) {
      setClient(null)
      setIndex(undefined)
      return
    }
    setClient(client)
    setIndex(idx)

    console.log(client)
  }

  const updateClient = () => {
    if (client) closeModal();
  }

  return (
    <div
      className={style.container}
      onClick={handleContainerClick}>
      <div className={style.modal} ref={modalElement}>
        <div className={style.modal_header}>
          <p className={style.modal_header_p} >Modificar {data.role.toLocaleLowerCase()}</p>
          <button
            className={style.modal_header_action}
            type="button"
            onClick={closeModal}
          > <X />
          </button>
        </div>
        <form className={style.modal_form} onSubmit={handleSearch} autoComplete='off'>
          <fieldset className={style.modal_form_fieldset}>
            <legend>Datos cliente</legend>
            <InputText type="text" labelName="Nombre" name="name" value={formState.name} placeholder="Nombre del cliente" onInputChange={onInputChange} />
            <InputSelect labelName="Identificación" name="id_type" value={formState.id_type} list={id_types} onInputChange={onInputChange} />
            <InputText type="text" labelName="DNI/CUIL/CUIT" name="id_number" value={formState.id_number} placeholder="Número de identificación" onInputChange={onInputChange} />
            <InputText type="text" labelName="Email" name="email" value={formState.email} placeholder="correo electronico" onInputChange={onInputChange} />
            <InputText type="number" labelName="Telefono" name="phone" value={formState.phone} placeholder="Número de telefono" onInputChange={onInputChange} />
          </fieldset>
          <div className={style.form_modal_actions}>
            <button className={style.modal_action} type='button' onClick={handleReset}>
              Limpiar
            </button>
            <button className={style.modal_action}>
              Buscar
            </button>
          </div>
        </form>
        <section className={style.clients}>
          <table className={style.table}>
            <thead>
              <tr className={style.table_tr}>
                <th className={style.table_th}>Nombre</th>
                <th className={style.table_th}>Identificacion</th>
                <th className={style.table_th}>DNI/CUIL/CUIT</th>
                <th className={style.table_th}>Email</th>
                <th className={style.table_th}>Telefono</th>
              </tr>
            </thead>

            <tbody>
              {list.map((client, idx) => (
                <tr key={idx} className={`${style.table_tr} ${(index == idx) ? style.client_acitve : ''}`} onClick={() => onSelectClient(client, idx)}>
                  <td className={style.table_td}> {client.name} </td>
                  <td className={style.table_td}> {client.id_type} </td>
                  <td className={style.table_td}> {client.id_number} </td>
                  <td className={style.table_td}> {client.email} </td>
                  <td className={style.table_td}> {client.phone} </td>
                </tr>
              ))}
              <tr className={style.table_move}>
                <td>Cantidad de resultados</td>
                <td className={style.table_footer}>
                  <div className={style.table_actions}>
                    <button className={style.action_prev} onClick={prevPage}>
                      <ChevronLeft color='#c0c0c0' />
                    </button>
                    <span className={style.action_span}>{page}</span>
                    <button className={style.action_next} onClick={nextPage}>
                      <ChevronRight color='#c0c0c0' />
                    </button>
                  </div>
                  <button
                    className={`${client ? style.modal_action : style.client_disable}`}
                    onClick={updateClient}
                  >Actualizar Cliente</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div >
  )
}
