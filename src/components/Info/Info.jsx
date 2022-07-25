import React from 'react'

export default function Info({ info, flag, selectedCountry }) {

    const url = `https://en.wikipedia.org/wiki/${selectedCountry}`
    return (
        <>
            {
                info &&
                <div className="card border-dark">
                    <img src={flag} className="card-img-top" alt={flag} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {info.commonName}</h5>
                        <p className="card-text">{info.conventionalLongName}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">capital:  {info.capital}</li>
                        <li className="list-group-item">largestCity:  {info.largestCity}</li>
                        <li className="list-group-item">officialLanguages:  {info.officialLanguages}</li>
                        <li className="list-group-item">area K/m2:  {info.areaKm2}</li>
                        <li className="list-group-item">areaRank:  {info.areaRank}</li>
                        <li className="list-group-item">percentWater:  {info.percentWater}</li>
                        <li className="list-group-item">populationEstimateYear:  {info.populationEstimateYear}</li>
                        <li className="list-group-item">currency:  {info.currency}</li>
                        <li className="list-group-item">currencyCode:  {info.currencyCode}</li>
                        <li className="list-group-item">timeZone:  {info.timeZone}</li>
                        <li className="list-group-item">utcOffset:  {info.utcOffset}</li>
                        <li className="list-group-item">timeZoneDst:  {info.timeZoneDst}</li>
                        <li className="list-group-item">dateFormat:  {info.dateFormat}</li>
                        <li className="list-group-item">drivesOn:  {info.drivesOn}</li>
                        <li className="list-group-item">callingCode:  {info.callingCode}</li>
                        <li className="list-group-item">iso3166code:  {info.iso3166code}</li>
                    </ul>
                    
                    <div className="card-body">
                        <a href={url} className="card-link">wikipedia</a>
                    </div>
                </div>
            }
        </>
    )
}
