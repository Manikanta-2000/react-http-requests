import React from "react";


function UserDetails(props){

    return(<div>
        <table>
            <tr>
                <th>FullName</th>
                <th>Email</th>
                <th>DateofBirth</th>
                <th>Gender</th>
                <th>Country</th>
                <th>City</th>
            </tr>
            {props.users?.map((user) => {return <tr>
                <td>{user.email}</td>
            </tr>})}
        </table>
    </div>);
}

export default UserDetails;