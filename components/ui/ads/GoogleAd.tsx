import React from 'react'
import { useEffect } from 'react';

interface Props {
    currentPath: string
}

export const GoogleAd = (props: Props) => {
    const { currentPath } = props;
    useEffect(() => {
        (window as any).adsbygoogle = (window as any).adsbygoogle ? (window as any).adsbygoogle : [];
        (window as any).adsbygoogle.push({});
    }, [currentPath])

    return (
        <div key={currentPath}>
            { /*START horizonalAds Google Adsense */}
            <ins className="adsbygoogle horizonalAds"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3805134409321089" // parametrisable
                data-ad-slot="9031079228" // parametrisable
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
            { /* END horizonalAds Google Adsense */}

        </div>
    )
}
