import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofas',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Кресло',
          img: 'arm-chair.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99',
        }
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)  
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer/>
    </div>
  )
}
onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}
chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
}
}
export default App;
