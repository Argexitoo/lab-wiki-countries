
import { useParams } from 'react-router-dom';

function CountryDetail(props) {
    const params = useParams()
    const detail = props.countries.find((country) => country.alpha3Code === params.alpha3Code);
    return(
<div class="col-7">
            <img  src={`https://flagpedia.net/data/flags/h120/${detail.alpha2Code.toLowerCase()}.png`} alt="country flag" />
            <h1>{detail.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{detail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {detail.area} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {/* <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>   */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetail

