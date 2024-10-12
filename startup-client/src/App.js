import "./App.css"

function App() {
  return (
    <div className="App">
    <div  style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly",
    position: "sticky", top: "0", zindex: "1000", height: "5rem", backgroundColor: "blue"}}>
      <div>nav bar</div>          
      </div>

    <div style={{flexGrow: "1", overflowY: "auto", padding: "40px", scrollbarWidth: "none", justifyContent: "space-between",
    display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
            <img src="MATRIX_LOGO.png" alt="Logo" width="100%"/>
        </div>
         <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
            <img src="MATRIX_LOGO.png" alt="Logo" width="100%"/>
        </div>
       <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
            <img src="MATRIX_LOGO.png" alt="Logo" width="100%"/>
        </div>
        <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
            <img src="MATRIX_LOGO.png" alt="Logo" width="100%"/>
        </div>
        <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
            <img src="MATRIX_LOGO.png" alt="Logo" width="100%"/>
        </div>
    
    </div>
   <footer style={{
    backgroundColor: "black", color: "white", textAlign: "center", padding: "5px", flexShrink: "0"
   }}>
        
        <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <p>Hello there this is a footer</p>
                <p>Hello there this is a footer</p>
                <p>Hello there this is a footer</p>
        </div>
    </footer>

 
    </div>
  );
}

export default App;
