function Home() {
    const url = 'https://bsscommerce.com/blog/wp-content/uploads/2015/01/10-reasons-why-your-business0should0be-blogging.jpg'
    return (
        <div className="conatiner">
            <img src={url} className="img-responsive" style={{
                margin: 0, height: '100vh'
            }} ></img>
            <div style={{
                position: 'absolute',
                color: 'goldenrod',
                fontSize: '35px',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}><p class="h1">Welcome To Blog Posts App</p></div>
        </div>


    )
}
export default Home;