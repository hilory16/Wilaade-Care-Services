import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        items:[
            {   
                name:'Food',
                price:1000,
                quantity:0
            },
            {   
                name:'Ice cream',
                price:500,
                quantity:0
            }
        ],
        quantity:0
    }

    renderItem = () =>{
        return this.state.items.map((item, i) =>{
            const quantity = item.quantity;
            return (
                <div style={{marginBottom:'30px'}}> <span onClick={() => this.add(item,quantity)}>a</span> {item.price}<span style={{padding:'10px', border:'1px solid black'}}>{item.quantity}</span> <span onClick={this.sub}>s</span></div>
            )
        })
    }

    add = (item, quantity) =>{
       
        this.setState( prevState =>{
            return {
                items: [
                    ...this.state.items,
                    {
                        ...item,
                        quantity: ++quantity
                    }
                    // {
                    //     ...this.state.items,
                    // },
                    // {
                    //     ...this.state.items,
                    //     ...item,
                    //     quantity: ++quantity
                    // }
                ]
            }
        })

    }

    sub = () =>{
        this.setState({
            quantity: --this.state.quantity
        })
    }

    render() {
        // console.log(this.state.quantity)
        console.log(this.state.items)
        return (
            <div style={{padding:'30px'}}>
                 {this.renderItem()}  
            </div>
        )
    }
}
