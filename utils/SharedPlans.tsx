import Card from "../components/Card.component";

export const publishDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        // year: 'numeric',
    });
}

export const getItemsInCol = (data, type) => {
    let columns = [];
    data[type + 'Articles'].forEach((blog, index) => {
        columns.push(
            <div key={blog.slug} className="col-6 col-sm-6 col-md-6 col-lg-4">
                <Card article={blog} />
            </div>
        )
        if ((index + 1) % 4 === 0) { }
    })

    return (
        <div className='row'>
            {columns}
        </div>
    )
}

export const shortenContent = (content, len) => {
    return content.slice(0, len) + "...";
}
