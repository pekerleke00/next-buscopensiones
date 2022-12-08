import { useRouter } from 'next/router';
import React from 'react';

import styles from './styles/filter.module.scss';

interface Props {
    title: string
    filters: string[]
    query: string
    onChange?: () => void
}

export const Filter = (props: Props) => {
    const { title, filters, query, onChange } = props;

    const router = useRouter();

    const handleFilterClick = (filter: string) => {
        onChange && onChange()
        delete router.query.page;
        router.query[query] = filter;
        router.push(router)
    }

    const handleReset = () => {
        onChange && onChange()
        delete router.query.page;
        delete router.query[query];
        router.push(router);
    }

    return (
        <>
            <p className={styles.title}>{title}</p>
            {
                filters.map((filter: string) => (
                    <span key={filter} className={styles.filterItem} onClick={() => handleFilterClick(filter)}>
                        {filter}
                        {
                            router.query[query] === filter && <div className={styles.resetFilter} onClick={handleReset}>×</div>
                        }
                    </span>
                ))
            }
        </>
    )
}
