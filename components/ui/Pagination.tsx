import { useRouter } from 'next/router';
import React from 'react'

interface Props {
    totalAmount: number
}

export const Pagination = (props: Props) => {
    const { totalAmount } = props;

    const router = useRouter();

    const handleOnChange = (e: any, page: number) => {
        console.log(page)
        console.log(router)
        // router.push({ pathname: router.asPath, query: { page: page } });

        router.replace(
            {
                pathname: '/...',
                query: {
                    ...router.query, // list all the queries here
                    page: page // override the color property
                },
            },
            // undefined,
            // {
            //     shallow: true,
            // },
        );
    }

    return (
        <div>
            TODO: paginado
            {/* <Typography>Page: {router.query.page}</Typography>
            <MUIPagination count={Math.ceil(totalAmount / 10)} page={router.query.page} onChange={handleOnChange} /> */}
        </div>
    )
}
