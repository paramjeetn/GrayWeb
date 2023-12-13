import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      
     
      <div className="card">
        <div className="left">
          <h1>GrayWeb.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          
            <button>Register</button>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input type="email" placeholder="Email" />
          <input type="name" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
    
    
  )
}

export default Register