import { useEffect, useState } from 'react';
import { useForm } from '../../../shared/hooks/useForm';

import type { ClientFilter, ClientSummaryDto } from '../../../interfaces';
import { getClientList } from '../helpers/get-client-list';

import { Filter } from '../components/filter/Filter';
import { Table } from '../components/table/Table';
import { ClientDetails } from '../components/details/ClientDetails';

import style from './clientList.module.css';

const initialFilter: ClientFilter = {
  name: '',
  id_type: '',
  id_number: 0,
  email: '',
  phone: 0
};

export const ClientList = () => {

  const {
    formState,
    onInputChange,
    onResetForm,
  } = useForm(initialFilter);

  const [list, setList] = useState<ClientSummaryDto[]>([]);
  const [page, setPage] = useState(1);
  const [offset] = useState(10);
  const [selectedClient, setSelectedClient] = useState<number | undefined | null>();

  const loadClient = async (pageNumber: number) => {
    const data = await getClientList({
      filter: formState,
      offset: offset,
      page: pageNumber,
    });

    setList(data);
  };

  const handleSearch = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (page === 1) {
      await loadClient(1);
      return;
    }

    setPage(1);
  };

  useEffect(() => {
    loadClient(page);
  }, [page]);

  const handleReset = () => {
    onResetForm()
    setPage(1)
  }

  if (selectedClient) {
    return (
      <ClientDetails
        client_id={selectedClient}
        onBack={() => setSelectedClient(null)}
      />
    );
  }

  return (
    <section className={style.container}>
      <div className={style.section}>
        <h2>Consultar clientes</h2>
        <p className={style.section_p}>Gestión de clientes registrados.</p>
        <div className={style.clients}>
          <Filter
            filter={formState}
            onInputChange={onInputChange}
            onSubmit={handleSearch}
            onReset={handleReset}
          />
          <Table
            clients={list}
            page={page}
            handleChangePage={setPage}
            handleDetail={setSelectedClient}
            offset={offset}
          />
        </div>
      </div>
    </section>
  );
};