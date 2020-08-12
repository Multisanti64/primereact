import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class CheckboxDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';

export class CheckboxDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked: false,
            cities: []
        };
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        let selectedCities = [...this.state.cities];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities: selectedCities});
    }

    render() {
        return (
            <div>
                <h3 className="first">Single</h3>
                <Checkbox checked={this.state.checked} onChange={e => this.setState({checked: e.checked})} />
                <p>Checked: <span style={{fontWeight: 'bold'}}>{this.state.checked ? 'true' : 'false'}</span></p>

                <h3>Multiple</h3>
                <div className="p-grid" style={{width:'250px'}}>
                    <div className="p-col-12">
                        <Checkbox inputId="cb1" value="New York" onChange={this.onCityChange} checked={this.state.cities.indexOf('New York') !== -1}></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">New York</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb2" value="San Francisco" onChange={this.onCityChange} checked={this.state.cities.indexOf('San Francisco') !== -1}></Checkbox>
                        <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb3" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.indexOf('Los Angeles') !== -1}></Checkbox>
                        <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
                    </div>
                </div>
                <p>Selected Cities : {this.state.cities.map((city) => <span style={{fontWeight: 'bold'}} key={city}>{city} </span>)}</p>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const CheckboxDemo = () => {
    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);

    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <h3 className="first">Single</h3>
            <Checkbox checked={checked} onChange={e => setChecked(e.checked)} />
            <p>Checked: <span style={{fontWeight: 'bold'}}>{checked ? 'true' : 'false'}</span></p>

            <h3>Multiple</h3>
            <div className="p-grid" style={{width:'250px'}}>
                <div className="p-col-12">
                    <Checkbox inputId="cb1" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1}></Checkbox>
                    <label htmlFor="cb1" className="p-checkbox-label">New York</label>
                </div>
                <div className="p-col-12">
                    <Checkbox inputId="cb2" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1}></Checkbox>
                    <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
                </div>
                <div className="p-col-12">
                    <Checkbox inputId="cb3" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1}></Checkbox>
                    <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
                </div>
            </div>
            <p>Selected Cities : {cities.map((city) => <span style={{fontWeight: 'bold'}} key={city}>{city} </span>)}</p>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const CheckboxDemo = () => {
    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);

    const onCityChange = (e: { value: any, checked: boolean }) => {
        let selectedCities: any = [...cities];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <h3 className="first">Single</h3>
            <Checkbox checked={checked} onChange={e => setChecked(e.checked)} />
            <p>Checked: <span style={{fontWeight: 'bold'}}>{checked ? 'true' : 'false'}</span></p>

            <h3>Multiple</h3>
            <div className="p-grid" style={{width:'250px'}}>
                <div className="p-col-12">
                    <Checkbox inputId="cb1" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1}></Checkbox>
                    <label htmlFor="cb1" className="p-checkbox-label">New York</label>
                </div>
                <div className="p-col-12">
                    <Checkbox inputId="cb2" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1}></Checkbox>
                    <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
                </div>
                <div className="p-col-12">
                    <Checkbox inputId="cb3" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1}></Checkbox>
                    <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
                </div>
            </div>
            <p>Selected Cities : {cities.map((city) => <span style={{fontWeight: 'bold'}} key={city}>{city} </span>)}</p>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight lang="javascript">
                            {`
import {Checkbox} from 'primereact/checkbox';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Checkbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>
                        <CodeHighlight>
                            {`
<Checkbox onChange={e => this.setState({checked: e.checked})} checked={this.state.checked}></Checkbox>

`}
                        </CodeHighlight>

                        <h3>Multiple Values</h3>
                        <p>Multiple checkboxes can be grouped using a list of values.</p>
                        <CodeHighlight>
                            {`
<div className="p-col-12">
    <Checkbox inputId="cb1" value="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
    <label htmlFor="cb1" className="p-checkbox-label">New York</label>
</div>
<div className="p-col-12">
    <Checkbox inputId="cb2" value="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
    <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
</div>
<div className="p-col-12">
    <Checkbox inputId="cb3" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
    <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
</div>

`}
                        </CodeHighlight>

                        <CodeHighlight lang="javascript">
                            {`
constructor() {
    super();
    this.state = {
        cities: []
    };
    this.onCityChange = this.onCityChange.bind(this);
}

onCityChange(e) {
    let selectedCities = [...this.state.cities];
    if(e.checked)
        selectedCities.push(e.value);
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    this.setState({cities: selectedCities});
}

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>inputId</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the inner native radiobutton.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Value of the checkbox.</td>
                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the checkbox element .</td>
                                    </tr>
                                    <tr>
                                        <td>checked</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies whether a checkbox should be checked or not.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element value cannot be altered.</td>
                                    </tr>
                                    <tr>
                                        <td>required</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                    </tr>
                                    <tr>
                                        <td>readOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element cannot be typed.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaLabelledBy</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onChange</td>
                                        <td>event.originalEvent: Original event <br />
                                        event.value: Value of the checkbox <br />
                                        event.checked: Checked state as a boolean.</td>
                                        <td>Callback to invoke on value change</td>
                                    </tr>
                                    <tr>
                                        <td>onMouseDown</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke to when a mouse button is pressed.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenu</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke on right-click.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-chkbox</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-chkbox-box</td>
                                        <td>Container of icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-chkbox-icon</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-chkbox-label</td>
                                        <td>Label element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="CheckboxDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
