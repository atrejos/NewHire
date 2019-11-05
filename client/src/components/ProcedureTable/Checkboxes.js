import React from 'react';

const checkboxes = [{
    name: 'check-box-1',
    key: 'checkBox1',
    label: 'Check Box 1'
},{
    name: 'check-box-2',
    key: 'checkBox2',
    label: 'Check Box 2'
},{
    name: 'check-box-3',
    key: 'checkBox3',
    label: 'Check Box 3'
},{
    name: 'check-box-4',
    key: 'checkBox4',
    label: 'Check Box 4'
},{
    name: 'check-box-5',
    key: 'checkBox5',
    label: 'Check Box 5'
},{
    name: 'check-box-6',
    key: 'checkBox6',
    label: 'Check Box 6'
},{
    name: 'check-box-7',
    key: 'checkBox7',
    label: 'Check Box 7'
},{
    name: 'check-box-8',
    key: 'checkBox8',
    label: 'Check Box 8'
},{
    name: 'check-box-9',
    key: 'checkBox9',
    label: 'Check Box 9'
},{
    name: 'check-box-10',
    key: 'checkBox10',
    label: 'Check Box 10'
},{
    name: 'check-box-11',
    key: 'checkBox11',
    label: 'Check Box 11'
},{
    name: 'check-box-12',
    key: 'checkBox12',
    label: 'Check Box 12'
},{
    name: 'check-box-13',
    key: 'checkBox13',
    label: 'Check Box 13'
},{
    name: 'check-box-14',
    key: 'checkBox14',
    label: 'Check Box 14'
},{
    name: 'check-box-15',
    key: 'checkBox15',
    label: 'Check Box 15'
},{
    name: 'check-box-16',
    key: 'checkBox16',
    label: 'Check Box 16'
},{
    name: 'check-box-17',
    key: 'checkBox17',
    label: 'Check Box 17'
},{
    name: 'check-box-18',
    key: 'checkBox18',
    label: 'Check Box 18'
},{
    name: 'check-box-19',
    key: 'checkBox19',
    label: 'Check Box 19'
},{
    name: 'check-box-20',
    key: 'checkBox20',
    label: 'Check Box 20'
},{
    name: 'check-box-21',
    key: 'checkBox21',
    label: 'Check Box 21'
},{
    name: 'check-box-22',
    key: 'checkBox22',
    label: 'Check Box 22'
}];

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
}

render(){
    return (
        <React.Fragment>
            {
                checkboxes.map(item => (
                    <label key={item.key}>
                        {item.name}
                        <Input type="checkbox" name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                    </label>
                ))
            }
        </React.Fragment>
    );
}
}

export default CheckboxContainer;