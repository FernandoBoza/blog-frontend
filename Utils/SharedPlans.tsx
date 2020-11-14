import Card from "../components/Card.component";
export const getItemsInCol = (data, type) => {
    let columns = [];
    data[type+'Articles'].forEach((blog, index) => {
        columns.push(
            <div key={blog.slug} className="col-sm-6 col-md-5 col-lg-4">
                <Card article={blog}/>
            </div>
        )
        if ((index+1)%4===0) {}
    })

    return (
        <div className='row'>
            {columns}
        </div>
    )
}
