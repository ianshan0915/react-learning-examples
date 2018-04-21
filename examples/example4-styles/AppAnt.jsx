import React, { Component } from 'react';
import  './AppAnt.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

function InputItem(props) {
    const { name, inputIcon, inputType } = props;
    const iconEl = <Icon type={inputIcon} />;
    return(
        <FormItem>
            {}
            <Input prefix={iconEl} type={inputType} placeholder={name}></Input>
        </FormItem>
    )
}
function ButtonItem(props) {
    return(
        <FormItem>
            {}
            <Checkbox>{props.name}</Checkbox>
            <a className={props.aClass}>{props.aName}</a>
            <Button type='primary' className={props.itemClass}>{props.btName}</Button>
        </FormItem>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        //set default state
        // bind function
    }

    handleSubmit = (e) => {
        console.log(e);
        // other things
    }

    render() {
        const props = {
            formClass: 'login-form',
            items: [
                {
                    name: 'Username',
                    itemType: 'input',
                    inputIcon: 'user',
                    inputType: 'text',
                },
                {
                    name: 'Password',
                    itemType: 'input',
                    inputIcon: 'lock',
                    inputType: 'password',
                },
                {
                    name: 'Remember me',
                    itemType: 'checkbox',
                    defaultVal: true,
                    aName: 'Forget password',
                    aUrl: '',
                    aClass: 'login-form-forget',
                    btName: 'Log in',
                    itemClass: 'login-form-button',

                },
            ],
        };
        return(
            <Form onSubmit={this.handleSubmit} className={props.formClass}>
                {
                    props.items.map(
                        (item) => {
                            switch (item.itemType) {
                                case 'checkbox':
                                    return <ButtonItem key ={item.name} {...item}></ButtonItem>;
                                    break;
                                default:
                                    return <InputItem key ={item.name} {...item} />;
                                    break;
                            
                            }
                        }
                    ) 
                }
            </Form>
        )
    }
}

export default App;
