import React from 'react';
import qs from 'qs';
import request from 'axios';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
const endpoint = '/wp-admin/admin-ajax.php';

const SubscribeForm = React.createClass({
	getInitialState() {
		return {
			name: '',
			email: '',
			country: '',
			errors: {
				name: false,
				email: false,
			}
		}
	},

	handleChange(field, e) {
		let val = e.target.value;
		this.setState({...this.state, [field]: val});
	},

	validate() {
    let errors = {};

    let validations = Object.keys(this.state.errors).map(field => {
			let val = isEmpty(this.state[field]);
			if(field == 'email') val = !isEmail(this.state[field]);
      errors = {...errors, [field]: val};
      return val;
    });
	
    this.setState({errors});
		
    return Promise
			.all(validations)
			.then(arr => arr.every(item => item == false))
      .catch(err => console.error(err));
	},

	handleSubmit(e) {
		e.preventDefault();
		this.validate().then(isValid => { if(isValid) this.storeContact() });
	},

	storeContact() {
		const {	name, email } = this.state;
		const { country } = this.props;

		let mc_data = {
    	email_address: email,
    	status: 'subscribed',
    	merge_fields: {NAME: name, COUNTRY: country },
    	update_existing: true
    };

    let data = qs.stringify({action: 'mailchimp_subscribe', data: mc_data});

		request
			.post(endpoint, data)
			.then(res => {
				console.log(res.data);
				if(res.data.id) {
					return window.location = this.props.thanks;
				}
			}) 
			.catch(err => console.error(err));
	},

	render() {
		const { errors } = this.state;
		const { texts, countries, country } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-container">
					<label className="color-white">
						{texts.name} <span className={errors.name ? 'input-container__error input-container__error-show' : 'input-container__error'} > {texts.invalid} </span>
					</label>

					<input type="text" onChange={this.handleChange.bind(null, 'name')} value={this.state.name} />
				</div>

				<div className="input-container">
					<label className="color-white">
						{texts.email} <span className={errors.email ? 'input-container__error input-container__error-show' : 'input-container__error'} > {texts.invalid} </span>
					</label>
					<input type="text" onChange={this.handleChange.bind(null, 'email')} value={this.state.email} />
				</div>

				<div className="input-container">
					<label className="color-white">
						{texts.country}
						</label>
					<select onChange={this.handleChange.bind(null, 'country')} value={country || this.state.country}>
						{countries.map((country, i) =>
							<option key={i} value={country}>{country}</option>
						)}
					</select>
				</div>

				<button className="button button-dark" onClick={this.handleSubmit}>{texts.subscribe}</button>
			</form>
		)
	}
});

export default SubscribeForm;