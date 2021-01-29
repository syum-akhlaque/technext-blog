import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const UserList = ({user}) => {

    const sortTable = (col=0)=>  {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("userTable");
        switching = true;
       
        while (switching) {
          switching = false;
          rows = table.rows;
          
          for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[col];
            y = rows[i + 1].getElementsByTagName("TD")[col];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
      const history = useHistory()
      const handleUserProfile = (id)=>{
        // setCurrentUser(id)
        localStorage.setItem('currentUser',`${id}`)
        history.push({
          pathname: `/profile`,
        })
      }
      
    console.log(user)
    return (
        <div>
             {user.length && <table id="userTable" className = 'table table-striped my-5 w-75 mx-auto'>
                <thead>
                    <th onClick = {()=>sortTable(0)}>Name</th>
                    <th onClick = {()=>sortTable(1)}>Email </th>
                    <th onClick = {()=>sortTable(2)}>Web Site</th>
                </thead>
                <tbody>
                {
                   user.map( row =>
                    <tr>
                        <td onClick = {()=>handleUserProfile(row.id)}>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.website}</td>
                    </tr>)
                }
                </tbody>
            </table>}
        </div>
    );
};

export default UserList;