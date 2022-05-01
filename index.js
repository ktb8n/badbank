function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider 
      value=
      {{users:[
        {
          name:'Porky',
          email:'PorkythePig@mit.edu',
          password:'bacon',
          balance:400,
          history: [],
          },
          ],
          }}
          >
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


//<Route path="/balance/" component={Balance} />