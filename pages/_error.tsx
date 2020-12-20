export default function Error({ statusCode }) {
    return (
        <div id="pg404">
            <style jsx>{`
            #pg404 {
                height: 100vh;
                background-size: cover;
                position: absolute;
                top: 0;
                width: 100vw;
            }
            
            #pg404::before {
                content: "";
                background-image: url("../404.jpg");
                background-size: cover;
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                opacity: 0.5;
            }

            .center {
                position: absolute;
                top:40%;
                left: 25%;
            }
            `}</style>
            <div className="center">
                <p>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}