import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

import styles from './styles/pagination.module.scss';

interface Props {
    totalAmount: number
}

export const Pagination = (props: Props) => {
    const { totalAmount } = props;

    const [itemsToShow, setItemsToShow] = useState(0);

    const router = useRouter();

    const currentPage = router.query.page ? parseInt(router.query.page as string)-1 : 0;

    const handleClick = (pageNumber: number) => {
        router.query.page = pageNumber.toString();
        router.push(router)
    }

    useEffect(() => {
        setItemsToShow(Math.round(window.outerWidth / 250))
    }, [])

    if (totalAmount <= 6) return null;

    return (
        <div className={styles.container}>
            <ReactPaginate
                pageCount={Math.ceil(totalAmount / 9)}
                initialPage={currentPage}
                pageRangeDisplayed={itemsToShow}
                marginPagesDisplayed={1}
                onPageChange={(e) => handleClick(e.selected+1)}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                previousLinkClassName={styles.buttons}
                previousLabel={<FaChevronLeft />}
                nextLabel={<FaChevronRight />}
            />
        </div>
    )
}
