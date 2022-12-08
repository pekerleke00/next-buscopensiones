import { useRouter } from 'next/router';
import React from 'react'

interface Props {
    totalAmount: number
}

export const Pagination = (props: Props) => {
    const { totalAmount } = props;

    const router = useRouter();

    const handleClick = (pageNumber: number) => {
        // const router = useRouter();
        router.query.page = pageNumber.toString();
        router.push(router)
    }

    if (totalAmount <= 6) return null;

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {
                Array(Math.ceil(totalAmount / 6)).fill('').map((na, index) => (
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
