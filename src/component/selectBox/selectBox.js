import React from 'react'
import { Card,Select,Icon,List,DatePicker,Input,Tooltip,Breadcrumb   } from 'antd';
import './selectBox.css'
import icon from '../../images/add.png'

const { Meta } = Card;

class SelectBox extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
          visible: false,
          cardVisible:true,
          days:0,
          hotAeralist:[
            {
              catename:'',
              catename_en:''
            }
          ],
          addList:[],
          listValue:'上海'
        };
        this.detail = this.detail.bind(this)
    }
    
    componentDidMount(){
      this.getDataByContinent('asia')
    }
    getDataByContinent = (name = 'hot') => {
      fetch('http://192.168.0.143:9003/location/' + name)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          hotAeralist: result.data.list
        })
      });
    };

    detail(){
      this.props.history.push('./detail')
  }
    
    // showDrawer = () => {
    //   this.setState({
    //     visible: true,
    //   });
    // };

    closeCard = () => {
      this.setState({
        visible: false,
      });
    };

    increase = () => {
      let days = this.state.days + 1;
      if (days > 100) {
        days = 100;
      }
      this.setState({ days });
    };
  
    decline = () => {
      let days = this.state.days - 1;
      if (days < 0) {
        days = 0;
      }
      this.setState({ days });
    };

    submit(){
      this.setState({
      // addList:this.state.addList.push(e.target.value) 错误的，改变了postList原来的值，且要用this.setState设置postList
        addList:[...this.state.addList,this.state.listValue],
        listValue:'上海'
      });
      this.setState({
        visible: true,
      });
    }

    handleInput(e){
      // this.state.listValue = e.target.value   错误的，不能直接赋值
      // 需要bind(this)改变this指向，让this指向这个实例
      this.setState({
        listValue:e.target.value,
      })
      console.log(e.target.value);
    }

    delete(index){
      // 删除操作需要保留一个副本，在副本上进行操作，该postList是局部的postList,不影响全局的postList
      if(this.state.addList.length===0){
        this.setState({
          visible: false,
        });
      }else{
        let addList = [...this.state.addList]
      addList.splice(index,1)  
      // 数组删除操作用splice
      this.setState({
        addList,
      });
      }
    }
  
    render(){
      function onChange(date, dateString) {
      }
      let {hotAeralist} = this.state;
          return (
            <div>
                <Card title="选择目的地" style={{ position: 'absolute',width: 360,height:900,transform:'translate(-260%, -50%)',position: 'absolute',left:'50%',top:'50%' }}>
                    <Select style={{ width: 310 }} showArrow={false} ></Select>
                    <Breadcrumb separator=''>
                      {
                        [
                          {
                            text: '热门',
                            value: 'hot'
                          },
                          {
                            text: '亚洲',
                            value: 'asia'
                          },
                          {
                            text: '欧洲',
                            value: 'europe'
                          },
                          {
                            text: '北美',
                            value: 'northAmerica'
                          },
                          {
                            text: '南美',
                            value: 'southAmerica'
                          },
                          {
                            text: '非洲',
                            value: 'africa'
                          },
                          {
                            text: '大洋洲',
                            value: 'oceania'
                          }
                        ].map((d, i)=> <Breadcrumb.Item key={i} onClick={this.getDataByContinent.bind(this, d.value)}>{d.text}</Breadcrumb.Item>)
                      }
                    </Breadcrumb>
                      <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                          onChange: page => {
                            console.log(page);
                          },
                          pageSize: 6,
                        }}
                        dataSource={hotAeralist}
                        renderItem={item => (
                          <List.Item
                            key={item.catename}
                            extra={
                              <img
                                width={45}
                                alt="logo"
                                src={icon}
                                style={{cursor:'pointer'}}
                                onClick={ this.submit.bind(this) }
                              />
                            }
                          >
                            <List.Item.Meta
                              value={ this.state.listValue }
                              onChange={ this.handleInput.bind(this) } 
                              title={<p>{item.catename}</p>}
                              description={item.catename_en}
                            />
                          </List.Item>
                        )}
                      />
                </Card>
                {this.state.visible?
                  <Card title="我的行程" extra={<DatePicker placeholder='请选择日期' onChange={onChange} />} style={{ width: 360,transform:'translate(-156%, -128%)',position: 'absolute',left:'50%',top:'6%'}}>
                    <Input
                      placeholder="输入出发城市"
                      prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      suffix={
                        <Tooltip title="Extra information">
                          <Icon type="edit" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                      }
                    />
                    
                    <div style={{marginTop:'4px'}}>
                      {
                        this.state.addList.map((value,index)=>{
                          return (
                            <div key={index}>
                                <Card style={{ width: 300 }} >
                                  <Meta
                                    avatar={<Icon type="close-circle" onClick={this.delete.bind(this,index)}/>}
                                    title={value}
                                  />
                                  <div style={{display:'flex',float:'right'}}>
                                    <Icon type="minus" onClick={this.decline}/>                    
                                      <p>{this.state.days}</p>
                                    <Icon type="plus" onClick={this.increase}/>
                                  </div>
                                </Card>
                                <div style={{display:'flex'}}>
                                    <span style={{marginLeft:'22px'}}><Icon type="arrow-right" />1166km</span>
                                    <span style={{marginLeft:'26px'}}><Icon type="clock-circle" />2h 15min</span>
                                    <span style={{marginLeft:'30px'}}>约￥761</span>
                                </div>
                            </div>
                          )
                        })
                      }
                      
                    </div>
                    <Input
                      style={{marginBottom:'8px'}}
                      placeholder="输入返回城市"
                      prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      suffix={
                        <Tooltip title="Extra information">
                          <Icon type="edit" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                      }
                    />  
                      <Meta description="下一步" onClick={this.detail} style={{backgroundColor:'#f9b531',height:'50px',cursor:'pointer'}}/>
                  </Card>
                  :
                  null
                }
          </div>
          )
    }
}

export default SelectBox