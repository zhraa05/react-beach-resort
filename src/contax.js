import React, { Component } from 'react'
import items from './data'




const Roomconraxt = React.createContext()

class RoomProvidr extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };


    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }


    getroom = (slug) => {
        let temptoom = [...this.state.rooms]
        const room = temptoom.find(room => room.slug === slug)
        return room
    }
    handlchange = event => {
        // const type = event.target.type
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterroome)
        // const value = event.target.value

    }
    filterroome = () => {
        let { rooms,
            sortedRooms, featuredRooms, loading, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets

        } = this.state
        let temprooms = [...rooms]
        capacity = parseInt(capacity)

        if (type !== "all") {
            temprooms = temprooms.filter(room => room.type === type)
        }
        if (capacity !== 1) {
            temprooms = temprooms.filter(room => room.capacity >= capacity)
        }
        temprooms = temprooms.filter(room => room.price <= price)
        temprooms = temprooms.filter(room => room.price <= price)
        temprooms = temprooms.filter(room => room.size >= minSize && room.size <= maxSize)
        if (breakfast) {
            temprooms = temprooms.filter(room => room.breakfast === true)
        }
        if (pets) {
            temprooms = temprooms.filter(room => room.pets === true)
        }
        this.setState({
            sortedRooms: temprooms
        })

    }

    render() {
        return (
            <Roomconraxt.Provider value={{
                ...this.state, getroom: this.getroom,
                handlchange: this.handlchange,

            }}
            >
                {this.props.children}
            </Roomconraxt.Provider>
        )
    }
}


const Roomconcumer = Roomconraxt.Consumer


export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <Roomconcumer>
                {value => <Component {...props} context={value} />}
            </Roomconcumer>
        );
    };
}

export { RoomProvidr, Roomconcumer, Roomconraxt }