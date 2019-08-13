import React, { Component } from 'react';


class List extends Component {

    render() {
        const people = this.props.people
        return (

            <div>
                {
                    people.map((person) => {
                        return (

                            <div key={person.url}>
                                <h1 className='charName'>{person.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;