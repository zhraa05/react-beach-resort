
import React from "react";
import { withRoomConsumer } from "../contax";
import Loading from "./Loading";
import Roomfilter from "./Roomfilter";
import Roomlist from "./Roomlist";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <Roomfilter rooms={rooms} />
            <Roomlist rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);
// import React from 'react'
// import { Roomconcumer } from '../contax'
// import Roomfilter from './Roomfilter'
// import Roomlist from './Roomlist'
// import Loading from './Loading'

// export default function Roomcontainer() {
//     return (
//         <Roomconcumer>
//             {
//                 (value) => {
//                     const { loading, sorteroom, rooms } = value
//                     if (loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>Roomcontainer
//                             <Roomfilter rooms={rooms} />
//                             <Roomlist rooms={sorteroom} />
//                         </div>
//                     )
//                 }
//             }
//         </Roomconcumer>

//     )
// }
