import './dzyF.css';
import {bases} from './dzyData'
import {lunches} from './dzyData'
import {dinners} from './dzyData'
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Carousel} from 'antd';
import { CaretRightFilled,SettingOutlined,AppstoreOutlined, MailOutlined,CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import { Card} from 'antd';
import { Breadcrumb,Button} from 'antd';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}
const style = { background: '#0092ff', padding: '1px 0' };

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      bases:bases,
      current:bases[0],
      lunches:lunches,
      currentlunches:lunches[0],
      dinners,
      currentd:dinners[0],
      countn:0
    }
  }
  _select(base){
    console.log(base)
    this.setState({current:base})
}
  _select(lunch){
  console.log(lunch)
  this.setState({current:lunch})
}
  _select(dinner){
  console.log(dinner)
  this.setState({current:dinner})
}
_inc=()=>{
  let countn=this.state.countn
  countn++
  this.setState({countn})
}
_dsc=()=>{
  let countn=this.state.countn
  countn--
  this.setState({countn})
}
  render() {
    return (
      <div className='back'>
        
        <div className='up'>
        <Carousel autoplay >
    <div >
      <img className='p' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F63%2F07%2F485b599a6b2907f.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620730287&t=89ff8c12c154661dba47e6740f2d3723'></img>
    </div>
    <div>
    <img className='p' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F89%2F95%2F6358feea44d4c17.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620731609&t=84867b84799343f52f1d26c3d64c206a' ></img>    
    </div>
    <div>
    <img className='p' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F06%2F97%2F425971958b7085d.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620731668&t=42a9b59175cef99f0bc9afc6f316edc2'></img>   
     </div>
  </Carousel>
        </div>
        <div className='mid'>
             <div className='midl'>
               <div className='title'>异世相遇 纵享美味!</div>
             


             <Menu onClick={this.handleClick}style={{ width:'100%' }}defaultSelectedKeys={['1']}defaultOpenKeys={['sub1']}mode="inline">
               
             <Menu onClick={handleClick} style={{ width:'100%' }} mode="vertical">

      </Menu>
      
      <SubMenu key="sub1"  title="早餐" style={{backgroundColor:'green'}}>
      
        
      {this.state.bases.map(base=>{
        return <Menu.Item onClick={()=>this._select(base)} >{base.basename}</Menu.Item>
        })}
        </SubMenu>
        < SubMenu key="sub2"  title="午餐"style={{backgroundColor:'orange'}}>
        {this.state.lunches.map(lunch=>{
        return <Menu.Item onClick={()=>this._select(lunch)} >{lunch.basename}</Menu.Item>
        })} 
        </SubMenu>
        <SubMenu key="sub3"  title="晚餐"style={{backgroundColor:'RoyalBlue'}}>
        {this.state.dinners.map(dinner=>{
        return <Menu.Item onClick={()=>this._select(dinner)} >{dinner.basename}</Menu.Item>
        })}
        </SubMenu>
        
      </Menu>
      <div className='midld'>
        
      注：早餐夜宵仅限部分肯德基宅急送部分地区送餐，指尖快递送实行专属菜单和价格，不同区域的送餐菜单略有不同。不同产品品相和价格不同。
      </div>
              </div>
              
              <div className='midm'>
                <div className='midbox'>
                
               
              {this.state.current.items.map(item=>{
                            return  <div className='box'>
                <img className='bp' src={item.img}></img>
                
                <div>
                  {item.name}
                </div>
                <div className='boxm'>
                  <div className='boxml'>¥{item.count}</div>
                <div id='boxmr'>
                  <button className='button'>-</button>
                  <div className='input'>{this.state.countn}</div>
                  <button className='button'>+</button>
                </div>
                </div>

                <div className='jinrujiesuan'>
                  <Button type="primary" style={{backgroundColor:"red",marginTop:'15px'}}>订购 </Button>
                </div>
              </div>
                        })}
              </div>
              </div>
             <div className='midr'>
             <Card title="购物车" extra={<div>num</div>} style={{ width: '100%' }}>
      <div id='js'>
        <div className='jsu'>

        
        <div className='jsul'>
          甜玉米        

        </div>
        <div className='jsur'>
        <CloseOutlined />
        </div>
        </div>
        <div className='jsd'>

      <div className='jsdl'>
        <button className='button'>-</button>
        <input className='input'/>
        <button className='button'>+</button>

      </div>
      <div className='jsdr'>price</div>
      </div>
     

      </div>

      <div id='js2'>
      <div className='jiesuan'>

        <div>小计：</div>

        <div>送费：</div>
        <div>总计：</div>

        </div>
        <div className='jinrujiesuan'>

        <Button type="primary">进入结算 </Button>
        </div>
        

      </div>

    </Card>               
    <div className='dizhi'>
      <div className='dizhiu'>

      <div className='dizhiul'>
      配送地址:
      </div>
        <div className='dizhiur'>
          修改
        </div>
        </div>

        <div className='dizhid'>
        <div>北京市顺义区杨镇镇北京城市学院（顺义校区）</div>
</div>
</div>
        <div className='tx'>
        提醒：根据您最终提交的订单时间，送餐时间可能略有调整。
      </div>

      
            </div>
        </div>
        <div className='down'>
        <Breadcrumb>
    <Breadcrumb.Item>法律条款</Breadcrumb.Item>
    <Breadcrumb.Item>隐私条款</Breadcrumb.Item>
    <Breadcrumb.Item>联系我们</Breadcrumb.Item>
    <Breadcrumb.Item>加入我们</Breadcrumb.Item>
    <Breadcrumb.Item>网站运营者信息</Breadcrumb.Item>
    <Breadcrumb.Item>版权所有 xxx.com (中国)有限公司 沪IPC备20210101号</Breadcrumb.Item>

  </Breadcrumb>
        </div>
      </div>
    )
  }
}
