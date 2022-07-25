import React, { useState, useEffect } from 'react';
import WikiJS from 'wikijs';
import Map from './components/Map';
import Info from './components/Info';
import Summary from './components/Summary';
import Content from './components/Content';
import Loading from './components/Loading';

export default function App() {

    const [selectedCountry, setSelectedCountry] = useState('iran');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState(null);
    const [info, setInfo] = useState(null);
    const [flag, setFlag] = useState('');
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const page = await WikiJS().page(selectedCountry); 

            const [summary, content, info, images] = await Promise.all([
                page.summary(),
                page.content(),
                page.info(),
                page.images()
            ])

            const imageFlag = info.imageFlag.replace(/\s/g, '_');
            images.some(image => {
                if (image.includes(imageFlag)) {
                    setFlag(image);
                    return true;
                }
                return false;
            })
 
            setSummary(summary);
            setContent(content);
            setInfo(info);
            setLoading(true);
        }
        fetchData();
    },[selectedCountry])

    const handleSelectedCountry = (name) => {
        setSelectedCountry(name)
    }

    return (
        <div className='container'>
            <div className="row mt-5 mb-5 border-bottom border-dark pb-5    ">
                <div className="col d-flex justify-content-center">
                    <Map handleSelectedCountry={handleSelectedCountry}/>
                </div>
            </div>

            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <Info 
                        info={info} 
                        flag={flag}
                        selectedCountry={selectedCountry}/>
                </div>
                <div className="col-sm-12 col-md-8">
                    {
                        !loading ? (<Loading />) :
                        (
                            <>
                            <Summary summary={summary}/>
                            <Content content={content}/>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
