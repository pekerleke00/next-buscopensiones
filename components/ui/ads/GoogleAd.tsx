import React from 'react'
import { useEffect } from 'react';

interface Props {
    currentPath: string
}

const GoogleAd = (props: Props) => {
    const { currentPath } = props;
    useEffect(() => {
        if (typeof window !== "undefined") {
            const windowAux = window as any;
            windowAux.adsbygoogle = windowAux.adsbygoogle || [];
            windowAux.adsbygoogle.push({});
        }
    }, [currentPath])

    return (
        <div key={currentPath}>
            { /*START horizonalAds Google Adsense */}
            <ins className="adsbygoogle horizonalAds"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3805134409321089" // parametrisable?
                data-ad-slot="9031079228" // parametrisable?
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
            { /* END horizonalAds Google Adsense */}

        </div>
    )
}

export default GoogleAd;