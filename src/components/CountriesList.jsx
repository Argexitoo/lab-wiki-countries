import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      {props.countries.map((country) => (
        <li>
          <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
            <div class="container">
              <div class="row">
                <div class="col-5">
                  <div class="list-group">
                    <a
                      class="list-group-item list-group-item-action"
                      href="/ABW"
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`}
                      />
                      <p>{country.name.common}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
}
