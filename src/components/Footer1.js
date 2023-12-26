import logo from "../flipkart-icon.svg"
function Footer1() {
    return (
        <div className="row bg-secondary text-light">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Visit us on</h1>
                <ul>
                    <li className="p-1"><a class="text-light" href="htpps://www.facebook.com">Facebook</a></li>
                    <li className="p-1"><a class="text-light" href="htpps://www.whatsapp.com">Whatsapp</a></li>
                    <li className="p-1"><a class="text-light" href="htpps://www.instagram.com">Instagram</a></li>
                    <li className="p-1"><a class="text-light" href="htpps://www.twitter.com">Twitter</a></li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Blogs</h1>
                <ol>
                    <li className="p-1"><a class="text-light" href="https://flipkart.com">Blog 1</a></li>
                    <li className="p-1"><a class="text-light" href="https://flipkart.com">Blog 2</a></li>
                    <li className="p-1"><a class="text-light" href="https://flipkart.com">Blog 3</a></li>
                    <li className="p-1"><a class="text-light" href="https://flipkart.com">Blog 4</a></li>
                </ol>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Topics</h1>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Logo</h1><br/>
                <a href="https://flipkart.com">
                    <img src={logo} alt="image1" height="100px" width="100px" />
                </a>
            </div>
        </div>
    )
}
export default Footer1;