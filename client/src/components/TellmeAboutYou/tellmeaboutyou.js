import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';

class PeriodInfo extends React.Component {
    onChange(event) {
        // formatted pretty value
        console.log(event.target.value);

        // raw value
        console.log(event.target.rawValue);
    }

    render() {
        return (
        <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onChange={this.onChange.bind(this)} />
        );
    }
}