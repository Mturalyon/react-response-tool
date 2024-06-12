function Users() {
    const person = localStorage.getItem("Person");

    return (
        <>
            <h1>Users Page</h1>
            <p>{person}</p>
        </>
    )
};

export default Users;