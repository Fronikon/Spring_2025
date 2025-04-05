import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from './Pagination.module.css';

interface PropsType {
  setPerPage: (number: number) => void;
  setCurrentPage: (number: number) => void;
  countPages: number;
  currentPage: number;
  perPage: number;
}

const LEFT_DOTS = ' ...';
const RIGHT_DOTS = '... ';

const Pagination: React.FC<PropsType> = (props) => {
  const { setPerPage, setCurrentPage, countPages, currentPage, perPage } = props;

  const [buttons, setButtons] = useState<JSX.Element[]>([]);

  const onClickButton = useCallback(
    (buttonValue: number | string): void => {
      if (typeof buttonValue === 'number') {
        setCurrentPage(buttonValue);
      } else if (buttonValue === RIGHT_DOTS) {
        setCurrentPage(currentPage + 1);
      } else if (buttonValue === LEFT_DOTS) {
        setCurrentPage(currentPage - 1);
      }
    },
    [currentPage, setCurrentPage]
  );

  useEffect(() => {
    const getPagination = () => {
      switch (countPages) {
        case 0:
          return [];
        case 1:
          return [1];
        case 2:
          return [1, 2];
        case 3:
          return [1, 2, 3];
        case 4:
          return [1, 2, 3, 4];
        case 5:
          return [1, 2, 3, 4, 5];
        default:
          break;
      }

      if (currentPage <= 3) {
        return [1, 2, 3, 4, RIGHT_DOTS, countPages];
      }
      if (currentPage <= countPages - 3) {
        return [
          1,
          LEFT_DOTS,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          RIGHT_DOTS,
          countPages,
        ];
      }
      return [1, LEFT_DOTS, countPages - 3, countPages - 2, countPages - 1, countPages];
    };

    const buttons = getPagination().map((buttonValue, index) => {
      return (
        <button
          onClick={() => onClickButton(buttonValue)}
          className={
            buttonValue === currentPage ? `${styles['page']} ${styles['active-page']}` : styles.page
          }
          key={index}
        >
          {buttonValue}
        </button>
      );
    });

    setButtons(buttons);
  }, [countPages, currentPage, onClickButton]);

  const onChangePerPage = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPerPage(Number(e.target.value));
  };

  return (
    <section className={styles['pagination-container']}>
      <div className={`container ${styles['pagination-wrapper']}`}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={styles.control}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {buttons}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={styles.control}
          disabled={currentPage === countPages}
        >
          Next
        </button>
        <select className={styles['per-page']} value={perPage} onChange={onChangePerPage}>
          <option value="20">Page / 20</option>
          <option value="50">Page / 50</option>
          <option value="100">Page / 100</option>
        </select>
      </div>
    </section>
  );
};

export default Pagination;
