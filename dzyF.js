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
               <div className='title'>???????????? ????????????!</div>
             


             <Menu onClick={this.handleClick}style={{ width:'100%' }}defaultSelectedKeys={['1']}defaultOpenKeys={['sub1']}mode="inline">
               
             <Menu onClick={handleClick} style={{ width:'100%' }} mode="vertical">

      </Menu>
      
      <SubMenu key="sub1"  title="??????" style={{backgroundColor:'green'}}>
      
        
      {this.state.bases.map(base=>{
        return <Menu.Item onClick={()=>this._select(base)} >{base.basename}</Menu.Item>
        })}
        </SubMenu>
        < SubMenu key="sub2"  title="??????"style={{backgroundColor:'orange'}}>
        {this.state.lunches.map(lunch=>{
        return <Menu.Item onClick={()=>this._select(lunch)} >{lunch.basename}</Menu.Item>
        })} 
        </SubMenu>
        <SubMenu key="sub3"  title="??????"style={{backgroundColor:'RoyalBlue'}}>
        {this.state.dinners.map(dinner=>{
        return <Menu.Item onClick={()=>this._select(dinner)} >{dinner.basename}</Menu.Item>
        })}
        </SubMenu>
        
      </Menu>
      <div className='midld'>
        
      ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
                  <div className='boxml'>??{item.count}</div>
                <div id='boxmr'>
                  <button className='button'>-</button>
                  <div className='input'>{this.state.countn}</div>
                  <button className='button'>+</button>
                </div>
                </div>

                <div className='jinrujiesuan'>
                  <Button type="primary" style={{backgroundColor:"red",marginTop:'15px'}}>?????? </Button>
                </div>
              </div>
                        })}
              </div>
              </div>
             <div className='midr'>
             <Card title="?????????" extra={<div>num</div>} style={{ width: '100%' }}>
      <div id='js'>
        <div className='jsu'>

        
        <div className='jsul'>
          ?????????        

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

        <div>?????????</div>

        <div>?????????</div>
        <div>?????????</div>

        </div>
        <div className='jinrujiesuan'>

        <Button type="primary">???????????? </Button>
        </div>
        

      </div>

    </Card>               
    <div className='dizhi'>
      <div className='dizhiu'>

      <div className='dizhiul'>
      ????????????:
      </div>
        <div className='dizhiur'>
          ??????
        </div>
        </div>

        <div className='dizhid'>
        <div>???????????????????????????????????????????????????????????????</div>
</div>
</div>
        <div className='tx'>
        ?????????????????????????????????????????????????????????????????????????????????
      </div>

      
            </div>
        </div>
        <div className='down'>
        <Breadcrumb>
    <Breadcrumb.Item>????????????</Breadcrumb.Item>
    <Breadcrumb.Item>????????????</Breadcrumb.Item>
    <Breadcrumb.Item>????????????</Breadcrumb.Item>
    <Breadcrumb.Item>????????????</Breadcrumb.Item>
    <Breadcrumb.Item>?????????????????????</Breadcrumb.Item>
    <Breadcrumb.Item>???????????? xxx.com (??????)???????????? ???IPC???20210101???</Breadcrumb.Item>

  </Breadcrumb>
        </div>
      </div>
    )
  }
}
