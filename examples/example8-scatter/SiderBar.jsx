import React, { Component } from 'react';

function SiderbarItem(props) {
    const { item } = props;
    return (
        <div className="siderbar-item">
            <div className="siderbar-icon"><img /></div>
            <h3>{item.STNM} <span>{item.RZ}</span></h3>
            <div className="siderbar-item-adres">{item.STLC}</div>
        </div>
    );
};

class SiderBar extends Component {
    render() {
        const stations = [
            {STCD: 21,STNM:"石龙大道水田社康中心公交站旁", STLC:"石龙大道水田社康中心公交站旁", RZ:0.05},
            {STCD: 22,STNM:"翻身小学对面", STLC:"深圳市宝安区宝路华新城汽车站服务部附近", RZ:0.02},
            {STCD: 23,STNM:"关山月美术馆往前点", STLC:"福田区中心区莲花山公园附近荣超大厦内", RZ:0.01},
            {STCD: 25,STNM:"金盾剧院（岗厦地铁A出口旁）", STLC:"福田区中心区中广核大厦南（深南大道北)", RZ:0},
            {STCD: 27,STNM:"新洲路福田中心加油站", STLC:"深圳新洲路福田中心加油站", RZ:0},
            {STCD: 28,STNM:"秀沙路比亚迪厂门前", STLC:"坪山新区坑梓街道秀沙路", RZ:0},
            {STCD: 29,STNM:"安托山九路（红岭中学桥洞）", STLC:"福田区北环香蜜立交外国语学校（侨香校区）西", RZ:0},
            {STCD: 33,STNM:"洲石路广深高速桥下", STLC:"深圳市宝安区宝安中心区洲石路桃源盛景园北", RZ:0},
            {STCD: 36,STNM:"龙岗宏佰对面", STLC:"龙岗区宏佰路附近（碧新路西）", RZ:0},
            {STCD: 38,STNM:"碧头工业区工业大道", STLC:"沙井新区碧头工业大道（520购物广场东南）", RZ:0},
            {STCD: 39,STNM:"料坑大道（南光高速桥底", STLC:"光明新区宝安中心区料坑社区公园旁", RZ:0},
            {STCD: 40,STNM:"环城北路近吉华路口", STLC:"环城北路近吉华路口", RZ:0},
        ];
        return (
            <div className="siderbar">
                <div className="siderbar-head">Floods Prediction</div>
                <div className="siderbar-list" >
                    { 
                        stations.map((item) => <SiderbarItem key={item.STCD} item={item}></SiderbarItem>)
                    }
                </div>
            </div>
        );
    }
}

export default SiderBar;