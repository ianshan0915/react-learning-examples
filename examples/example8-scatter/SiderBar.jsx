import React, { Component } from 'react';

function SiderbarItem(props) {
    const { item } = props;
    return (
        <div className="siderbar-item">
            <div className="siderbar-icon"><img /></div>
            <h3>{item.STNM} <span>{item.label}</span></h3>
            <div className="siderbar-item-adres">{item.STLC}</div>
        </div>
    );
};

class SiderBar extends Component {
    render() {
        const {stations} = this.props;

        return (
            <div className="siderbar">
                <div className="siderbar-head">Floods Prediction</div>
                <div className="siderbar-list" >
                    { 
                        stations?
                        stations.map((item) => <SiderbarItem key={item.STCD} item={item}></SiderbarItem>):null
                    }
                </div>
            </div>
        );
    }
}

export default SiderBar;