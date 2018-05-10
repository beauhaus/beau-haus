import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
  {
    id: 10,
    name: 'home',
    fill: '#FFCC91',
    txtPos: 'translate(107.521 65)'
  },
  {
    id: 20,
    name: 'create',
    fill: '#9b353a',
    txtPos: 'translate(127.6519 165)'
  },
  {
    id: 30,
    name: 'collect',
    fill: '#85bb8f',
    txtPos: 'translate(156.7915 266)'
  }
];

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'holder',
      hover: false,
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleCardHoverOn = this.handleCardHoverOn.bind(this);
    this.handleCardHoverOff = this.handleCardHoverOff.bind(this);
    this.handleTextHoverOn = this.handleTextHoverOn.bind(this);
    this.handleTextHoverOff = this.handleTextHoverOff.bind(this);
    this.renderCard = this.renderCard.bind(this);
    
    this.tl = new TimelineMax({repeat: 0});
  }

  handleClick(e) {
    console.log('Input: ', e);
  }

  handleCardHoverOn() {
    this.setState({ hover: true });
    console.log('hoverON');
  }

  handleCardHoverOff() {
    this.setState({ hover: false });
    console.log('hoverOFF');
  }
  handleTextHoverOn(arg) {
    this.setState({ hover: true });
    console.log('hoverON');
    const { tl, refs } = this;
      tl
      .to(refs[arg], 1, {
          opacity: 1,
          delay: 2,
         }, "-=0")
        
      console.log("refs[arg]", refs[arg])
      
}
  
  handleTextHoverOff() {
    this.setState({ hover: false });
    console.log('hoverOFF');
  }

  renderCard(item, idx) {
    return (
      // ref={(input) => this.label = input} 
      <div className="pro-wrapper"
      onMouseEnter={()=>this.handleCardHoverOn(item.name)}
      key={item.id}>
      
        <div className="pro-name" 
        onClick={() =>this.handleClick(item.name)} 
        onMouseEnter={(ref)=>this.handleTextHoverOn(item.id)} 
        ref={item.id}
        >
          {item.name} 
        </div>
      </div>
    );
  }

  render() {
    // {data.map(this.renderCard)}
    return (
    <div className="global-grid">
    {this.props.cards.map(this.renderCard)}
    </div>
    )
   }
  }



// {this.props.cards.map(card => (
//   <Card
//     clicker={() => this.handleClick}
//     hoverOn={() => this.handleHoverOn}
//     hoverOff={() => this.handleHoverOff}
//     key={card.name}
//     {...card}
//   />
// ))}
// ReactDOM.render(<CardList cards={data} />, document.getElementById("app"));

const Sandbox = props => {
  return (
    <div className="sandbox-grid">
      <CardList cards={data} />
    </div>
  );
};

export default Sandbox;

/*

this.handleMenuHoverOn = this.handleMenuHoverOn.bind(this);
this.handleMenuHoverOff = this.handleMenuHoverOff.bind(this);

this.handlelinkHoverOn = this.handlelinkHoverOn.bind(this);
this.handlelinkHoverOff = this.handlelinkHoverOff.bind(this);



this.handleTextHoverOn = this.handleTextHoverOn.bind(this);
this.handleTextHoverOff = this.handleTextHoverOff.bind(this);
this.handlelinkHoverOn = this.handlelinkHoverOn.bind(this);
    
*/
