import React from 'react';
import List from './searchByContinentList';

const SearchByContinent = React.createClass({
		getInitialState() {
			return {
				continents: [],
				show: false
			}
		},
	
	componentWillReceiveProps() {
		this.setContinents();
	},

	toggleShow() {
		this.setState({show: !this.state.show});
	},

	setContinents() {
		const { reports, continents } = this.props;
		let newContinents = {};
		console.log(reports);
		let filterByCountry = country => {
			if (reports.filter(r => r.meta_country == country)[0]) {
				return reports.filter(r => r.meta_country == country)[0];
			} else {
				return '';
			}
		};

		let cleanEmpty = report => typeof report == 'object';

		let continentsList = {
			'afrika': 'Afrika',
			'asia': 'Asia',
			'easterEurope': 'Easter Europe',
			'latinAmerica': 'Latin America',
			'middleEast': 'Middle East',
			'northAmerica': 'North America',
			'ocenia': 'Ocenia',
			'russiaCentralAsia': 'Russia & Central Asia',
			'westernEurope': 'Western Europe'
		};

		Object.keys(continentsList).forEach(continentKey => {
			newContinents[continentKey] = continents[continentsList[continentKey]]
				.map(filterByCountry)
				.filter(cleanEmpty);
		});

		this.setState({continents: newContinents});
		console.log(newContinents);
	},

	render() {
		const { texts, templateUrl, countriesTrans, continents } = this.props;

		return (
			<div className={this.state.show ? "map__search_list map__search_list--show" : "map__search_list"}>
				<a href="#" className="map__search__close" onClick={this.close}><i className="ion-close"></i></a>
				<div className="col-md-6 col-sm-10" style={{ float: 'none', margin: '0 auto' }}>
					<h1 className="title-center title-line color-red">{texts.search_by_list}</h1>
					<div className="row">
						<div className="col-md-6">
							<List {...this.props} reports={this.state.continents.africa} />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default SearchByContinent;