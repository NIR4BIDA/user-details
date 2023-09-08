import classes from './UserList.module.css'
const UserList = (props) =>
{
    return(
        <div className={classes['table-container']}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map((user)=>{
            return(
              <tr key={Math.random().toString()}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          }
          )
        }
      </tbody>
    </table>
    </div>
    );
}
export default UserList;