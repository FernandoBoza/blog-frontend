import Card from "../components/Card.component";
import Fade from 'react-reveal/Fade';
import PortfolioCard from "../components/PortfolioCard.component";
import BlogCard from "../components/BlogCard.component";

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
                <Fade left>
                    <PortfolioCard article={blog} />
                </Fade>
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

export const getItemsInColBlog = (data, type) => {
    let columns = [];
    data[type + 'Articles'].forEach((blog, index) => {
        columns.push(
            <div key={blog.slug} className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <Fade left>
                    <BlogCard article={blog} />
                </Fade>
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

export const shortenContent = (content, len = 70) => {
    return content.slice(0, len) + "...";
}
