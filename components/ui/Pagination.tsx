import { useRouter } from 'next/router';
import React from 'react'

interface Props {
    totalAmount: number
}

export const Pagination = (props: Props) => {
    const { totalAmount } = props;

    const router = useRouter();

    console.log(router.query.page);

    const handleClick = (pageNumber: number) => {
        console.log(pageNumber);

        // const router = useRouter();
        router.query.page = pageNumber.toString();
        router.push(router)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {
                Array(Math.ceil(totalAmount / 9)).fill('').map((na, index) => (
                    <button onClick={() => handleClick(index + 1)} key={index}>
                        {
                            (index+1).toString() === router.query.page && `[${index+1}]` || index+1
                        }
                    </button>)
                )
            }
        </div>
    )
}
