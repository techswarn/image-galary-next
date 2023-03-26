const Pagination = ({ items, pageSize, currentPage, onPageChange}) => {
    const users = ["swarn", "cdscds", "cdscdsc", "cdscdse", "efewfew", "ecrfrwe", "fewcwefew", "fdewcref", "fredcscvds", "frgfvwf"]
    const len = users.length;
    console.log(len)
    const pages = Math.ceil(users.length/3)
    let currentPage = 1

    for( let i=currentPage; i<pages; i ++) {
        
    }
    console.log("pages: " + pages)
    return (
        <p>pagination</p>
    )
}

export default Pagination