function UserApplications({apps}) {
    
    const userApps = apps.map(( listValue, index ) => {
        return (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{listValue.CompanyName}</td>
            <td>{listValue.CompanyDescription}</td>
            <td>{listValue.Notes}</td>
            <td>{listValue.JobTitle}</td>
            <td>{listValue.JobLocation}</td>
            <td>{listValue.Date}</td>
            <td>{listValue.Status}</td>
            <td>{listValue.Link}</td>
            </tr>
        );
        })
        return (
            userApps
        )
}
export default UserApplications;