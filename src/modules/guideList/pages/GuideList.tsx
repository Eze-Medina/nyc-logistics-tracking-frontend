import { useEffect, useState } from 'react';
import { useForm } from '../../../shared/hooks/useForm';

import type { Filter as FilterType, GuideSummaryDto } from '../../../interfaces';

import { getGuideList } from '../helpers/get-guide-list';

import { Filter } from '../components/filter/Filter';
import { Table } from '../components/table/Table';

import style from './guideList.module.css';

const initialFilter: FilterType = {
  code: '',
  sender: '',
  receiver: '',
  origin: '',
  destination: '',
  status: '',
};

export const GuideList = () => {

  const {
    formState,
    onInputChange,
    onResetForm,
  } = useForm(initialFilter);

  const [list, setList] = useState<GuideSummaryDto[]>([]);
  const [page, setPage] = useState(1);

  const loadGuides = async (pageNumber: number) => {
    const data = await getGuideList({
      filter: formState,
      page: pageNumber,
    });

    setList(data);
  };

  const handleSearch = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (page === 1) {
      await loadGuides(1);
      return;
    }

    setPage(1);
  };

  useEffect(() => {
    loadGuides(page);
  }, [page]);

  return (
    <section className={style.container}>
      <div className={style.section}>
        <h2>Guías de Envío</h2>
        <p className={style.section_p}>Gestión y seguimiento de espachos.</p>
        <Filter
          filter={formState}
          onInputChange={onInputChange}
          onSubmit={handleSearch}
          onReset={onResetForm}
        />
        <Table
          items={list}
          page={page}
          handleChangePage={setPage}
        />
      </div>
    </section>
  );
};