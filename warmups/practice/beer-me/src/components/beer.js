import React from 'react';
import FontAwesome from 'react-fontawesome'


class Beer extends React.Component {
    render() {
        return (
            <div className="col-md-2 beer center-block">
                <h4 className="beer-head">{this.props.beer.name}</h4>
               
                <FontAwesome
                    onClick={() => {
                            this.props.handleUp(this.props.beer.id)
                        }}
                    className="vote"
                    name='thumbs-o-up'
                    size='2x'
                   
              />
               <p className="vote">{this.props.beer.likes}</p>
                 <FontAwesome
                  onClick={() => {
                            this.props.handleDown(this.props.beer.id)
            
                        }}
                    className="vote"
                    name='thumbs-o-down'
                    size='2x'
                   
              />

            </div>
        )
    }
}

export default Beer;