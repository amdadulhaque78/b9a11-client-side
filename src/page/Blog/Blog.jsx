import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blogpic1.png"
import blog4 from "../../assets/blogpic2.png"

const Blog = () => {
    return ( 
        <div className="my-10 px-2">
            <div className="lg:w-[900px] w-[300px] mx-auto border-2 my-5">
                <div>
                    <img src={blog1} alt="" />
                </div>
                <div className="p-2 space-y-5">
                    <div>
                        <h2 className="text-2xl font-semibold">What is an access token and refresh token?</h2>
                        <p>Access tokens and refresh tokens are commonly used in authentication mechanisms, particularly in web applications utilizing OAuth or similar protocols.</p>
                        <p>Access Token: An access token is a credential used by an application to access an API or protected resource on behalf of a user. It represents the authorization granted to the application by the user. Access tokens are typically short-lived and have an expiration time. They are used to authenticate API requests.</p>
                        <p>Access tokens are typically stored in memory (e.g., as a variable) or in a secure storage mechanism such as browser cookies or localStorage. They should be kept secure to prevent unauthorized access.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">How do they work and where should
                            we store them on the client side?
                        </h2>
                        <p>Refresh Token: A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It is securely stored on the client side and exchanged for a new access token without requiring the user to re-authenticate. Refresh tokens have a longer lifespan compared to access tokens and are used to obtain new access tokens when they expire.</p>
                        <p>Refresh tokens are more sensitive because they can be used to obtain new access tokens without requiring the users credentials. Therefore, they should be stored in a more secure manner. Common approaches include using HttpOnly cookies (which cannot be accessed by JavaScript) or in secure browser storage mechanisms such as localStorage or sessionStorage with appropriate security measures (e.g., encryption).</p>
                        <p>It s important to note that storing tokens securely is crucial to prevent unauthorized access to user data. Additionally, proper token management practices should be followed to minimize security risks, such as token expiration, token revocation, and token rotation.</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-[900px] w-[300px] mx-auto border-2 my-5">
                <div>
                    <img src={blog2} alt="" />
                </div>
                <div className="p-2 space-y-5">
                    <div>
                        <h2 className="text-2xl font-semibold"> What is express js? What is Nest JS</h2>
                        <p>Express.js and NestJS are both popular frameworks used for building server-side applications in JavaScript and TypeScript, respectively. Here s a brief overview of each</p>
                        <h2 className="text-2xl font-semibold">Express.js:</h2>
                        <li>Express.js is a minimalist web application framework for Node.js. It is one of the most widely used frameworks for building web servers and APIs in Node.js.</li>
                        <li>Express.js provides a simple and flexible API for handling HTTP requests, routing, middleware, and templating.</li>
                        <img src={blog3} alt="" />
                        <li>It is lightweight, unopinionated, and highly extensible, allowing developers to build applications ranging from simple APIs to complex web applications.</li>
                        <li>Express.js follows the middleware pattern, where each incoming request passes through a series of middleware functions before reaching the final route handler.</li>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">NestJS:</h2>
                       <li>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, making it suitable for developers familiar with Angular concepts.</li>
                       <li>NestJS provides a modular and opinionated structure for building applications, with built-in support for features like dependency injection, middleware, decorators, and more.</li>
                       <img src={blog4} alt="" />
                       <li>It uses Express.js under the hood but abstracts away the complexity of working directly with Express, providing a higher level of abstraction and developer productivity.</li>
                       <li>NestJS emphasizes the use of decorators and TypeScript features like decorators, interfaces, and classes to define controllers, services, and modules, making the codebase more structured, maintainable, and scalable.</li>
                       <p>In summary, Express.js is a minimalist framework for building web servers and APIs in Node.js, while NestJS is a higher-level framework built on top of Express.js, offering a more structured and opinionated approach to building server-side applications with TypeScript, inspired by Angular s concepts and architecture. Both frameworks are widely used and have their own strengths and use cases.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
