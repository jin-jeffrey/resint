function UserApplications({apps}) {
    apps.sort((a, b) => (a.CompanyName > b.CompanyName) ? 1 : -1)
    const userApps = apps.map(( listValue, index ) => {
        return (
            <tr key={index}>
            <td>{index + 1}</td>
            <td><a href={listValue.Link} target="_blank">{listValue.CompanyName}</a></td>
            <td>{listValue.JobTitle}</td>
            <td>{listValue.JobLocation}</td>
            <td>{listValue.CompanyDescription}</td>
            <td>{listValue.Notes}</td>
            <td>{listValue.Date}</td>
            <td>{listValue.Status}</td>
            </tr>
        );
        })
        return (
            userApps
        )
}
export default UserApplications;